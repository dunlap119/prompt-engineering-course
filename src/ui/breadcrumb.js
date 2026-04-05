/**
 * Breadcrumb — shows current location in course.
 */

import { findSection } from '../data/courseStructure.js';

export function updateBreadcrumb(sectionId) {
  const container = document.getElementById('breadcrumb');
  const found = findSection(sectionId);

  if (!found) {
    container.innerHTML = '<span class="crumb-current">Course Home</span>';
    return;
  }

  const { lesson, section } = found;
  container.innerHTML = `
    <span class="crumb">Lesson ${lesson.num}</span>
    <span class="crumb-sep">›</span>
    <span class="crumb-current">${section.title}</span>
  `;
}
