/**
 * Prompt Challenge — simulated AI chat activity.
 * Student types a prompt, evaluator scores it, shows tiered response + criteria.
 */

import { evaluatePrompt } from '../engine/evaluator.js';
import { typeText } from '../engine/typingAnimation.js';
import { getMascotSvg } from '../graphics/mascot.js';

export function renderPromptChallenge(containerEl, challenge, onComplete) {
  containerEl.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'chat-container';

  // Task description
  const taskEl = document.createElement('div');
  taskEl.className = 'chat-task';
  taskEl.innerHTML = `<strong>Challenge:</strong> ${challenge.task}`;
  wrapper.appendChild(taskEl);

  // Chat messages area
  const messagesEl = document.createElement('div');
  messagesEl.className = 'chat-messages';
  wrapper.appendChild(messagesEl);

  // Input area
  const inputArea = document.createElement('div');
  inputArea.className = 'chat-input-area';

  const input = document.createElement('textarea');
  input.className = 'chat-input';
  input.placeholder = 'Type your prompt here...';
  input.rows = 2;
  inputArea.appendChild(input);

  const sendBtn = document.createElement('button');
  sendBtn.className = 'chat-send-btn';
  sendBtn.textContent = 'Send to AI';
  inputArea.appendChild(sendBtn);

  wrapper.appendChild(inputArea);
  containerEl.appendChild(wrapper);

  // Criteria and feedback containers (below chat)
  const criteriaEl = document.createElement('div');
  criteriaEl.className = 'criteria-checklist';
  criteriaEl.style.display = 'none';
  containerEl.appendChild(criteriaEl);

  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'feedback-message';
  feedbackEl.style.display = 'none';
  containerEl.appendChild(feedbackEl);

  // Actions (hint + retry)
  const actionsEl = document.createElement('div');
  actionsEl.className = 'chat-actions';

  const hintBtn = document.createElement('button');
  hintBtn.className = 'btn-hint';
  hintBtn.textContent = '💡 Show Hint';
  let hintShown = false;
  hintBtn.addEventListener('click', () => {
    if (!hintShown && challenge.hint) {
      const hintBubble = document.createElement('div');
      hintBubble.className = 'mascot-speech';
      hintBubble.style.marginTop = '12px';
      hintBubble.innerHTML = `
        <div class="mascot-img" style="width:50px;height:50px">${getMascotSvg('thinking')}</div>
        <div class="speech-bubble" style="font-size:0.9rem">${challenge.hint}</div>
      `;
      containerEl.appendChild(hintBubble);
      hintShown = true;
      hintBtn.disabled = true;
      hintBtn.textContent = '💡 Hint Shown';
    }
  });
  actionsEl.appendChild(hintBtn);

  const retryBtn = document.createElement('button');
  retryBtn.className = 'btn-retry';
  retryBtn.textContent = '🔄 Try Again';
  retryBtn.style.display = 'none';
  retryBtn.addEventListener('click', () => {
    messagesEl.innerHTML = '';
    criteriaEl.style.display = 'none';
    feedbackEl.style.display = 'none';
    retryBtn.style.display = 'none';
    input.value = '';
    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  });
  actionsEl.appendChild(retryBtn);

  containerEl.appendChild(actionsEl);

  // Send handler
  async function handleSend() {
    const promptText = input.value.trim();
    if (!promptText) return;

    input.disabled = true;
    sendBtn.disabled = true;

    // Add user bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble chat-bubble-user';
    userBubble.innerHTML = `<div class="bubble-label">You</div>${escapeHtml(promptText)}`;
    messagesEl.appendChild(userBubble);

    // Evaluate
    const result = evaluatePrompt(promptText, challenge);

    // Add AI bubble with typing animation
    const aiBubble = document.createElement('div');
    aiBubble.className = 'chat-bubble chat-bubble-ai';
    aiBubble.innerHTML = '<div class="bubble-label">AI</div>';
    const responseText = document.createElement('span');
    aiBubble.appendChild(responseText);
    messagesEl.appendChild(aiBubble);

    // Show typing indicator briefly
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    aiBubble.insertBefore(typingIndicator, responseText);

    await new Promise(r => setTimeout(r, 800));
    typingIndicator.remove();

    // Type out response
    await typeText(responseText, result.response, 20);

    // Show criteria checklist
    renderCriteria(criteriaEl, challenge.criteria, result.matched, result.missed);
    criteriaEl.style.display = '';

    // Show feedback
    feedbackEl.className = `feedback-message ${result.tier}`;
    feedbackEl.textContent = result.feedback;
    feedbackEl.style.display = '';

    // Show retry
    retryBtn.style.display = '';

    // Scroll to feedback
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Complete if good or great
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

function renderCriteria(container, allCriteria, matched, missed) {
  const matchedIds = new Set(matched.map(c => c.id));
  let html = '<h4>Prompt Checklist</h4>';
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
