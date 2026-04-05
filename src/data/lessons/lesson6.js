/**
 * Lesson 6: Prompt Master Challenge (Final Synthesis)
 */

export default {
  id: 'L6',
  title: 'Prompt Master Challenge',
  sections: [
    {
      id: 'L6S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "This is it — the final challenge! You've learned specificity, the CRAFT framework, iteration, power techniques, and how to spot AI mistakes. Now it's time to prove you can combine ALL of those skills. Ready to become a Prompt Master?",
        objectives: [
          'Combine all prompt engineering skills in a single prompt',
          'Choose the right technique for each situation',
          'Write prompts that are specific, well-structured, and defensive',
          'Demonstrate mastery of the full prompt engineering toolkit',
        ],
        essentialQuestions: [
          'How do you decide which prompt engineering skills to use in a given situation?',
          'What does a truly great prompt look like when it combines everything you\'ve learned?',
        ],
      },
    },
    {
      id: 'L6S2',
      type: 'content',
      title: 'Your Complete Toolkit',
      data: {
        subtitle: 'Everything you\'ve learned — all in one place',
        blocks: [
          {
            type: 'text',
            content: 'Before you take on the boss challenges, let\'s do a quick review of every skill in your prompt engineering toolkit. Think of this as your <strong>pre-battle checklist</strong> — make sure all your gear is ready!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Skill Checklist',
          },
          {
            type: 'key-term',
            term: '1. Specificity (Lesson 1)',
            definition: 'Vague prompts = vague answers. Always include details: specific topic, audience, scope (how much), and format. The more detail, the better the result.',
          },
          {
            type: 'key-term',
            term: '2. The CRAFT Framework (Lesson 2)',
            definition: 'A 5-step system for building great prompts: Context (background info), Role (who the AI should be), Audience (who it\'s for), Format (how to structure it), Tone (what mood or style).',
          },
          {
            type: 'key-term',
            term: '3. Iteration (Lesson 3)',
            definition: 'Your first prompt is just the starting point. Read the response, figure out what\'s off, and revise. Great prompts are built through a cycle of try, evaluate, improve.',
          },
          {
            type: 'key-term',
            term: '4. Power Techniques (Lesson 4)',
            definition: 'Three advanced moves: Role-Playing (assign a persona), Chain-of-Thought ("think step by step"), and Few-Shot Examples (show the format you want). Stack them for maximum control.',
          },
          {
            type: 'key-term',
            term: '5. Knowing the Limits (Lesson 5)',
            definition: 'AI can hallucinate, show bias, and sound confident when wrong. Use defensive prompting: ask for sources, give permission to say "I don\'t know," and separate facts from opinions.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: '<strong>When to use what:</strong><ul><li>Need a better response? Add <strong>specificity</strong> and <strong>CRAFT</strong>.</li><li>Not happy with the first result? <strong>Iterate</strong>.</li><li>Want the AI to teach, explain, or perform? Use <strong>role-playing</strong>.</li><li>Need to see reasoning or check work? Use <strong>chain-of-thought</strong>.</li><li>Want a specific output format? Use <strong>few-shot examples</strong>.</li><li>Need to trust the information? Use <strong>defensive prompting</strong>.</li></ul>',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Professional prompt engineers at tech companies use these exact same skills every day. The only difference? You learned them in middle school. That\'s a serious head start!',
          },
          {
            type: 'text',
            content: 'The boss challenges ahead will test your ability to <strong>combine</strong> multiple skills. There\'s no single right answer — the best prompt is the one that gets you exactly the result you need. Trust your toolkit and let\'s go!',
          },
        ],
      },
    },
    {
      id: 'L6S3',
      type: 'activity',
      title: 'Boss Challenges',
      data: {
        activities: [
          { type: 'prompt-challenge', challengeRef: 'L6C1' },
          { type: 'prompt-challenge', challengeRef: 'L6C2' },
          { type: 'prompt-challenge', challengeRef: 'L6C3' },
          { type: 'prompt-challenge', challengeRef: 'L6C4' },
          { type: 'prompt-challenge', challengeRef: 'L6C5' },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L6S4',
      type: 'quiz',
      title: 'Final Assessment',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'You need an AI to create study flashcards in a very specific format. Which technique is MOST helpful?',
            options: [
              'Asking the AI to think step by step',
              'Giving the AI a few-shot example of the format you want',
              'Telling the AI to act as a teacher',
              'Adding "please" to your prompt',
            ],
            correct: 1,
            feedback: 'Few-shot examples are the best way to get a specific format. By showing the AI exactly one example of what you want, it will copy that pattern precisely.',
          },
          {
            type: 'multiple-choice',
            question: 'Your friend uses AI to get facts for a history report and copies them directly without checking. What\'s the biggest risk?',
            options: [
              'The AI might use too many big words',
              'The AI might give a response that\'s too long',
              'The AI might hallucinate — making up fake facts, dates, or sources that sound real',
              'The AI might give facts that are too basic',
            ],
            correct: 2,
            feedback: 'AI hallucinations are the biggest risk when using AI for factual information. The AI can confidently make up fake facts, dates, quotes, and even sources. Always verify!',
          },
          {
            type: 'true-false',
            question: 'A good prompt engineer writes the perfect prompt on the first try and never needs to revise.',
            correct: false,
            feedback: 'Even experts iterate! The best prompts come from a cycle of writing, evaluating the response, and improving. Your first prompt is a starting point, not a final product.',
          },
          {
            type: 'multiple-choice',
            question: 'Which prompt uses the MOST techniques effectively?',
            options: [
              '"Tell me about space."',
              '"You are an astronomer. Explain how black holes form to a 7th grader. Think step by step. If anything is uncertain, say so."',
              '"Explain black holes step by step."',
              '"You are an astronomer. Tell me about space."',
            ],
            correct: 1,
            feedback: 'This prompt combines role-playing ("You are an astronomer"), specificity (how black holes form), audience (7th grader), chain-of-thought (step by step), AND defensive prompting (say if uncertain). That\'s stacking multiple skills!',
          },
          {
            type: 'multiple-choice',
            question: 'What is the MOST important thing to remember about using AI?',
            options: [
              'AI is always right if you use the right prompt',
              'You should never use AI because it makes mistakes',
              'AI is a powerful tool, but you should always verify important information and think critically',
              'The longer your prompt, the better the answer',
            ],
            correct: 2,
            feedback: 'AI is an incredible tool when used wisely. The key is critical thinking: use good prompts to get great results, but always verify important information. Trust, but verify!',
          },
        ],
      },
    },
    {
      id: 'L6S5',
      type: 'summary',
      title: 'Course Complete!',
      data: {
        mascotMessage: "YOU DID IT! You are now officially a Prompt Master! You've learned skills that most adults don't even know about. From specificity to CRAFT, from iteration to power techniques, from knowing the limits to defensive prompting — you've got the full toolkit. Go out there and use AI like the pro you are!",
        keyTakeaways: [
          '<strong>Specificity is everything.</strong> Vague prompts give vague answers. Details are your superpower.',
          '<strong>CRAFT gives you structure.</strong> Context, Role, Audience, Format, and Tone — a framework for building great prompts every time.',
          '<strong>Iteration is how pros work.</strong> Your first prompt is never your last. Read, evaluate, improve, repeat.',
          '<strong>Power techniques level you up.</strong> Role-playing, chain-of-thought, and few-shot examples give you advanced control over AI.',
          '<strong>Knowing the limits keeps you safe.</strong> AI hallucinates, has biases, and always sounds confident. Defensive prompting and fact-checking are essential.',
          '<strong>YOU are always in charge.</strong> AI is a tool. You are the thinker, the creator, and the decision-maker. The better your prompts, the better the tool works for you.',
        ],
      },
    },
  ],
};
