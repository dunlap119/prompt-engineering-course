/**
 * Hash-based SPA router.
 * Routes: #/section/{sectionId}  (e.g. #/section/L1S1)
 */

let currentSectionId = null;
let onNavigateCallback = null;

export function initRouter(onNavigate) {
  onNavigateCallback = onNavigate;
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
}

export function navigate(sectionId) {
  window.location.hash = `#/section/${sectionId}`;
}

export function getCurrentSection() {
  return currentSectionId;
}

export function navigateHome() {
  window.location.hash = '#/home';
}

function handleHashChange() {
  const hash = window.location.hash;
  const match = hash.match(/^#\/section\/(\w+)$/);

  if (match) {
    const sectionId = match[1];
    if (sectionId !== currentSectionId) {
      currentSectionId = sectionId;
      if (onNavigateCallback) {
        onNavigateCallback(sectionId);
      }
    }
  } else {
    // No valid section hash (includes #/home, empty, or anything else) — show landing
    currentSectionId = null;
    if (onNavigateCallback) {
      onNavigateCallback(null);
    }
  }
}
