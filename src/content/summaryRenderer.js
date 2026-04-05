/**
 * Summary section renderer — key takeaways + next lesson preview.
 */

import { getMascotSvg } from '../graphics/mascot.js';
import { launchConfetti } from '../graphics/celebrations.js';

export function renderSummary(sectionData, lesson, containerEl) {
  containerEl.innerHTML = '';

  const heading = document.createElement('div');
  heading.className = 'section-heading';
  heading.innerHTML = `<h2>${sectionData.title}</h2>`;
  containerEl.appendChild(heading);

  // Mascot celebration
  const mascot = document.createElement('div');
  mascot.className = 'mascot-speech';
  mascot.innerHTML = `
    <div class="mascot-img">${getMascotSvg('celebrating')}</div>
    <div class="speech-bubble">${sectionData.data.mascotMessage || `Great work finishing Lesson ${lesson.num}! Here's what you learned.`}</div>
  `;
  containerEl.appendChild(mascot);

  // Key takeaways
  if (sectionData.data.keyTakeaways?.length) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let html = '<h3>Key Takeaways</h3><ul class="takeaways-list">';
    for (const item of sectionData.data.keyTakeaways) {
      html += `<li>${item}</li>`;
    }
    html += '</ul>';
    card.innerHTML = html;
    containerEl.appendChild(card);
  }

  // Next lesson preview
  if (sectionData.data.nextPreview) {
    const preview = document.createElement('div');
    preview.className = 'next-preview';
    preview.innerHTML = `<strong>Up Next:</strong> ${sectionData.data.nextPreview}`;
    containerEl.appendChild(preview);
  }

  // Launch confetti when viewing a summary!
  setTimeout(() => launchConfetti(), 500);

  return { requireInteraction: false };
}
