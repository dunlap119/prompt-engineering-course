/**
 * Guided example renderer — step-by-step reveal with before/after comparison.
 * Each step has its own inline "Next Step" button so readers don't have to
 * scroll past content to advance.
 */

import { getMascotSvg } from '../graphics/mascot.js';

export function renderGuidedExample(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  // Mascot introduction
  const mascot = document.createElement('div');
  mascot.className = 'mascot-speech';
  mascot.innerHTML = `
    <div class="mascot-img">${getMascotSvg('pointing')}</div>
    <div class="speech-bubble">${sectionData.data.intro || "Let me show you how to improve a prompt step by step. Click 'Next Step' to follow along!"}</div>
  `;
  containerEl.appendChild(mascot);

  // Steps container
  const stepsContainer = document.createElement('div');
  stepsContainer.className = 'guided-steps';

  const steps = sectionData.data.steps;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const stepEl = document.createElement('div');
    stepEl.className = `guided-step ${i === 0 ? 'revealed' : 'hidden-step'}`;
    stepEl.dataset.stepIndex = i;

    // Step header + body
    let bodyHtml = `
      <div class="guided-step-header">
        <span class="step-number">${i + 1}</span>
        <span class="step-label">${step.label}</span>
      </div>
      <div class="guided-step-body">
        ${step.prompt ? `<div class="prompt-bubble ${step.isImproved ? 'prompt-bubble-good' : 'prompt-bubble-bad'}">"${step.prompt}"</div>` : ''}
        ${step.response ? `<div class="callout callout-example"><span class="callout-icon">🤖</span><div class="callout-content"><p>${step.response}</p></div></div>` : ''}
        ${step.annotation ? `<div class="step-annotation">${step.annotation}</div>` : ''}
      </div>
    `;

    stepEl.innerHTML = bodyHtml;

    // Add inline "Next Step" button at the bottom of each step (except the last)
    if (i < steps.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'reveal-btn';
      nextBtn.innerHTML = `Next Step: ${steps[i + 1].label} →`;
      nextBtn.addEventListener('click', () => {
        const nextEl = stepsContainer.querySelector(`[data-step-index="${i + 1}"]`);
        if (nextEl) {
          nextEl.classList.remove('hidden-step');
          nextEl.classList.add('revealed');
          nextBtn.innerHTML = `${steps[i + 1].label} ✓`;
          nextBtn.disabled = true;
          nextBtn.style.background = 'var(--course-success)';
          nextEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      stepEl.appendChild(nextBtn);
    } else {
      // Last step — show "all done" indicator
      const doneTag = document.createElement('div');
      doneTag.className = 'reveal-btn';
      doneTag.style.background = 'var(--course-success)';
      doneTag.style.cursor = 'default';
      doneTag.style.display = 'inline-block';
      doneTag.innerHTML = 'All steps complete ✓';
      stepEl.appendChild(doneTag);
    }

    stepsContainer.appendChild(stepEl);
  }

  containerEl.appendChild(stepsContainer);

  return { requireInteraction: false };
}
