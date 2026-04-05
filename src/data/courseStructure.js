/**
 * Master course outline — defines all lessons and sections.
 * Each section has an ID, type, and title.
 * Content data is loaded lazily from lesson files.
 */

export const course = {
  title: 'Prompt Engineering Tutorial',
  subtitle: 'Learn to talk to AI like a pro!',
  lessons: [
    {
      id: 'L1',
      num: 1,
      title: 'Why Details Matter',
      subtitle: 'Specificity is your superpower',
      sections: [
        { id: 'L1S1', type: 'intro', title: 'Introduction' },
        { id: 'L1S2', type: 'content', title: 'Vague vs. Specific Prompts' },
        { id: 'L1S3', type: 'guided-example', title: 'Watch Me: Adding Details' },
        { id: 'L1S4', type: 'activity', title: 'Practice: Detail Challenges' },
        { id: 'L1S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L1S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L2',
      num: 2,
      title: 'The CRAFT Framework',
      subtitle: 'A system for great prompts',
      sections: [
        { id: 'L2S1', type: 'intro', title: 'Introduction' },
        { id: 'L2S2', type: 'content', title: 'Meet CRAFT' },
        { id: 'L2S3', type: 'guided-example', title: 'Watch Me: Building a CRAFT Prompt' },
        { id: 'L2S4', type: 'activity', title: 'Practice: CRAFT Challenges' },
        { id: 'L2S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L2S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L3',
      num: 3,
      title: 'Fix the Bad Prompt',
      subtitle: 'The art of iteration',
      sections: [
        { id: 'L3S1', type: 'intro', title: 'Introduction' },
        { id: 'L3S2', type: 'content', title: 'Why Iteration Matters' },
        { id: 'L3S3', type: 'guided-example', title: 'Watch Me: Fixing a Bad Prompt' },
        { id: 'L3S4', type: 'activity', title: 'Practice: Fix These Prompts' },
        { id: 'L3S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L3S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L4',
      num: 4,
      title: 'Power Techniques',
      subtitle: 'Level up your prompting',
      sections: [
        { id: 'L4S1', type: 'intro', title: 'Introduction' },
        { id: 'L4S2', type: 'content', title: 'Advanced Prompting Tricks' },
        { id: 'L4S3', type: 'guided-example', title: 'Watch Me: Power Techniques in Action' },
        { id: 'L4S4', type: 'activity', title: 'Practice: Power Challenges' },
        { id: 'L4S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L4S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L5',
      num: 5,
      title: 'Know the Limits',
      subtitle: 'AI isn\'t always right',
      sections: [
        { id: 'L5S1', type: 'intro', title: 'Introduction' },
        { id: 'L5S2', type: 'content', title: 'When AI Gets It Wrong' },
        { id: 'L5S3', type: 'guided-example', title: 'Watch Me: Spotting AI Mistakes' },
        { id: 'L5S4', type: 'activity', title: 'Practice: Limit Challenges' },
        { id: 'L5S5', type: 'quiz', title: 'Check Your Understanding' },
        { id: 'L5S6', type: 'summary', title: 'Lesson Summary' },
      ],
    },
    {
      id: 'L6',
      num: 6,
      title: 'Prompt Master Challenge',
      subtitle: 'Put it all together',
      sections: [
        { id: 'L6S1', type: 'intro', title: 'Introduction' },
        { id: 'L6S2', type: 'content', title: 'Review: Your Prompt Toolbox' },
        { id: 'L6S3', type: 'activity', title: 'Boss Challenges' },
        { id: 'L6S4', type: 'quiz', title: 'Final Assessment' },
        { id: 'L6S5', type: 'summary', title: 'Course Complete!' },
      ],
    },
  ],
};

/** Get a flat ordered list of all section IDs */
export function getAllSectionIds() {
  const ids = [];
  for (const lesson of course.lessons) {
    for (const section of lesson.sections) {
      ids.push(section.id);
    }
  }
  return ids;
}

/** Find lesson + section objects by section ID */
export function findSection(sectionId) {
  for (const lesson of course.lessons) {
    for (const section of lesson.sections) {
      if (section.id === sectionId) {
        return { lesson, section };
      }
    }
  }
  return null;
}

/** Get the section ID before/after the given one */
export function getAdjacentSections(sectionId) {
  const all = getAllSectionIds();
  const idx = all.indexOf(sectionId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
