/**
 * Activity runner — dispatches activities by type and tracks completion.
 * Registers as a renderer for "activity" section type.
 */

import { registerRenderer } from '../content/sectionRenderer.js';
import { renderPromptChallenge } from './promptChallenge.js';
import { renderDragDropMatch } from './dragDropMatch.js';
import { renderFillInBlank } from './fillInBlank.js';
import { renderFixBadPrompt } from './fixBadPrompt.js';
import { markSectionComplete } from '../progress/progressStore.js';

// Challenge data cache
const challengeCache = {};

async function loadChallenges(lessonNum) {
  if (challengeCache[lessonNum]) return challengeCache[lessonNum];
  try {
    const module = await import(`../data/challenges/lesson${lessonNum}Challenges.js`);
    const key = Object.keys(module).find(k => k.startsWith('lesson'));
    challengeCache[lessonNum] = module[key] || module.default;
    return challengeCache[lessonNum];
  } catch {
    return {};
  }
}

function renderActivitySection(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  const activities = sectionData.data.activities;
  const completed = new Set();

  // Progress dots
  const progressEl = document.createElement('div');
  progressEl.className = 'activity-progress';
  progressEl.innerHTML = `
    <span>Challenge</span>
    <div class="progress-dots">${activities.map((_, i) => `<span class="dot" data-idx="${i}"></span>`).join('')}</div>
    <span class="progress-count">0/${activities.length}</span>
  `;
  containerEl.appendChild(progressEl);

  const activityContainer = document.createElement('div');
  containerEl.appendChild(activityContainer);

  function updateDots(idx) {
    progressEl.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('complete', completed.has(i));
      dot.classList.toggle('current', i === idx);
    });
    progressEl.querySelector('.progress-count').textContent = `${completed.size}/${activities.length}`;
  }

  function addNextButton(idx) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn nav-btn-next';
    nextBtn.style.marginTop = '16px';

    if (idx < activities.length - 1) {
      nextBtn.textContent = 'Next Challenge →';
      nextBtn.addEventListener('click', () => renderActivity(idx + 1));
    } else {
      nextBtn.textContent = 'All Challenges Complete! ✓';
      nextBtn.style.background = 'var(--course-success)';
      nextBtn.addEventListener('click', () => {
        markSectionComplete(sectionData.id);
        window.dispatchEvent(new CustomEvent('section-completed', { detail: sectionData.id }));
      });
    }
    activityContainer.appendChild(nextBtn);
    updateDots(idx);
  }

  function onActivityComplete(idx) {
    completed.add(idx);
    addNextButton(idx);
  }

  async function renderActivity(idx) {
    activityContainer.innerHTML = '';
    const activity = activities[idx];
    updateDots(idx);

    if (activity.type === 'prompt-challenge') {
      const lessonNum = lesson.num || lesson.id.replace('L', '');
      const challenges = await loadChallenges(lessonNum);
      const challenge = challenges[activity.challengeRef];
      if (!challenge) {
        activityContainer.innerHTML = `<div class="content-card"><p>Challenge "${activity.challengeRef}" coming soon.</p></div>`;
        return;
      }
      renderPromptChallenge(activityContainer, challenge, () => onActivityComplete(idx));

    } else if (activity.type === 'fix-bad-prompt') {
      const lessonNum = lesson.num || lesson.id.replace('L', '');
      const challenges = await loadChallenges(lessonNum);
      const challenge = challenges[activity.challengeRef];
      if (!challenge) {
        activityContainer.innerHTML = `<div class="content-card"><p>Challenge "${activity.challengeRef}" coming soon.</p></div>`;
        return;
      }
      renderFixBadPrompt(activityContainer, challenge, () => onActivityComplete(idx));

    } else if (activity.type === 'drag-drop-match') {
      renderDragDropMatch(activityContainer, activity.inline, () => onActivityComplete(idx));

    } else if (activity.type === 'fill-in-blank') {
      renderFillInBlank(activityContainer, activity.inline, () => onActivityComplete(idx));
    }
  }

  renderActivity(0);
  return { requireInteraction: true };
}

registerRenderer('activity', renderActivitySection);
