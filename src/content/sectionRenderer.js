/**
 * Section renderer — dispatches to the correct renderer by section type.
 * Dynamically imports lesson data on first access.
 */

import { findSection } from '../data/courseStructure.js';

// Renderer imports
import { renderIntro } from './introRenderer.js';
import { renderContent } from './contentRenderer.js';
import { renderGuidedExample } from './guidedExampleRenderer.js';
import { renderSummary } from './summaryRenderer.js';

// Lesson data cache
const lessonCache = {};

const renderers = {
  'intro': renderIntro,
  'content': renderContent,
  'guided-example': renderGuidedExample,
  'summary': renderSummary,
  // activity and quiz renderers will be added in later phases
};

export async function renderSection(sectionId, containerEl) {
  const found = findSection(sectionId);
  if (!found) {
    containerEl.innerHTML = '<p>Section not found.</p>';
    return { requireInteraction: false };
  }

  const { lesson, section } = found;

  // Load lesson data
  const lessonData = await loadLessonData(lesson.id);
  const sectionData = lessonData?.sections?.find(s => s.id === sectionId);

  if (!sectionData) {
    containerEl.innerHTML = `
      <div class="content-card">
        <h2>${section.title}</h2>
        <p>Content coming soon for Lesson ${lesson.num}: ${lesson.title}</p>
      </div>
    `;
    return { requireInteraction: false };
  }

  const renderer = renderers[section.type];
  if (renderer) {
    return renderer(sectionData, lesson, containerEl);
  }

  // Fallback for activity/quiz types not yet implemented
  containerEl.innerHTML = `
    <div class="content-card">
      <h2>${section.title}</h2>
      <p>This ${section.type} section will be interactive. Content loading soon!</p>
    </div>
  `;
  return { requireInteraction: section.type === 'activity' || section.type === 'quiz' };
}

async function loadLessonData(lessonId) {
  if (lessonCache[lessonId]) return lessonCache[lessonId];

  const num = lessonId.replace('L', '');
  try {
    const module = await import(`../data/lessons/lesson${num}.js`);
    lessonCache[lessonId] = module.default;
    return module.default;
  } catch {
    return null;
  }
}

/** Register additional renderers (used by activity/quiz modules) */
export function registerRenderer(type, renderFn) {
  renderers[type] = renderFn;
}
