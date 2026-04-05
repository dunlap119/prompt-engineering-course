/**
 * Sequential unlock logic.
 * Section N requires section N-1 to be complete.
 * First section of lesson N requires last section of lesson N-1 to be complete.
 */

import { getAllSectionIds } from '../data/courseStructure.js';
import { isSectionComplete } from './progressStore.js';

export function isSectionUnlocked(sectionId) {
  const all = getAllSectionIds();
  const idx = all.indexOf(sectionId);

  // First section is always unlocked
  if (idx <= 0) return true;

  // Previous section must be complete
  return isSectionComplete(all[idx - 1]);
}

/** Find the latest unlocked but incomplete section (for resume) */
export function getResumeSectionId() {
  const all = getAllSectionIds();
  for (let i = 0; i < all.length; i++) {
    if (!isSectionComplete(all[i])) {
      return all[i];
    }
  }
  // All complete — return last section
  return all[all.length - 1];
}
