/**
 * Lesson 1: Why Details Matter (Specificity)
 */

export default {
  id: 'L1',
  title: 'Why Details Matter',
  sections: [
    {
      id: 'L1S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Hey there! I'm Loopy, and I'll be your guide through this course. Ready to learn how to talk to AI like a pro? Let's start with the #1 secret: <strong>details matter!</strong>",
        objectives: [
          'Understand why vague prompts give vague results',
          'Learn how adding details makes AI responses more useful',
          'Practice writing specific prompts for different situations',
        ],
        essentialQuestions: [
          'What happens when you ask AI something too general?',
          'How do small details change the kind of response you get?',
        ],
      },
    },
    {
      id: 'L1S2',
      type: 'content',
      title: 'Vague vs. Specific Prompts',
      data: {
        subtitle: 'The difference between "meh" and "amazing" AI responses',
        blocks: [
          {
            type: 'text',
            content: 'Imagine you asked a friend: <strong>"Tell me about stuff."</strong> They\'d probably look at you confused. What stuff? About what? How much detail do you want? AI works the same way — the vaguer your question, the vaguer the answer.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'AI chatbots process <strong>billions</strong> of words of text. When you give a vague prompt, the AI has to guess what you want from all that information. No wonder the answer feels generic!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'See the Difference',
          },
          {
            type: 'comparison-table',
            headers: ['😐 Vague Prompt', '🎯 Specific Prompt'],
            rows: [
              ['"Tell me about animals"', '"Tell me 5 fun facts about golden retrievers for a 12-year-old"'],
              ['"Help me with my homework"', '"Explain photosynthesis in simple words a 6th grader would understand"'],
              ['"Write a story"', '"Write a 3-paragraph mystery story set in a haunted library, for middle schoolers"'],
              ['"Tell me about space"', '"What are the 3 biggest differences between Mars and Earth? Use a comparison table."'],
            ],
          },
          {
            type: 'text',
            content: 'Notice the pattern? Specific prompts include <strong>what</strong> you want, <strong>who</strong> it\'s for, <strong>how much</strong> detail, and sometimes <strong>what format</strong> to use.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The 4 Detail Boosters',
          },
          {
            type: 'text',
            content: 'When writing a prompt, try adding these details:',
          },
          {
            type: 'key-term',
            term: '🎯 Topic',
            definition: 'Be specific about WHAT you\'re asking about. "Golden retrievers" instead of "animals."',
          },
          {
            type: 'key-term',
            term: '👤 Audience',
            definition: 'Tell the AI WHO this is for. "For a 12-year-old" changes the reading level and tone.',
          },
          {
            type: 'key-term',
            term: '📏 Scope',
            definition: 'Say HOW MUCH you want. "5 facts" or "3 paragraphs" or "a short summary."',
          },
          {
            type: 'key-term',
            term: '📋 Format',
            definition: 'Request a FORMAT. "As a numbered list" or "in a table" or "as a poem."',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'You don\'t need ALL four details every time — but the more you include, the better your result will be. Even adding just ONE detail to a vague prompt makes a big difference!',
          },
        ],
      },
    },
    {
      id: 'L1S3',
      type: 'guided-example',
      title: 'Watch Me: Adding Details',
      data: {
        intro: "Watch how I transform a vague prompt into a great one by adding details, one step at a time. Click 'Next Step' to see each improvement!",
        steps: [
          {
            label: 'Start with a vague prompt',
            prompt: 'Tell me about animals',
            response: 'Animals are living organisms that belong to the kingdom Animalia. They can be found in nearly every habitat on Earth, from the deepest oceans to the highest mountains. Animals come in many shapes and sizes...',
            annotation: 'The AI gave a super generic encyclopedia-style answer. It doesn\'t know what animal, what level of detail, or who\'s reading this. Let\'s fix that!',
            isImproved: false,
          },
          {
            label: 'Add a specific topic',
            prompt: 'Tell me about golden retrievers',
            response: 'Golden Retrievers are one of the most popular dog breeds in the world. They were originally bred in Scotland in the mid-19th century for retrieving waterfowl during hunting. Golden Retrievers are known for their friendly, reliable temperament...',
            annotation: 'Better! We went from ALL animals to one specific breed. But it still reads like a Wikipedia article. Let\'s make it more engaging.',
            isImproved: false,
          },
          {
            label: 'Add an audience',
            prompt: 'Tell me about golden retrievers for a 12-year-old',
            response: 'Golden Retrievers are awesome dogs! They\'re super friendly and love to play fetch (it\'s literally in their name — "retriever"!). They\'re one of the most popular dog breeds because they get along with just about everyone...',
            annotation: 'Now the tone is fun and age-appropriate! But it\'s still pretty open-ended. Let\'s focus it more.',
            isImproved: false,
          },
          {
            label: 'Add scope (how much)',
            prompt: 'Tell me 5 fun facts about golden retrievers for a 12-year-old',
            response: 'Here are 5 fun facts about Golden Retrievers! 🐕\n\n1. They were originally bred to retrieve ducks and other birds during hunting.\n2. Their fur is actually water-resistant — like a built-in raincoat!\n3. They\'re ranked #3 in intelligence among all dog breeds.\n4. A Golden Retriever named Charlie holds the world record for the loudest bark: 113 decibels!\n5. They stay puppy-like in their behavior for 3-4 years — longer than most breeds!',
            annotation: 'Now we get exactly 5 facts in a clear, fun format. But we can go one step further...',
            isImproved: true,
          },
          {
            label: 'Add a format request',
            prompt: 'Tell me 5 fun facts about golden retrievers for a 12-year-old. Use a numbered list with an emoji for each fact.',
            response: 'Here are 5 fun facts about Golden Retrievers! 🐕\n\n1. 🦆 They were bred to retrieve ducks — that\'s how they got their name!\n2. 🧥 Their fur is water-resistant, like a built-in raincoat.\n3. 🧠 They\'re the #3 smartest dog breed in the world.\n4. 📢 A Golden named Charlie holds the record for loudest bark — 113 decibels!\n5. 🐶 They act like puppies for 3-4 years, way longer than most breeds!',
            annotation: '<strong>This is a great prompt!</strong> It has all 4 detail boosters: specific <em>topic</em> (golden retrievers), <em>audience</em> (12-year-old), <em>scope</em> (5 facts), and <em>format</em> (numbered list with emojis). See how much better the response is?',
            isImproved: true,
          },
        ],
      },
    },
    {
      id: 'L1S4',
      type: 'activity',
      title: 'Practice: Detail Challenges',
      data: {
        activities: [
          { type: 'prompt-challenge', challengeRef: 'L1C1' },
          { type: 'prompt-challenge', challengeRef: 'L1C2' },
          { type: 'prompt-challenge', challengeRef: 'L1C3' },
          { type: 'prompt-challenge', challengeRef: 'L1C4' },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L1S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which prompt would give you the BEST response from an AI?',
            options: [
              'Tell me about science',
              'Explain science',
              'Explain how volcanoes erupt in 3 simple steps for a 5th grader',
              'Tell me everything about volcanoes',
            ],
            correct: 2,
            feedback: 'The third option is best because it has a specific topic (volcanoes erupting), scope (3 steps), format (simple steps), and audience (5th grader).',
          },
          {
            type: 'true-false',
            question: 'Adding the word "please" to a prompt makes the AI give a better answer.',
            correct: false,
            feedback: 'Being polite is nice, but what really improves AI responses is being specific — adding details about topic, audience, scope, and format.',
          },
          {
            type: 'multiple-choice',
            question: 'What is the MAIN reason vague prompts give bad results?',
            options: [
              'The AI is lazy',
              'The AI has to guess what you want from billions of possible answers',
              'The AI doesn\'t understand English well',
              'Vague prompts are too short',
            ],
            correct: 1,
            feedback: 'When your prompt is vague, the AI has no way to narrow down what you actually want. It guesses — and guesses are usually generic.',
          },
        ],
      },
    },
    {
      id: 'L1S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You crushed Lesson 1! You now know the #1 secret to great prompts: BE SPECIFIC. That's a huge deal!",
        keyTakeaways: [
          '<strong>Vague prompts = vague answers.</strong> The more generic your prompt, the more generic the response.',
          '<strong>Details are your superpower.</strong> Adding a specific topic, audience, scope, or format dramatically improves results.',
          '<strong>You don\'t need all 4 every time</strong> — even one extra detail makes a big difference.',
          '<strong>Think of it like ordering food:</strong> "Give me food" vs. "I\'d like a pepperoni pizza, medium, thin crust" — which one gets you what you actually want?',
        ],
        nextPreview: 'In Lesson 2, you\'ll learn the <strong>CRAFT Framework</strong> — a 5-step system that makes writing great prompts easy every time!',
      },
    },
  ],
};
