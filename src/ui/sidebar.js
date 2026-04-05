/**
 * Sidebar — course outline with progress indicators.
 */

import { course } from '../data/courseStructure.js';
import { isSectionComplete, getCompletedSections } from '../progress/progressStore.js';
import { isSectionUnlocked } from '../progress/unlockManager.js';
import { navigate } from '../router.js';

let activeSectionId = null;

export function renderSidebar() {
  renderLogo();
  renderProgress();
  renderNav();
  setupMobileToggle();
}

export function highlightSection(sectionId) {
  activeSectionId = sectionId;

  // Update section highlights
  document.querySelectorAll('.nav-section').forEach(el => {
    el.classList.toggle('active', el.dataset.sectionId === sectionId);
  });

  // Auto-expand the lesson containing this section
  document.querySelectorAll('.nav-lesson').forEach(el => {
    const lessonId = el.dataset.lessonId;
    const lesson = course.lessons.find(l => l.id === lessonId);
    const containsSection = lesson?.sections.some(s => s.id === sectionId);
    el.classList.toggle('expanded', containsSection);
  });

  updateProgress();
}

export function updateProgress() {
  renderProgress();
  updateSectionStatuses();
}

function renderLogo() {
  const container = document.getElementById('sidebar-logo');
  container.innerHTML = `
    <svg width="160" height="50" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="40" font-family="Inter, sans-serif" font-size="28" font-weight="800" letter-spacing="1" fill="#f7f7f7">CREATE A</text>
      <g transform="translate(0,52)">
        <text x="0" y="40" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="#f7f7f7">LO</text>
        <g transform="translate(100,0)">
          <circle cx="24" cy="24" r="22" fill="none" stroke="#2292bf" stroke-width="10"/>
          <path d="M38,34 L38,14 L52,24 Z" fill="#2292bf" transform="rotate(20,38,24)"/>
        </g>
        <text x="150" y="40" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="#f7f7f7">P</text>
      </g>
    </svg>
  `;
}

function renderProgress() {
  const container = document.getElementById('sidebar-progress');
  const completed = getCompletedSections();
  let totalSections = 0;
  course.lessons.forEach(l => { totalSections += l.sections.length; });
  const pct = totalSections > 0 ? Math.round((completed.length / totalSections) * 100) : 0;

  // Count completed lessons
  let completedLessons = 0;
  for (const lesson of course.lessons) {
    const allDone = lesson.sections.every(s => isSectionComplete(s.id));
    if (allDone) completedLessons++;
  }

  container.innerHTML = `
    <div class="progress-label">Course Progress</div>
    <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%"></div></div>
    <div class="progress-text">${completedLessons} of ${course.lessons.length} lessons complete</div>
  `;
}

function renderNav() {
  const container = document.getElementById('sidebar-nav');
  container.innerHTML = '';

  for (const lesson of course.lessons) {
    const lessonEl = document.createElement('div');
    lessonEl.className = 'nav-lesson';
    lessonEl.dataset.lessonId = lesson.id;

    // Count completed sections in this lesson
    const completedCount = lesson.sections.filter(s => isSectionComplete(s.id)).length;

    // Lesson header
    const header = document.createElement('div');
    header.className = 'nav-lesson-header';
    header.innerHTML = `
      <span class="lesson-num">${lesson.num}</span>
      <span class="lesson-title-text">${lesson.title}</span>
      <span class="lesson-progress">${completedCount}/${lesson.sections.length}</span>
      <span class="chevron">&#9654;</span>
    `;
    header.addEventListener('click', () => {
      lessonEl.classList.toggle('expanded');
    });
    lessonEl.appendChild(header);

    // Section list
    const sectionsEl = document.createElement('div');
    sectionsEl.className = 'nav-sections';

    for (const section of lesson.sections) {
      const sectionEl = document.createElement('div');
      sectionEl.className = 'nav-section';
      sectionEl.dataset.sectionId = section.id;

      const completed = isSectionComplete(section.id);
      const unlocked = isSectionUnlocked(section.id);
      const active = section.id === activeSectionId;

      if (completed) sectionEl.classList.add('completed');
      if (!unlocked) sectionEl.classList.add('locked');
      if (active) sectionEl.classList.add('active');

      let statusIcon = '○'; // unlocked
      if (completed) statusIcon = '✓';
      else if (!unlocked) statusIcon = '🔒';
      else if (active) statusIcon = '●';

      sectionEl.innerHTML = `
        <span class="status-icon">${statusIcon}</span>
        <span class="section-title">${section.title}</span>
      `;

      if (unlocked) {
        sectionEl.addEventListener('click', () => {
          navigate(section.id);
          closeMobileSidebar();
        });
      }

      sectionsEl.appendChild(sectionEl);
    }

    lessonEl.appendChild(sectionsEl);
    container.appendChild(lessonEl);
  }
}

function updateSectionStatuses() {
  document.querySelectorAll('.nav-section').forEach(el => {
    const sectionId = el.dataset.sectionId;
    const completed = isSectionComplete(sectionId);
    const unlocked = isSectionUnlocked(sectionId);
    const active = sectionId === activeSectionId;

    el.classList.toggle('completed', completed);
    el.classList.toggle('locked', !unlocked);
    el.classList.toggle('active', active);

    const icon = el.querySelector('.status-icon');
    if (completed) icon.textContent = '✓';
    else if (!unlocked) icon.textContent = '🔒';
    else if (active) icon.textContent = '●';
    else icon.textContent = '○';
  });

  // Update lesson progress counts
  for (const lesson of course.lessons) {
    const lessonEl = document.querySelector(`.nav-lesson[data-lesson-id="${lesson.id}"]`);
    if (!lessonEl) continue;
    const completedCount = lesson.sections.filter(s => isSectionComplete(s.id)).length;
    const progressEl = lessonEl.querySelector('.lesson-progress');
    if (progressEl) progressEl.textContent = `${completedCount}/${lesson.sections.length}`;
  }
}

function setupMobileToggle() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const closeBtn = document.getElementById('sidebar-close');

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
  });

  overlay.addEventListener('click', closeMobileSidebar);
  closeBtn.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('visible');
}
