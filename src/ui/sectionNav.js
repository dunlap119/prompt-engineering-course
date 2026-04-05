/**
 * Section navigation — Previous / Next / Mark Complete buttons.
 */

import { getAdjacentSections, findSection } from '../data/courseStructure.js';
import { isSectionComplete, markSectionComplete } from '../progress/progressStore.js';
import { isSectionUnlocked } from '../progress/unlockManager.js';
import { navigate } from '../router.js';

let onCompleteCallback = null;

export function renderSectionNav(sectionId, options = {}) {
  const container = document.getElementById('section-nav');
  const { prev, next } = getAdjacentSections(sectionId);
  const completed = isSectionComplete(sectionId);

  // options.requireInteraction: true for quizzes/activities that need completion via their own UI
  const showCompleteBtn = !completed && !options.requireInteraction;

  container.innerHTML = '';

  // Previous button
  if (prev) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn nav-btn-prev';
    const prevInfo = findSection(prev);
    prevBtn.innerHTML = `← ${prevInfo?.section.title || 'Previous'}`;
    prevBtn.addEventListener('click', () => navigate(prev));
    container.appendChild(prevBtn);
  } else {
    container.appendChild(document.createElement('div')); // spacer
  }

  // Next / Complete button
  if (showCompleteBtn) {
    const completeBtn = document.createElement('button');
    completeBtn.className = 'nav-btn nav-btn-complete';
    completeBtn.innerHTML = next ? 'Complete & Continue →' : 'Complete Lesson ✓';
    completeBtn.addEventListener('click', () => {
      markSectionComplete(sectionId);
      if (onCompleteCallback) onCompleteCallback();
      if (next && isSectionUnlocked(next)) {
        navigate(next);
      }
    });
    container.appendChild(completeBtn);
  } else if (completed && next) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn nav-btn-next';
    const nextInfo = findSection(next);
    nextBtn.innerHTML = `${nextInfo?.section.title || 'Next'} →`;
    if (isSectionUnlocked(next)) {
      nextBtn.addEventListener('click', () => navigate(next));
    } else {
      nextBtn.disabled = true;
    }
    container.appendChild(nextBtn);
  }
}

export function setOnComplete(callback) {
  onCompleteCallback = callback;
}
