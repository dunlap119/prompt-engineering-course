/**
 * Guided example renderer — step-by-step reveal with before/after comparison.
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
  let currentStep = 0;

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const stepEl = document.createElement('div');
    stepEl.className = `guided-step ${i === 0 ? 'revealed' : 'hidden-step'}`;
    stepEl.dataset.stepIndex = i;

    stepEl.innerHTML = `
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

    stepsContainer.appendChild(stepEl);
  }

  containerEl.appendChild(stepsContainer);

  // Reveal button
  if (steps.length > 1) {
    const revealBtn = document.createElement('button');
    revealBtn.className = 'reveal-btn';
    revealBtn.innerHTML = 'Next Step →';

    revealBtn.addEventListener('click', () => {
      currentStep++;
      if (currentStep < steps.length) {
        const nextEl = stepsContainer.querySelector(`[data-step-index="${currentStep}"]`);
        if (nextEl) {
          nextEl.classList.remove('hidden-step');
          nextEl.classList.add('revealed');
          nextEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
      if (currentStep >= steps.length - 1) {
        revealBtn.innerHTML = 'All steps revealed ✓';
        revealBtn.disabled = true;
        revealBtn.style.background = 'var(--course-success)';
      }
    });

    containerEl.appendChild(revealBtn);
  }

  return { requireInteraction: false };
}
