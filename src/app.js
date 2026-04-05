/**
 * App entry point — wires router, sidebar, and content rendering.
 */

import { initRouter, navigate } from './router.js';
import { renderSidebar, highlightSection, updateProgress } from './ui/sidebar.js';
import { updateBreadcrumb } from './ui/breadcrumb.js';
import { renderSectionNav, setOnComplete } from './ui/sectionNav.js';
import { setupModalClose } from './ui/modal.js';
import { renderSection } from './content/sectionRenderer.js';
import { isSectionUnlocked, getResumeSectionId } from './progress/unlockManager.js';
import { setCurrentSection, getCurrentSection } from './progress/progressStore.js';

// Import activity/quiz runners so they register their renderers
import './activities/activityRunner.js';
import './activities/quizRunner.js';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  setupModalClose();

  setOnComplete(() => {
    updateProgress();
  });

  // Listen for section completion from activities/quizzes
  window.addEventListener('section-completed', () => {
    updateProgress();
    const current = window.location.hash.match(/(\w+)$/)?.[1];
    if (current) renderSectionNav(current);
  });

  initRouter(async (sectionId) => {
    if (!sectionId) {
      // No hash — resume or start from beginning
      const resume = getCurrentSection() || getResumeSectionId();
      navigate(resume);
      return;
    }

    // Guard: redirect if locked
    if (!isSectionUnlocked(sectionId)) {
      const resume = getResumeSectionId();
      navigate(resume);
      return;
    }

    // Update UI
    highlightSection(sectionId);
    updateBreadcrumb(sectionId);
    setCurrentSection(sectionId);

    // Render content
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';
    window.scrollTo(0, 0);

    const result = await renderSection(sectionId, contentArea);
    renderSectionNav(sectionId, result);
  });
});
