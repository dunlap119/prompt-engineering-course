/**
 * localStorage-based progress persistence.
 * Tracks section completion and quiz scores.
 */

const STORAGE_KEY = 'pe_course_progress';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { sections: {}, quizScores: {}, currentSection: null };
  } catch {
    return { sections: {}, quizScores: {}, currentSection: null };
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function markSectionComplete(sectionId) {
  const data = load();
  if (!data.sections[sectionId]?.completed) {
    data.sections[sectionId] = { completed: true, completedAt: new Date().toISOString() };
    save(data);
  }
}

export function isSectionComplete(sectionId) {
  const data = load();
  return !!data.sections[sectionId]?.completed;
}

export function saveQuizScore(quizId, score, total) {
  const data = load();
  data.quizScores[quizId] = { score, total, attempts: (data.quizScores[quizId]?.attempts || 0) + 1 };
  save(data);
}

export function getQuizScore(quizId) {
  const data = load();
  return data.quizScores[quizId] || null;
}

export function setCurrentSection(sectionId) {
  const data = load();
  data.currentSection = sectionId;
  save(data);
}

export function getCurrentSection() {
  const data = load();
  return data.currentSection;
}

export function getCompletedSections() {
  const data = load();
  return Object.keys(data.sections).filter(id => data.sections[id].completed);
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
