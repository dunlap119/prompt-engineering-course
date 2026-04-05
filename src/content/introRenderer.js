/**
 * Intro section renderer — objectives, essential questions, mascot greeting.
 */

import { getMascotSvg } from '../graphics/mascot.js';
import { getLessonHeaderSvg } from '../graphics/lessonHeaders.js';

export function renderIntro(sectionData, lesson, containerEl) {
  const { objectives, essentialQuestions } = sectionData.data;

  containerEl.innerHTML = '';

  // Lesson header banner with illustration
  const banner = document.createElement('div');
  banner.className = 'lesson-header-banner';
  banner.innerHTML = `
    <div class="banner-text">
      <h1>Lesson ${lesson.num}: ${lesson.title}</h1>
      <p>${lesson.subtitle}</p>
    </div>
    <div class="banner-illustration">${getLessonHeaderSvg(lesson.num)}</div>
  `;
  containerEl.appendChild(banner);

  // Mascot greeting
  const mascotGreeting = sectionData.data.mascotMessage || `Welcome to Lesson ${lesson.num}! Let's learn about ${lesson.title.toLowerCase()}.`;
  const mascot = document.createElement('div');
  mascot.className = 'mascot-speech';
  mascot.innerHTML = `
    <div class="mascot-img">${getMascotSvg('greeting')}</div>
    <div class="speech-bubble">${mascotGreeting}</div>
  `;
  containerEl.appendChild(mascot);

  // Objectives
  if (objectives?.length) {
    const card = document.createElement('div');
    card.className = 'content-card';
    let html = '<h3>What You\'ll Learn</h3><ul class="objectives-list">';
    for (const obj of objectives) {
      html += `<li>${obj}</li>`;
    }
    html += '</ul>';
    card.innerHTML = html;
    containerEl.appendChild(card);
  }

  // Essential questions
  if (essentialQuestions?.length) {
    const eq = document.createElement('div');
    eq.className = 'essential-questions';
    let html = '<h4>Think About This</h4><ul>';
    for (const q of essentialQuestions) {
      html += `<li>${q}</li>`;
    }
    html += '</ul>';
    eq.innerHTML = html;
    containerEl.appendChild(eq);
  }

  return { requireInteraction: false };
}
