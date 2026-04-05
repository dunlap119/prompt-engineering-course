/**
 * Lesson 4: Power Techniques (Advanced Prompting)
 */

export default {
  id: 'L4',
  title: 'Power Techniques',
  sections: [
    {
      id: 'L4S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "You've been leveling up your prompt skills, and now it's time to unlock the power-ups! These three advanced techniques are like cheat codes for getting amazing responses from AI. Let's go!",
        objectives: [
          'Use role-playing prompts to control how AI talks and behaves',
          'Apply chain-of-thought prompting to get step-by-step reasoning',
          'Use few-shot examples to show AI the exact format you want',
          'Combine multiple techniques in a single prompt',
        ],
        essentialQuestions: [
          'How does giving AI a "character" change its response?',
          'Why is seeing the AI\'s reasoning step-by-step so powerful?',
          'How can showing examples help AI understand what you want?',
        ],
      },
    },
    {
      id: 'L4S2',
      type: 'content',
      title: 'Three Power Techniques',
      data: {
        subtitle: 'Advanced moves that give you superpowers over AI',
        blocks: [
          {
            type: 'text',
            content: 'You already know how to write specific prompts and use the CRAFT framework. Now it\'s time to learn three <strong>power techniques</strong> that professional prompt engineers use every day. Think of these as special abilities you can activate any time you need next-level results.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Technique 1: Role-Playing',
          },
          {
            type: 'key-term',
            term: '🎭 Role-Playing',
            definition: 'Telling the AI to act as a specific character or expert. When you assign a role, the AI changes its vocabulary, tone, and style to match that persona.',
          },
          {
            type: 'text',
            content: 'When you say <strong>"You are a..."</strong> at the start of your prompt, the AI completely transforms. It\'s like giving an actor a script — they become that character. A "patient math tutor" explains things differently than a "nature documentary narrator."',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'AI learned from billions of words written by teachers, scientists, comedians, historians, and more. When you assign a role, you\'re telling the AI which "style" of writing to use. That\'s why it works so well!',
          },
          {
            type: 'text',
            content: '<strong>Useful roles to try:</strong><ul><li>"You are a patient math tutor for middle school students."</li><li>"You are a nature documentary narrator describing everyday objects."</li><li>"You are a historian from the year 1776 describing modern technology."</li><li>"You are a supportive coach helping me study for a test."</li></ul>',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Technique 2: Chain-of-Thought',
          },
          {
            type: 'key-term',
            term: '🔗 Chain-of-Thought',
            definition: 'Asking the AI to "think step by step" so you can see its reasoning. Instead of just getting an answer, you see HOW it got there.',
          },
          {
            type: 'text',
            content: 'The magic phrase is: <strong>"Think step by step."</strong> This one simple addition makes the AI show its work, just like your math teacher asks you to do. And here\'s the best part — if you can see each step, you can spot where the AI made a mistake!',
          },
          {
            type: 'comparison-table',
            headers: ['Without Chain-of-Thought', 'With Chain-of-Thought'],
            rows: [
              [
                '"What is 15% of 80?"\n\nAI: "12"',
                '"What is 15% of 80? Think step by step."\n\nAI: "Step 1: Convert 15% to a decimal: 0.15. Step 2: Multiply 0.15 x 80 = 12. The answer is 12."',
              ],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'Chain-of-thought is especially powerful for math problems, logic puzzles, complex questions, and anything where you want to verify the AI\'s reasoning. If the steps don\'t make sense, the answer is probably wrong!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Technique 3: Few-Shot Examples',
          },
          {
            type: 'key-term',
            term: '📝 Few-Shot Examples',
            definition: 'Giving the AI 1-3 examples of what you want BEFORE making your request. Instead of describing the format, you SHOW it.',
          },
          {
            type: 'text',
            content: 'Imagine telling a friend how to decorate a cake by describing it vs. showing them a picture. Which is easier? Few-shot works the same way — you give the AI a sample of exactly what you want, and it copies that pattern.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'The names come from how many examples you give: <strong>zero-shot</strong> = no examples, <strong>one-shot</strong> = 1 example, <strong>few-shot</strong> = 2-3 examples. More examples usually mean more consistent results!',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'You can <strong>combine</strong> all three techniques in one prompt! Assign a role AND ask for step-by-step reasoning AND give examples. The more techniques you stack, the more control you have.',
          },
        ],
      },
    },
    {
      id: 'L4S3',
      type: 'guided-example',
      title: 'Watch Me: Power Techniques in Action',
      data: {
        intro: "Let's see each power technique transform an ordinary prompt into something amazing. Click 'Next Step' to see each technique in action!",
        steps: [
          {
            label: 'Start with a basic prompt',
            prompt: 'Explain photosynthesis.',
            response: 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a byproduct.',
            annotation: 'This reads like a textbook. Accurate, but kind of boring and hard to follow. Let\'s try a power technique!',
            isImproved: false,
          },
          {
            label: 'Add Role-Playing',
            prompt: 'You are an excited science YouTuber who explains things to middle schoolers. Explain photosynthesis in a fun, energetic way.',
            response: 'OKAY EVERYONE, buckle up because we\'re about to blow your minds with the COOLEST thing plants do! 🌱\n\nSo picture this: plants are basically tiny FOOD FACTORIES. They take three simple ingredients — sunlight, water, and carbon dioxide (that\'s the stuff you breathe out) — and they turn it into SUGAR. That\'s their food! And as a bonus? They release OXYGEN, which is, you know, the stuff that keeps us alive. Pretty important!\n\nIt\'s like the ultimate recycling program. You breathe out CO2, plants eat it up, and give you back O2. You\'re welcome, lungs!',
            annotation: 'Totally different vibe! The role-playing made the AI use an energetic, fun tone that\'s way more engaging. Now let\'s try chain-of-thought.',
            isImproved: true,
          },
          {
            label: 'Use Chain-of-Thought',
            prompt: 'A plant is in a dark closet for a week. What will happen to it? Think step by step.',
            response: 'Let me think through this step by step:\n\nStep 1: Plants need sunlight to perform photosynthesis.\nStep 2: In a dark closet, there is no sunlight available.\nStep 3: Without sunlight, the plant cannot make food (glucose) through photosynthesis.\nStep 4: The plant will first use up its stored energy reserves.\nStep 5: Without being able to make new food, the leaves will start to turn yellow (lose chlorophyll).\nStep 6: After a week, the plant will be weakened, pale, and drooping, but most plants can survive one week in the dark.\n\nConclusion: The plant will be alive but stressed and unhealthy. It would recover if moved back to light.',
            annotation: 'See how "think step by step" made the AI break down its reasoning? You can follow the logic and check each step. Way more useful than just "the plant would be unhealthy."',
            isImproved: true,
          },
          {
            label: 'Use Few-Shot Examples',
            prompt: 'Create vocabulary cards in this format:\n\nWord: Chlorophyll\nKid-Friendly Definition: The green stuff in leaves that captures sunlight\nMemory Trick: "Chloro" sounds like "color" — it gives leaves their COLOR!\n\nNow create cards in the same format for: glucose, carbon dioxide, oxygen',
            response: 'Word: Glucose\nKid-Friendly Definition: A type of sugar that plants make as food during photosynthesis\nMemory Trick: "Glue-cose" — it\'s the energy that holds the plant\'s life together, like glue!\n\nWord: Carbon Dioxide\nKid-Friendly Definition: An invisible gas you breathe out that plants breathe in\nMemory Trick: "Carbon Die-oxide" — plants would DIE without it!\n\nWord: Oxygen\nKid-Friendly Definition: The gas plants release that you need to breathe and stay alive\nMemory Trick: "Oxy-GEN" — it GENERATEs the air we breathe!',
            annotation: '<strong>The AI matched the exact format!</strong> By showing one example, the AI copied the pattern perfectly for all three words — same structure, same style, same vibe. That\'s the power of few-shot prompting!',
            isImproved: true,
          },
        ],
      },
    },
    {
      id: 'L4S4',
      type: 'activity',
      title: 'Practice: Power Technique Challenges',
      data: {
        activities: [
          { type: 'prompt-challenge', challengeRef: 'L4C1' },
          { type: 'prompt-challenge', challengeRef: 'L4C2' },
          { type: 'prompt-challenge', challengeRef: 'L4C3' },
          { type: 'prompt-challenge', challengeRef: 'L4C4' },
          {
            type: 'fill-in-blank',
            instruction: 'Complete this prompt template using a power technique:',
            template: 'You are a ___. Explain ___ to a middle schooler. Think step by step and use ___ to make it fun.',
            hints: [
              'The first blank is a role (e.g., "friendly science tutor", "nature documentary narrator")',
              'The second blank is a topic you want explained',
              'The third blank is a creative format (e.g., "a sports analogy", "a story about superheroes")',
            ],
            sampleAnswer: 'You are a friendly science tutor. Explain how volcanoes erupt to a middle schooler. Think step by step and use a cooking analogy to make it fun.',
          },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L4S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Which technique involves telling the AI to "act as" a specific character or expert?',
            options: [
              'Chain-of-thought prompting',
              'Few-shot examples',
              'Role-playing',
              'CRAFT framework',
            ],
            correct: 2,
            feedback: 'Role-playing is when you assign the AI a persona like "You are a patient math tutor." This changes the AI\'s tone, vocabulary, and style to match that character.',
          },
          {
            type: 'multiple-choice',
            question: 'What is the key benefit of chain-of-thought prompting?',
            options: [
              'It makes the AI respond faster',
              'It lets you see the AI\'s reasoning step by step so you can check for mistakes',
              'It makes the AI use fewer words',
              'It lets you assign the AI a personality',
            ],
            correct: 1,
            feedback: 'Chain-of-thought prompting tells the AI to "think step by step." This shows you HOW it got to its answer, making it easy to spot errors in the reasoning.',
          },
          {
            type: 'multiple-choice',
            question: 'In few-shot prompting, what does "few-shot" refer to?',
            options: [
              'Giving the AI a few seconds to think',
              'Writing a very short prompt',
              'Providing a few examples of the output format you want',
              'Asking the AI to try a few different answers',
            ],
            correct: 2,
            feedback: 'Few-shot means giving the AI 1-3 examples of what you want. Instead of describing the format, you SHOW the AI a sample, and it follows the same pattern.',
          },
        ],
      },
    },
    {
      id: 'L4S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You just unlocked three serious power-ups! Role-playing, chain-of-thought, and few-shot examples are tools that even professional prompt engineers use every day. You're becoming a real pro!",
        keyTakeaways: [
          '<strong>Role-playing</strong> lets you control the AI\'s personality and tone by saying "You are a..." — perfect for getting explanations at exactly the right level.',
          '<strong>Chain-of-thought</strong> makes the AI show its work by adding "Think step by step" — amazing for math, logic, and catching mistakes.',
          '<strong>Few-shot examples</strong> let you SHOW the AI what you want instead of telling it — the easiest way to get a consistent format.',
          '<strong>You can stack techniques!</strong> Combine role-playing + chain-of-thought + few-shot in one prompt for maximum control.',
        ],
        nextPreview: 'In Lesson 5, you\'ll learn about the <strong>limits of AI</strong> — when it makes things up, when it\'s biased, and how to protect yourself with defensive prompting. Being a smart AI user means knowing what can go wrong!',
      },
    },
  ],
};
