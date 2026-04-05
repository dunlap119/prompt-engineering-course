/**
 * Lesson 2: The CRAFT Framework
 */

export default {
  id: 'L2',
  title: 'The CRAFT Framework',
  sections: [
    {
      id: 'L2S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Welcome back! In Lesson 1, you learned that details matter. Now I'm going to teach you a <strong>5-letter secret code</strong> that makes writing great prompts easy every single time. It's called <strong>CRAFT</strong> — and once you learn it, you'll never write a boring prompt again!",
        objectives: [
          'Learn the CRAFT framework: Context, Role, Ask, Format, and Tone',
          'Understand how each CRAFT element improves a prompt',
          'Build a complete CRAFT prompt step by step',
          'Practice using CRAFT to write prompts for different situations',
        ],
        essentialQuestions: [
          'How does giving the AI a role change the kind of answer you get?',
          'What are the five parts of a great prompt, and why does each one matter?',
        ],
      },
    },
    {
      id: 'L2S2',
      type: 'content',
      title: 'Meet the CRAFT Framework',
      data: {
        subtitle: 'Your 5-step cheat code for awesome prompts',
        blocks: [
          {
            type: 'text',
            content: 'In Lesson 1, you learned about detail boosters like topic, audience, scope, and format. The <strong>CRAFT framework</strong> takes that idea and levels it up into a complete system. Think of CRAFT as a checklist you can use every time you write a prompt — it helps you remember what to include so the AI gives you exactly what you want.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Professional prompt engineers — yes, that\'s a real job! — use frameworks just like CRAFT every day. Companies pay them to write instructions for AI systems. You\'re learning a legit career skill right now.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The 5 Letters of CRAFT',
          },
          {
            type: 'key-term',
            term: 'C -- Context',
            definition: 'Give the AI background information. What\'s the situation? What do you already know? What is this for? Example: <em>"I\'m working on a science project about renewable energy for my 7th grade class..."</em>',
          },
          {
            type: 'key-term',
            term: 'R -- Role',
            definition: 'Tell the AI WHO to be. Should it act like a teacher? A scientist? A funny storyteller? Example: <em>"Act as a patient science tutor who explains things in simple terms..."</em>',
          },
          {
            type: 'key-term',
            term: 'A -- Ask',
            definition: 'State clearly and specifically WHAT you want the AI to do. This is the core of your prompt. Example: <em>"Explain how solar panels convert sunlight into electricity..."</em>',
          },
          {
            type: 'key-term',
            term: 'F -- Format',
            definition: 'Tell the AI HOW to structure its response. A numbered list? A table? Bullet points? How long should it be? Example: <em>"...in a numbered list of 5 steps, each step being 1-2 sentences..."</em>',
          },
          {
            type: 'key-term',
            term: 'T -- Tone',
            definition: 'What should the response SOUND like? Fun and casual? Formal and academic? Encouraging? Funny? Example: <em>"...using a friendly, encouraging tone that makes science feel exciting."</em>',
          },
          {
            type: 'heading',
            level: 3,
            content: 'See CRAFT in Action',
          },
          {
            type: 'comparison-table',
            headers: ['Without CRAFT', 'With CRAFT'],
            rows: [
              [
                '"Tell me about dogs."',
                '"I\'m doing a school report on dog breeds (Context). Act as an animal expert (Role). Write a summary of the top 5 most popular dog breeds in the US, including their size and temperament (Ask). Use a table format (Format). Keep it fun and easy to read for a 7th grader (Tone)."',
              ],
              [
                '"Write a poem."',
                '"I need a poem for my English class creative writing assignment (Context). Act as a funny poet (Role). Write a 12-line rhyming poem about a cat who thinks it\'s a dog (Ask). Use 3 stanzas of 4 lines each (Format). Make it silly and lighthearted (Tone)."',
              ],
              [
                '"Help me with math."',
                '"I\'m in 7th grade and confused about two-step equations (Context). Act as a patient math tutor (Role). Explain how to solve two-step equations (Ask). Show 3 worked examples step by step (Format). Use a calm, encouraging tone like you\'re talking to a friend (Tone)."',
              ],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'You don\'t need ALL five CRAFT elements every single time. Even using 2 or 3 of them will dramatically improve your prompt. But the more you include, the closer the AI\'s response will be to exactly what you imagined.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'A Full CRAFT Prompt Example',
          },
          {
            type: 'text',
            content: 'Here\'s what a complete CRAFT prompt looks like when you put all 5 pieces together:',
          },
          {
            type: 'callout',
            style: 'example',
            content: '<strong>C:</strong> "I\'m working on a science project about renewable energy for my 7th grade class." <strong>R:</strong> "Act as a patient science tutor who explains things in simple terms." <strong>A:</strong> "Explain how solar panels convert sunlight into electricity." <strong>F:</strong> "In a numbered list of 5 steps, each step being 1-2 sentences." <strong>T:</strong> "Use a friendly, encouraging tone that makes science feel exciting."',
          },
          {
            type: 'text',
            content: 'When you combine all of that into one prompt, the AI knows exactly who it\'s talking to, what role to play, what to produce, how to format it, and what vibe to go for. That\'s the power of CRAFT!',
          },
        ],
      },
    },
    {
      id: 'L2S3',
      type: 'guided-example',
      title: 'Watch Me: Building a CRAFT Prompt',
      data: {
        intro: "Let's build a CRAFT prompt from scratch! We'll start with a vague prompt and add one CRAFT element at a time. Watch how the AI's response improves with each step.",
        steps: [
          {
            label: 'Start with a vague prompt',
            prompt: 'Write something about space.',
            response: 'Space is the vast expanse that exists beyond Earth\'s atmosphere. It contains billions of galaxies, each with billions of stars. Space is a vacuum, meaning it has very little matter. Humans have been exploring space since the mid-20th century, beginning with the launch of Sputnik in 1957...',
            annotation: 'Classic vague prompt, classic vague answer. It reads like a textbook and doesn\'t know what we actually want. Let\'s start adding CRAFT elements!',
            isImproved: false,
          },
          {
            label: 'Add Context (C)',
            prompt: 'I\'m a 7th grader doing a presentation about why Mars is a good candidate for human colonization. Write something about space.',
            response: 'Mars is often considered the best candidate for human colonization among the planets in our solar system. It has a 24.6-hour day cycle similar to Earth, polar ice caps that contain water, and a rocky surface that could potentially support structures. However, challenges include its thin atmosphere, extreme cold temperatures, and distance from Earth...',
            annotation: 'Better! The AI now knows this is for a 7th grader and about Mars colonization specifically. But it\'s still just a wall of text with no personality.',
            isImproved: false,
          },
          {
            label: 'Add Role (R)',
            prompt: 'I\'m a 7th grader doing a presentation about why Mars is a good candidate for human colonization. Act as an enthusiastic NASA scientist. Write something about space.',
            response: 'Oh, Mars — my favorite planet to talk about! As someone who\'s spent years studying the Red Planet, I can tell you it\'s the most exciting place in our solar system for future human missions. Mars has real water ice, a day that\'s almost the same length as Earth\'s, and we\'ve already landed rovers there successfully. The big challenges? We\'d need to figure out how to deal with the thin atmosphere and radiation. But that\'s what makes it an adventure!',
            annotation: 'Now it has personality! The NASA scientist role made the response enthusiastic and personal. But we still need to be more specific about what we want.',
            isImproved: false,
          },
          {
            label: 'Add Ask (A)',
            prompt: 'I\'m a 7th grader doing a presentation about why Mars is a good candidate for human colonization. Act as an enthusiastic NASA scientist. Give me 4 reasons Mars is the best planet for humans to colonize.',
            response: 'Great question, future space explorer! Here are 4 big reasons Mars is our best bet:\n\n1. Mars has a day that\'s 24 hours and 37 minutes — almost identical to Earth! Your body clock would barely notice the difference.\n\n2. There\'s real water ice at the poles and possibly underground. Water is essential for drinking, growing food, and even making rocket fuel.\n\n3. Mars has actual seasons, just like Earth, because it\'s tilted on its axis at a similar angle. This means we could potentially grow crops.\n\n4. We\'ve already successfully landed 5 rovers on Mars, so we know the surface can support our technology. It\'s the planet we understand best after Earth.',
            annotation: 'Now the AI knows exactly what to produce — 4 specific reasons. The content is focused and useful. Let\'s tighten up the format.',
            isImproved: true,
          },
          {
            label: 'Add Format (F)',
            prompt: 'I\'m a 7th grader doing a presentation about why Mars is a good candidate for human colonization. Act as an enthusiastic NASA scientist. Give me 4 reasons Mars is the best planet for humans to colonize. Present each reason with a bold title, 2-3 sentences of explanation, and a fun emoji.',
            response: '**1. Almost the Same Day Length** \u{1F551}\nMars has a day that\'s 24 hours and 37 minutes — practically the same as Earth! Your sleep schedule, school schedule, and daily routine would feel totally normal on Mars.\n\n**2. Water, Water Everywhere (Well, Ice)** \u{1F9CA}\nScientists have confirmed there\'s water ice at the Martian poles and likely underground too. Water is the #1 thing we need for survival — and we can even split it into hydrogen and oxygen to make breathable air and rocket fuel!\n\n**3. Seasons Like Home** \u{1F343}\nMars is tilted at almost the same angle as Earth (25.2 degrees vs. 23.5 degrees), which means it has spring, summer, fall, and winter. This is huge for farming — we could plan growing seasons just like we do here.\n\n**4. We\'ve Already Been There (Sort Of)** \u{1F916}\nNASA and other space agencies have successfully landed 5 rovers on Mars. We\'ve mapped the terrain, tested the soil, and studied the weather. Mars is the planet we know the most about besides Earth.',
            annotation: 'Excellent! Each reason now has a bold title, clear explanation, and emoji. One more step — let\'s set the tone.',
            isImproved: true,
          },
          {
            label: 'Add Tone (T)',
            prompt: 'I\'m a 7th grader doing a presentation about why Mars is a good candidate for human colonization. Act as an enthusiastic NASA scientist. Give me 4 reasons Mars is the best planet for humans to colonize. Present each reason with a bold title, 2-3 sentences of explanation, and a fun emoji. Use a tone that\'s exciting and inspiring, like you\'re trying to get kids pumped about space exploration.',
            response: 'Alright future astronauts, buckle up — here\'s why Mars is THE planet we\'re heading to next! \u{1F680}\n\n**1. A Day That Feels Like Home** \u{1F551}\nHere\'s something wild — a day on Mars is only 37 minutes longer than a day on Earth! That means your sleep schedule, lunch break, and even recess would feel totally normal. How cool is that?!\n\n**2. It\'s Got Water (Frozen, But Still!)** \u{1F9CA}\nScientists found actual water ice on Mars — at the poles and hiding underground! Water means we can drink, grow food, and even make rocket fuel to fly back home. Mars is basically inviting us over!\n\n**3. Seasons? Mars Has \'Em!** \u{1F343}\nJust like Earth, Mars has spring, summer, fall, and winter because it\'s tilted at almost the same angle. That means we could grow crops and plan harvests. Imagine eating the first salad ever grown on another planet!\n\n**4. We Already Know the Neighborhood** \u{1F916}\nWe\'ve sent 5 rovers to Mars and they\'ve driven around, taken selfies, and tested the soil. We know more about Mars than any other planet. It\'s like we\'ve already done the apartment tour — now we just need to move in!',
            annotation: '<strong>That\'s a complete CRAFT prompt!</strong> Context (7th grader, presentation), Role (NASA scientist), Ask (4 reasons for colonization), Format (bold titles, 2-3 sentences, emojis), and Tone (exciting, inspiring). Each element we added made the response better and more useful.',
            isImproved: true,
          },
        ],
      },
    },
    {
      id: 'L2S4',
      type: 'activity',
      title: 'Practice: CRAFT Challenges',
      data: {
        activities: [
          { type: 'prompt-challenge', challengeRef: 'L2C1' },
          { type: 'prompt-challenge', challengeRef: 'L2C2' },
          { type: 'prompt-challenge', challengeRef: 'L2C3' },
          { type: 'prompt-challenge', challengeRef: 'L2C4' },
          {
            type: 'drag-drop-match',
            instruction: 'Match each letter of CRAFT to its correct description!',
            pairs: [
              { term: 'C -- Context', definition: 'Give background info about the situation, audience, or purpose' },
              { term: 'R -- Role', definition: 'Tell the AI who to act as (teacher, scientist, coach, etc.)' },
              { term: 'A -- Ask', definition: 'State clearly and specifically what you want the AI to do' },
              { term: 'F -- Format', definition: 'Describe how to structure the response (list, table, paragraphs, etc.)' },
              { term: 'T -- Tone', definition: 'Set the vibe — fun, formal, encouraging, silly, etc.' },
            ],
          },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L2S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'Read this prompt: "I need help writing a 5-paragraph essay about climate change for my 8th grade science class. Use a table to organize the main points." Which CRAFT element is MISSING?',
            options: [
              'Context (background info)',
              'Ask (what to do)',
              'Role (who the AI should act as)',
              'Format (how to structure it)',
            ],
            correct: 2,
            feedback: 'The prompt has Context (8th grade science class), Ask (help writing an essay about climate change), and Format (5-paragraph essay, table). But it never tells the AI WHO to be — a Role like "Act as a writing coach" would make the response more helpful.',
          },
          {
            type: 'multiple-choice',
            question: 'Which of these is the BEST example of a CRAFT prompt?',
            options: [
              '"Write about the American Revolution."',
              '"Act as a history teacher. Tell me about the American Revolution in 3 paragraphs."',
              '"I\'m studying for my 7th grade history test on the American Revolution. Act as a patient tutor. Explain the 3 main causes of the war in a numbered list with 2-3 sentences each. Use a friendly, encouraging tone."',
              '"Explain the American Revolution for a 7th grader using bullet points."',
            ],
            correct: 2,
            feedback: 'The third option uses all 5 CRAFT elements: Context (7th grade history test), Role (patient tutor), Ask (3 main causes of the war), Format (numbered list, 2-3 sentences each), and Tone (friendly, encouraging). The other options are missing multiple elements.',
          },
          {
            type: 'true-false',
            question: 'You need to include all 5 CRAFT elements in every single prompt for it to work well.',
            correct: false,
            feedback: 'You do NOT need all 5 every time! Even using 2 or 3 CRAFT elements will make a big improvement. Use as many as make sense for your situation — the more you include, the better, but even a little CRAFT goes a long way.',
          },
        ],
      },
    },
    {
      id: 'L2S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You just unlocked one of the most powerful tools in prompt engineering — the CRAFT framework! You're officially writing prompts like a pro now.",
        keyTakeaways: [
          '<strong>CRAFT stands for Context, Role, Ask, Format, and Tone</strong> — five elements that help you write clear, specific prompts.',
          '<strong>Context</strong> gives background, <strong>Role</strong> tells the AI who to be, <strong>Ask</strong> says what you want, <strong>Format</strong> sets the structure, and <strong>Tone</strong> controls the vibe.',
          '<strong>You don\'t need all 5 every time,</strong> but the more you use, the better your results. Even 2-3 elements make a huge difference.',
          '<strong>Think of CRAFT like a recipe:</strong> you can skip an ingredient or two, but the more you include, the tastier the result.',
        ],
        nextPreview: 'In Lesson 3, you\'ll become a <strong>Prompt Detective</strong> — learning how to spot bad prompts, figure out what\'s wrong with them, and fix them through <strong>iteration</strong>!',
      },
    },
  ],
};
