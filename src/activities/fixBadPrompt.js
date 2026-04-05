/**
 * Fix the Bad Prompt — variant of prompt challenge.
 * Shows a pre-populated bad prompt + poor response.
 * Student writes an improved version.
 */

import { evaluatePrompt } from '../engine/evaluator.js';
import { typeText } from '../engine/typingAnimation.js';

export function renderFixBadPrompt(containerEl, challenge, onComplete) {
  containerEl.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'chat-container';

  // Task description
  const taskEl = document.createElement('div');
  taskEl.className = 'chat-task';
  taskEl.innerHTML = `<strong>Fix This Prompt:</strong> ${challenge.task}`;
  wrapper.appendChild(taskEl);

  // Chat messages area
  const messagesEl = document.createElement('div');
  messagesEl.className = 'chat-messages';

  // Show the bad prompt + poor response
  const badBubble = document.createElement('div');
  badBubble.className = 'chat-bubble chat-bubble-bad';
  badBubble.innerHTML = `<div class="bubble-label">Original (Bad) Prompt</div>"${challenge.badPrompt}"`;
  messagesEl.appendChild(badBubble);

  const badResponse = document.createElement('div');
  badResponse.className = 'chat-bubble chat-bubble-ai';
  badResponse.innerHTML = `<div class="bubble-label">AI's Response</div>${challenge.badResponse}`;
  messagesEl.appendChild(badResponse);

  // Separator
  const separator = document.createElement('div');
  separator.style.cssText = 'text-align:center; padding:12px; color:var(--text-muted); font-size:0.85rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em;';
  separator.textContent = '↓ Now write a better version ↓';
  messagesEl.appendChild(separator);

  wrapper.appendChild(messagesEl);

  // Input area for improved prompt
  const inputArea = document.createElement('div');
  inputArea.className = 'chat-input-area';

  const input = document.createElement('textarea');
  input.className = 'chat-input';
  input.placeholder = 'Write your improved prompt here...';
  input.rows = 3;
  inputArea.appendChild(input);

  const sendBtn = document.createElement('button');
  sendBtn.className = 'chat-send-btn';
  sendBtn.textContent = 'Send Improved Prompt';
  inputArea.appendChild(sendBtn);

  wrapper.appendChild(inputArea);
  containerEl.appendChild(wrapper);

  // Criteria and feedback containers
  const criteriaEl = document.createElement('div');
  criteriaEl.className = 'criteria-checklist';
  criteriaEl.style.display = 'none';
  containerEl.appendChild(criteriaEl);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'feedback-message';
  feedbackEl.style.display = 'none';
  containerEl.appendChild(feedbackEl);

  // Retry button
  const retryBtn = document.createElement('button');
  retryBtn.className = 'btn-retry';
  retryBtn.textContent = '🔄 Try Again';
  retryBtn.style.display = 'none';
  retryBtn.style.marginTop = '12px';
  retryBtn.addEventListener('click', () => {
    // Remove the improved prompt bubbles
    messagesEl.querySelectorAll('.improved-bubble').forEach(el => el.remove());
    criteriaEl.style.display = 'none';
    feedbackEl.style.display = 'none';
    retryBtn.style.display = 'none';
    input.value = '';
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  });
  containerEl.appendChild(retryBtn);

  async function handleSend() {
    const promptText = input.value.trim();
    if (!promptText) return;

    input.disabled = true;
    sendBtn.disabled = true;

    // Add improved prompt bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-bubble-user improved-bubble';
    userBubble.innerHTML = `<div class="bubble-label">Your Improved Prompt</div>${escapeHtml(promptText)}`;
    messagesEl.appendChild(userBubble);

    // Evaluate
    const result = evaluatePrompt(promptText, challenge);

    // Add AI response
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble chat-bubble-ai improved-bubble';
    aiBubble.innerHTML = '<div class="bubble-label">AI\'s New Response</div>';
    const responseText = document.createElement('span');
    aiBubble.appendChild(responseText);
    messagesEl.appendChild(aiBubble);

    // Typing animation
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    aiBubble.insertBefore(typing, responseText);
    await new Promise(r => setTimeout(r, 600));
    typing.remove();
    await typeText(responseText, result.response, 20);

    // Show criteria
    renderCriteria(criteriaEl, challenge.criteria, result.matched);
    criteriaEl.style.display = '';

    feedbackEl.className = `feedback-message ${result.tier}`;
    feedbackEl.textContent = result.feedback;
    feedbackEl.style.display = '';
    retryBtn.style.display = '';

    if (result.tier === 'good' || result.tier === 'great') {
      if (onComplete) onComplete(result);
    }
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
}

function renderCriteria(container, allCriteria, matched) {
  const matchedIds = new Set(matched.map(c => c.id));
  let html = '<h4>Improvement Checklist</h4>';
  for (const c of allCriteria) {
    const pass = matchedIds.has(c.id);
    html += `
      <div class="criteria-item">
        <span class="criteria-icon ${pass ? 'pass' : 'fail'}">${pass ? '✓' : '✗'}</span>
        <span class="criteria-label ${pass ? 'pass' : ''}">${c.label}</span>
      </div>
    `;
  }
  container.innerHTML = html;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
