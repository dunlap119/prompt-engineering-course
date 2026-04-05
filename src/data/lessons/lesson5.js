/**
 * Lesson 5: Know the Limits (AI Limitations & Defensive Prompting)
 */

export default {
  id: 'L5',
  title: 'Know the Limits',
  sections: [
    {
      id: 'L5S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "This might be the most important lesson in the whole course. AI is powerful, but it's not perfect — and a smart AI user knows exactly where the traps are. Time to become a truly smart AI user!",
        objectives: [
          'Understand what AI hallucinations are and why they happen',
          'Recognize bias in AI-generated responses',
          'Explain why AI sounds confident even when it\'s wrong',
          'Use defensive prompting techniques to get more reliable results',
          'Develop a fact-checking mindset for all AI outputs',
        ],
        essentialQuestions: [
          'Why does AI sometimes make things up with total confidence?',
          'How do biases from the real world end up in AI responses?',
          'What can you do to protect yourself from bad AI information?',
        ],
      },
    },
    {
      id: 'L5S2',
      type: 'content',
      title: 'When AI Gets It Wrong',
      data: {
        subtitle: 'The hidden dangers every AI user needs to know',
        blocks: [
          {
            type: 'text',
            content: 'AI chatbots are impressive, but they have some serious weaknesses that can trip you up if you\'re not careful. The good news? Once you know what to watch for, you can protect yourself. Let\'s learn about the three biggest problems — and then how to fight back.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Problem 1: Hallucinations',
          },
          {
            type: 'key-term',
            term: '👻 Hallucination',
            definition: 'When AI generates information that sounds completely real and believable but is actually made up. The AI doesn\'t know it\'s wrong — it\'s just predicting words that "sound right."',
          },
          {
            type: 'text',
            content: 'AI hallucinations include:<ul><li><strong>Fake facts:</strong> Inventing statistics, dates, or events that never happened</li><li><strong>Fake sources:</strong> Creating book titles, websites, or research studies that don\'t exist</li><li><strong>Fake people:</strong> Inventing experts or historical figures</li><li><strong>Fake quotes:</strong> Putting words in real people\'s mouths that they never said</li></ul>',
          },
          {
            type: 'callout',
            style: 'warning',
            content: '<strong>Why does this happen?</strong> Remember, AI predicts the next most likely word. It\'s not looking up facts in a database — it\'s generating text that <em>sounds right</em> based on patterns. If the pattern says "include a source here," the AI will make one up that looks legit!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Problem 2: Bias',
          },
          {
            type: 'key-term',
            term: '⚖️ AI Bias',
            definition: 'When AI responses reflect unfair assumptions or stereotypes from its training data. AI learned from text written by humans — and humans have biases.',
          },
          {
            type: 'text',
            content: 'Types of bias to watch for:<ul><li><strong>Gender bias:</strong> Assuming doctors are male and nurses are female</li><li><strong>Cultural bias:</strong> Focusing mostly on Western/American perspectives</li><li><strong>Stereotype bias:</strong> Associating certain groups with specific traits</li><li><strong>Confirmation bias:</strong> Telling you what it thinks you want to hear</li></ul>',
          },
          {
            type: 'callout',
            style: 'warning',
            content: 'If you ask AI to "write a story about a scientist," it might default to a male character. If you ask about "traditional food," it might assume American cuisine. These biases are baked into the training data, and they can reinforce stereotypes.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'Problem 3: The Confidence Problem',
          },
          {
            type: 'key-term',
            term: '🎭 The Confidence Problem',
            definition: 'AI always sounds sure of itself, even when it\'s completely wrong. It doesn\'t say "I\'m not sure" or "I might be wrong" — it presents everything with equal certainty.',
          },
          {
            type: 'text',
            content: 'This is what makes hallucinations and bias so dangerous. A human expert will say "I don\'t know" or "that\'s not my area." AI almost <strong>never</strong> does this on its own. It will confidently give you an answer even when it absolutely shouldn\'t.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'Try asking a chatbot a question about a completely made-up topic, like "What are the main exports of Fictionlandia?" Many AI models will confidently describe the economy of a country that doesn\'t exist!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The Solution: Defensive Prompting',
          },
          {
            type: 'key-term',
            term: '🛡️ Defensive Prompting',
            definition: 'Special techniques you add to your prompts that help catch AI mistakes BEFORE they trick you. Think of it like wearing armor when you go into battle.',
          },
          {
            type: 'text',
            content: 'Here are four defensive prompting strategies:',
          },
          {
            type: 'text',
            content: '<strong>1. Ask for sources:</strong> Add "Cite your sources" or "Where did you get this information?" to your prompt. This forces the AI to back up its claims — and if it makes up fake sources, that\'s a red flag!',
          },
          {
            type: 'text',
            content: '<strong>2. Give permission to say "I don\'t know":</strong> Add "If you\'re not sure about something, say so instead of guessing." This reduces hallucinations because you\'ve told the AI it\'s okay to be honest.',
          },
          {
            type: 'text',
            content: '<strong>3. Ask it to separate facts from opinions:</strong> Add "Clearly label which parts are established facts and which are your interpretation." This helps you see what to trust and what to verify.',
          },
          {
            type: 'text',
            content: '<strong>4. Cross-check with chain-of-thought:</strong> Add "Explain your reasoning step by step." If the reasoning doesn\'t hold up, the answer probably doesn\'t either.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'The golden rule of AI: <strong>Trust, but verify.</strong> Treat every AI response as a helpful starting point, not a final answer. Always check important facts against reliable sources like textbooks, encyclopedias, or established news organizations.',
          },
        ],
      },
    },
    {
      id: 'L5S3',
      type: 'guided-example',
      title: 'Watch Me: Catching AI Mistakes',
      data: {
        intro: "Watch how a regular prompt can lead to wrong information, and then see how defensive prompting catches the error. Click 'Next Step' to follow along!",
        steps: [
          {
            label: 'Ask a tricky question without defenses',
            prompt: 'Tell me about the famous scientist Dr. Eleanor Whitfield and her discovery of thermal resonance in 1987.',
            response: 'Dr. Eleanor Whitfield was a pioneering physicist who made groundbreaking contributions to the field of thermodynamics. In 1987, she published her landmark paper on thermal resonance at the University of Cambridge, which demonstrated how heat energy could be transferred through resonant frequency matching. Her work earned her the Henderson Prize in Physics in 1989 and influenced decades of research in energy transfer.',
            annotation: 'Sounds super legit, right? Here\'s the problem: <strong>Dr. Eleanor Whitfield doesn\'t exist.</strong> Neither does "thermal resonance" as described here, the Henderson Prize, or that paper. The AI made ALL of this up with total confidence! This is a hallucination.',
            isImproved: false,
          },
          {
            label: 'Same question, but add defensive prompting',
            prompt: 'Tell me about the famous scientist Dr. Eleanor Whitfield and her discovery of thermal resonance in 1987. Cite your sources. If any part of this is uncertain or you cannot verify it, clearly say so.',
            response: 'I don\'t have reliable information about a scientist named Dr. Eleanor Whitfield or a specific discovery called "thermal resonance" from 1987. I cannot find verifiable sources for this person or discovery. It\'s possible this refers to a lesser-known researcher, but I want to be honest — I cannot confirm this information exists. I\'d recommend checking academic databases like Google Scholar or your school library to verify these claims.',
            annotation: '<strong>Huge difference!</strong> By asking the AI to cite sources and admit uncertainty, we got an honest answer instead of a made-up biography. The defensive prompts turned off the AI\'s "confident guessing" mode.',
            isImproved: true,
          },
          {
            label: 'A real-world defensive prompt',
            prompt: 'What are three causes of the American Civil War? For each cause, cite a specific source I can check. Separate established historical facts from interpretations that historians debate. If you\'re unsure about any detail, say so.',
            response: 'Here are three major causes of the American Civil War:\n\n1. **Slavery** (Established fact): The central cause. Southern states\' economies depended on enslaved labor, and Northern states increasingly opposed slavery\'s expansion. Source: "Battle Cry of Freedom" by James McPherson (1988).\n\n2. **States\' Rights disputes** (Fact, but context matters): Southern states argued for states\' rights, but historians widely agree this was specifically about the right to maintain slavery. The "states\' rights" framing without mentioning slavery is considered misleading by most modern historians. Source: "What This Cruel War Was Over" by Chandra Manning (2007).\n\n3. **Economic differences** (Established fact with debated significance): The industrial North and agricultural South had different economic interests, including tariff disagreements. However, historians debate how much this mattered compared to slavery. Source: "The Impending Crisis" by David Potter (1976).\n\nNote: I\'m confident in the general facts here, but I recommend verifying the specific book details and publication dates.',
            annotation: '<strong>This is defensive prompting at its best!</strong> The AI separated facts from debate, cited checkable sources, and even added a note about what to verify. You now know exactly what to trust and what to look up.',
            isImproved: true,
          },
        ],
      },
    },
    {
      id: 'L5S4',
      type: 'activity',
      title: 'Practice: AI Lie Detector',
      data: {
        activities: [
          { type: 'prompt-challenge', challengeRef: 'L5C1' },
          { type: 'prompt-challenge', challengeRef: 'L5C2' },
          { type: 'prompt-challenge', challengeRef: 'L5C3' },
          { type: 'prompt-challenge', challengeRef: 'L5C4' },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L5S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What is an AI "hallucination"?',
            options: [
              'When the AI crashes or stops working',
              'When the AI confidently generates false information that sounds real',
              'When the AI refuses to answer your question',
              'When the AI gives you too much information',
            ],
            correct: 1,
            feedback: 'An AI hallucination is when the AI makes up information — fake facts, fake sources, fake quotes — and presents it with total confidence, as if it were true.',
          },
          {
            type: 'true-false',
            question: 'If an AI response sounds confident and detailed, you can trust that the information is accurate.',
            correct: false,
            feedback: 'This is the Confidence Problem! AI ALWAYS sounds confident, even when it\'s completely wrong. Confidence is not a sign of accuracy. Always verify important information.',
          },
          {
            type: 'multiple-choice',
            question: 'Which of these is a defensive prompting technique?',
            options: [
              'Using all caps so the AI takes you seriously',
              'Asking the AI to cite its sources and say "I don\'t know" if unsure',
              'Repeating the same prompt three times',
              'Adding "please" to make the AI try harder',
            ],
            correct: 1,
            feedback: 'Defensive prompting includes asking for sources, giving the AI permission to say "I don\'t know," asking it to separate facts from opinions, and using chain-of-thought to check reasoning.',
          },
        ],
      },
    },
    {
      id: 'L5S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "Now THAT is some powerful knowledge! You're no longer just someone who uses AI — you're someone who uses AI wisely. Knowing the limits makes you a stronger, smarter user than most adults!",
        keyTakeaways: [
          '<strong>AI hallucinates.</strong> It can make up facts, sources, people, and quotes with total confidence. Always verify.',
          '<strong>AI has biases.</strong> It reflects biases from its training data, including gender, cultural, and stereotype biases.',
          '<strong>AI always sounds confident</strong> — even when it\'s wrong. Confidence is NOT a sign of accuracy.',
          '<strong>Defensive prompting is your shield.</strong> Ask for sources, give permission to say "I don\'t know," separate facts from opinions, and check the reasoning.',
          '<strong>The golden rule: Trust, but verify.</strong> Treat AI like a helpful but sometimes unreliable assistant.',
        ],
        nextPreview: 'In Lesson 6, you\'ll put <strong>everything together</strong> in the Prompt Master Challenge! You\'ll face boss-level challenges that combine specificity, CRAFT, iteration, power techniques, AND defensive prompting. Can you earn the title of Prompt Master?',
      },
    },
  ],
};
