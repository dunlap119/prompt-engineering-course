/**
 * Simulated AI evaluator — scores student prompts against criteria.
 * No real AI calls — keyword/pattern matching with tiered responses.
 */

const testFunctions = {
  containsAny(prompt, words) {
    const lower = prompt.toLowerCase();
    return words.some(w => lower.includes(w.toLowerCase()));
  },

  containsAll(prompt, words) {
    const lower = prompt.toLowerCase();
    return words.every(w => lower.includes(w.toLowerCase()));
  },

  minWordCount(prompt, n) {
    return prompt.trim().split(/\s+/).length >= n;
  },

  containsPattern(prompt, pattern) {
    return pattern.test(prompt);
  },

  excludes(prompt, words) {
    const lower = prompt.toLowerCase();
    return !words.some(w => lower.includes(w.toLowerCase()));
  },
};

/**
 * Evaluate a prompt against a challenge definition.
 * @param {string} prompt - The student's prompt text
 * @param {object} challenge - Challenge definition with criteria, thresholds, responses
 * @returns {{ tier: string, score: number, matched: string[], missed: string[], response: string, feedback: string }}
 */
export function evaluatePrompt(prompt, challenge) {
  const normalized = prompt.trim().toLowerCase();
  let totalScore = 0;
  const matched = [];
  const missed = [];

  for (const criterion of challenge.criteria) {
    const testFn = testFunctions[criterion.test];
    if (!testFn) {
      missed.push(criterion);
      continue;
    }

    // Handle regex args (they may be stored as objects with source/flags)
    let args = criterion.args;
    if (criterion.test === 'containsPattern' && args[0] && !(args[0] instanceof RegExp)) {
      args = [new RegExp(args[0].source || args[0], args[0].flags || 'i')];
    }

    const passed = testFn(normalized, ...args);
    if (passed) {
      totalScore += criterion.weight || 1;
      matched.push(criterion);
    } else {
      missed.push(criterion);
    }
  }

  // Determine tier
  let tier = 'poor';
  if (totalScore >= (challenge.thresholds?.great || 3)) {
    tier = 'great';
  } else if (totalScore >= (challenge.thresholds?.good || 2)) {
    tier = 'good';
  }

  return {
    tier,
    score: totalScore,
    matched,
    missed,
    response: challenge.responses[tier],
    feedback: challenge.feedback[tier],
  };
}
