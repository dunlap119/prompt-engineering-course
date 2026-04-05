/**
 * Lesson 3: Fix the Bad Prompt (Iteration)
 */

export default {
  id: 'L3',
  title: 'Fix the Bad Prompt',
  sections: [
    {
      id: 'L3S1',
      type: 'intro',
      title: 'Introduction',
      data: {
        mascotMessage: "Time to put on your detective hat! In this lesson, you're becoming a <strong>Prompt Detective</strong>. You'll learn to spot weak prompts, figure out what's wrong, and fix them. The secret skill? <strong>Iteration</strong> — trying, evaluating, and improving until you get it right!",
        objectives: [
          'Understand what iteration means and why it matters in prompt engineering',
          'Identify common mistakes that make prompts weak or ineffective',
          'Practice diagnosing and fixing bad prompts step by step',
          'Learn that great prompts are built through revision, not written perfectly the first time',
        ],
        essentialQuestions: [
          'Why do even experienced prompt engineers revise their prompts multiple times?',
          'What are the most common mistakes people make when writing prompts?',
        ],
      },
    },
    {
      id: 'L3S2',
      type: 'content',
      title: 'The Power of Iteration',
      data: {
        subtitle: 'Great prompts are rewritten, not just written',
        blocks: [
          {
            type: 'text',
            content: 'Here\'s a secret that even professional prompt engineers know: <strong>almost nobody writes the perfect prompt on their first try.</strong> The real skill isn\'t writing one amazing prompt — it\'s knowing how to look at a result, figure out what\'s off, and make it better. This process is called <strong>iteration</strong>.',
          },
          {
            type: 'callout',
            style: 'fun-fact',
            content: 'The word "iterate" comes from the Latin word <em>iterare</em>, meaning "to repeat." Scientists, programmers, game designers, and writers ALL use iteration. Every app on your phone went through hundreds of iterations before it was released!',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The Iteration Cycle',
          },
          {
            type: 'text',
            content: 'Iteration follows a simple 4-step loop. You can go around it as many times as you need:',
          },
          {
            type: 'key-term',
            term: '1. Try',
            definition: 'Write your best prompt and submit it to the AI. Don\'t overthink it — just get something down and see what happens.',
          },
          {
            type: 'key-term',
            term: '2. Evaluate',
            definition: 'Read the AI\'s response carefully. Ask yourself: What\'s good about this? What\'s not what I wanted? Is anything missing, wrong, or off-topic?',
          },
          {
            type: 'key-term',
            term: '3. Improve',
            definition: 'Revise your prompt based on what went wrong. Add more details, change the format, adjust the tone, or be more specific about what you need.',
          },
          {
            type: 'key-term',
            term: '4. Repeat',
            definition: 'Submit the improved prompt and compare the new result to the old one. Better? Great! Still not right? Go around the loop again.',
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'You can also iterate <em>within</em> a conversation! After the AI responds, you can say things like: "That was good, but can you make it shorter?" or "The tone is too formal — make it more casual." or "Can you add examples?" This is called <strong>follow-up prompting</strong> and it\'s one of the fastest ways to improve results.',
          },
          {
            type: 'heading',
            level: 3,
            content: 'The 4 Most Common Prompt Mistakes',
          },
          {
            type: 'text',
            content: 'When you\'re playing Prompt Detective, here are the usual suspects — the mistakes you\'ll see over and over again:',
          },
          {
            type: 'comparison-table',
            headers: ['Mistake', 'What It Looks Like', 'How to Fix It'],
            rows: [
              [
                'Too Vague',
                '"Tell me about history." -- The AI doesn\'t know which topic, time period, or country you care about.',
                'Pick a specific topic. "Explain 3 causes of the American Revolution" is way better than "tell me about history."',
              ],
              [
                'Too Broad',
                '"Explain everything about the solar system." -- "Everything" is impossible. You\'ll get a shallow overview of nothing useful.',
                'Narrow your scope. Focus on one specific aspect, like "the 4 inner planets" or "why Pluto was reclassified."',
              ],
              [
                'Missing Audience',
                '"Explain quantum physics." -- The AI doesn\'t know if you\'re a 6th grader or a college student. You might get an answer way too advanced (or too simple).',
                'Tell the AI who you are. "Explain it for a 7th grader" changes the vocabulary, depth, and examples the AI uses.',
              ],
              [
                'No Format Specified',
                '"Help me study for my test." -- You get a wall of text when you really wanted flashcards, a quiz, or a study guide.',
                'Request a specific format. "Give me 10 flashcard-style questions with answers" gives you something actually useful.',
              ],
            ],
          },
          {
            type: 'callout',
            style: 'tip',
            content: 'A great rule of thumb: <strong>if a human friend would need to ask you a follow-up question before they could help, your prompt isn\'t specific enough.</strong> If you said "Help me with my homework" to a friend, they\'d say "What subject? Which assignment?" The AI has the same problem — it just guesses instead of asking.',
          },
        ],
      },
    },
    {
      id: 'L3S3',
      type: 'guided-example',
      title: 'Watch Me: Fixing "Tell Me About History"',
      data: {
        intro: "Let's take one of the worst prompts ever — \"Tell me about history\" — and fix it step by step using the iteration cycle. Watch how each round of improvements gets us closer to a truly useful response.",
        steps: [
          {
            label: 'The original bad prompt',
            prompt: 'Tell me about history.',
            response: 'History is the study of past events, particularly in human affairs. It encompasses a wide range of topics, from ancient civilizations to modern political movements. The study of history helps us understand how societies have evolved over time and provides context for current events. Key periods include ancient history, the Middle Ages, the Renaissance, the Industrial Revolution, and the modern era...',
            annotation: 'Yikes. This is a generic textbook introduction that doesn\'t help with anything specific. The problem? The prompt is <strong>way too vague</strong>. "History" covers literally thousands of years and every country on Earth. Let\'s fix it by narrowing the topic.',
            isImproved: false,
          },
          {
            label: 'Fix #1: Narrow the topic',
            prompt: 'Tell me about the American Revolution.',
            response: 'The American Revolution (1765-1783) was a political upheaval in which the Thirteen Colonies broke free from British rule and formed the United States of America. Key causes included taxation without representation, growing desire for self-governance, and tensions between colonial and British interests. Major events include the Boston Tea Party (1773), the signing of the Declaration of Independence (1776), and the decisive victory at the Battle of Yorktown (1781)...',
            annotation: 'Better! We went from ALL of history to one specific event. But it still reads like an encyclopedia. It\'s <strong>missing an audience</strong> — the AI doesn\'t know if this is for a college student or a middle schooler.',
            isImproved: false,
          },
          {
            label: 'Fix #2: Add audience and purpose',
            prompt: 'I\'m a 7th grader studying for a history test. Tell me about the American Revolution.',
            response: 'The American Revolution was when the 13 American colonies decided they didn\'t want to be ruled by Great Britain anymore. The colonists were upset because they had to pay taxes to the British government but had no say in the laws being made — this is called "taxation without representation." Important events include the Boston Tea Party, where colonists dumped tea into the harbor as a protest, the writing of the Declaration of Independence in 1776, and the final battle at Yorktown in 1781 where the Americans won...',
            annotation: 'Now the language is right for a 7th grader. But it\'s still a big wall of text — it\'s <strong>missing format</strong>. For studying, a structured format would be way more useful than paragraphs.',
            isImproved: false,
          },
          {
            label: 'Fix #3: Add format and scope',
            prompt: 'I\'m a 7th grader studying for a history test. Give me the 5 most important causes of the American Revolution in a numbered list, with a 1-2 sentence explanation for each.',
            response: 'Here are the 5 most important causes of the American Revolution:\n\n1. **Taxation Without Representation** -- The British government made colonists pay taxes (like the Stamp Act and Tea Act) but wouldn\'t let them vote on these laws. The colonists thought this was totally unfair.\n\n2. **The Boston Massacre (1770)** -- British soldiers fired into a crowd of colonists, killing 5 people. This event made colonists furious and turned many people against British rule.\n\n3. **The Intolerable Acts (1774)** -- After the Boston Tea Party, Britain passed harsh laws to punish Massachusetts. These laws were so extreme that other colonies joined together to resist.\n\n4. **Growing Desire for Independence** -- Writers like Thomas Paine (who wrote "Common Sense") convinced many colonists that they didn\'t need a king and could govern themselves.\n\n5. **Lack of Colonial Representation in Parliament** -- Colonists had zero representatives in the British Parliament. They felt like they were being ruled by people who didn\'t understand or care about their lives.',
            annotation: 'Now we\'re talking! The content is focused, the format is study-friendly, and each cause has a clear explanation. Let\'s do one final improvement.',
            isImproved: true,
          },
          {
            label: 'Fix #4: Add role and tone for the final polish',
            prompt: 'I\'m a 7th grader studying for a history test on the American Revolution. Act as a fun, engaging history tutor. Give me the 5 most important causes of the American Revolution in a numbered list, with a 1-2 sentence explanation for each and a memory trick to help me remember it. Keep the tone upbeat and encouraging.',
            response: 'You got this! Let\'s crush that history test! Here are the 5 biggest causes of the American Revolution:\n\n1. **Taxation Without Representation** -- Britain charged colonists taxes but gave them zero voice in government. Think of it this way: imagine paying for a pizza but not being allowed to choose the toppings! \u{1F355}\n**Memory trick:** "No voice, no choice" = angry colonists.\n\n2. **The Boston Massacre (1770)** -- British soldiers fired on a crowd and killed 5 colonists. It was a turning point that made TONS of people say "We\'re done with Britain."\n**Memory trick:** "Mass-acre = Massive anger."\n\n3. **The Intolerable Acts (1774)** -- Britain\'s punishment laws were so harsh that other colonies banded together. Britain thought they were dividing the colonies — instead, they united them!\n**Memory trick:** "In-TOLERABLE = TOO much to TOLERATE."\n\n4. **Thomas Paine\'s "Common Sense"** -- This famous pamphlet argued that it was just common sense to break away from a king an ocean away.\n**Memory trick:** "Paine = the Brain who explained it plain."\n\n5. **No Seats in Parliament** -- Zero colonial representatives in the British government. Imagine your school making rules but never letting students speak.\n**Memory trick:** "No seat at the table = no reason to be loyal."',
            annotation: '<strong>That\'s a fully iterated prompt!</strong> We went from "Tell me about history" to a focused, fun, study-ready response with memory tricks. Each round of iteration fixed a specific problem: too vague, wrong audience, bad format, and missing personality. THIS is how prompt engineers work!',
            isImproved: true,
          },
        ],
      },
    },
    {
      id: 'L3S4',
      type: 'activity',
      title: 'Practice: Fix the Bad Prompt',
      data: {
        activities: [
          { type: 'fix-bad-prompt', challengeRef: 'L3C1' },
          { type: 'fix-bad-prompt', challengeRef: 'L3C2' },
          { type: 'fix-bad-prompt', challengeRef: 'L3C3' },
          { type: 'fix-bad-prompt', challengeRef: 'L3C4' },
        ],
        completionRequirement: 'all',
      },
    },
    {
      id: 'L3S5',
      type: 'quiz',
      title: 'Check Your Understanding',
      data: {
        passingScore: 0.7,
        questions: [
          {
            type: 'multiple-choice',
            question: 'What is the correct order of the iteration cycle?',
            options: [
              'Improve, Try, Evaluate, Repeat',
              'Try, Evaluate, Improve, Repeat',
              'Evaluate, Improve, Try, Repeat',
              'Try, Improve, Repeat, Evaluate',
            ],
            correct: 1,
            feedback: 'The iteration cycle goes: Try (write and submit your prompt), Evaluate (read the response and figure out what\'s good and what\'s off), Improve (revise your prompt), and Repeat (try again and compare).',
          },
          {
            type: 'multiple-choice',
            question: 'What is the BIGGEST problem with this prompt: "Explain everything about the solar system"?',
            options: [
              'It\'s too short',
              'It doesn\'t say "please"',
              'It\'s too broad — "everything" is impossible and leads to a shallow, generic response',
              'It uses the wrong vocabulary',
            ],
            correct: 2,
            feedback: 'The word "everything" is the red flag. The AI can\'t cover everything about the solar system in one response, so it gives a generic overview that isn\'t useful for anything specific. Narrowing the scope (e.g., "the 4 inner planets" or "why Pluto was reclassified") fixes this.',
          },
          {
            type: 'true-false',
            question: 'Professional prompt engineers usually write the perfect prompt on their very first try.',
            correct: false,
            feedback: 'Even professionals iterate! The best prompt engineers expect to revise their prompts multiple times. Iteration isn\'t a sign of failure — it\'s a core skill. The more you practice the Try-Evaluate-Improve-Repeat cycle, the faster you\'ll get at it.',
          },
        ],
      },
    },
    {
      id: 'L3S6',
      type: 'summary',
      title: 'Lesson Summary',
      data: {
        mascotMessage: "You're a certified Prompt Detective now! You can spot a bad prompt from a mile away AND you know how to fix it. That's a seriously powerful skill!",
        keyTakeaways: [
          '<strong>Iteration is the secret weapon.</strong> Great prompts are built through the cycle of Try, Evaluate, Improve, and Repeat.',
          '<strong>The 4 biggest prompt mistakes</strong> are being too vague, too broad, missing the audience, and not specifying a format.',
          '<strong>Nobody gets it perfect on the first try</strong> — and that\'s totally okay! Even professionals revise their prompts multiple times.',
          '<strong>Follow-up prompting works too:</strong> you can improve AI responses by asking for changes in the same conversation ("make it shorter," "add examples," "change the tone").',
          '<strong>The "friend test":</strong> if a human friend would need to ask follow-up questions before helping, your prompt needs more detail.',
        ],
        nextPreview: 'In Lesson 4, you\'ll learn <strong>Advanced Prompting Techniques</strong> — including role-playing, chain-of-thought, few-shot examples, and prompt chaining. These are the power moves that take your prompts to the next level!',
      },
    },
  ],
};
