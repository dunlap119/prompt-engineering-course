/**
 * Lesson 1 prompt challenges — 4 challenges on specificity.
 */

export const lesson1Challenges = {
  L1C1: {
    id: 'L1C1',
    title: 'Name That Animal!',
    task: 'Write a prompt asking the AI to tell you about ONE specific animal. Don\'t just say "animals" — pick one you like and ask for details!',
    hint: 'Try naming a specific animal (like "dolphins" or "red pandas") and ask for fun facts, a specific number of facts, or information written for someone your age.',
    criteria: [
      {
        id: 'specific-animal',
        label: 'Names a specific animal',
        test: 'containsPattern',
        args: [{ source: 'dog|cat|dolphin|eagle|penguin|elephant|tiger|lion|bear|wolf|shark|whale|parrot|snake|turtle|rabbit|horse|monkey|panda|fox|owl|octopus|cheetah|giraffe|koala|golden retriever|hamster|lizard|frog', flags: 'i' }],
        weight: 1,
      },
      {
        id: 'asks-detail',
        label: 'Asks for specific information',
        test: 'containsAny',
        args: [['fact', 'facts', 'habitat', 'diet', 'behavior', 'live', 'eat', 'interesting', 'cool', 'fun', 'describe', 'explain', 'tell me about', 'information']],
        weight: 1,
      },
      {
        id: 'format-or-scope',
        label: 'Requests a format or amount',
        test: 'containsAny',
        args: [['list', 'paragraph', 'bullet', 'numbered', 'table', '3', '5', '10', 'three', 'five', 'ten', 'short', 'brief', 'summary']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Animals are fascinating creatures found all around the world. There are millions of species, from tiny insects to massive whales. They live in all kinds of environments including forests, oceans, deserts, and even cities...',
      good: 'Dolphins are incredible ocean creatures! They\'re actually mammals, not fish, which means they breathe air and nurse their babies. Dolphins are known for being extremely intelligent and social — they live in groups called "pods" and communicate using clicks and whistles...',
      great: 'Here are 5 fun facts about dolphins! 🐬\n\n1. Dolphins sleep with one eye open — literally! Half their brain stays awake to keep breathing.\n2. They can swim up to 20 miles per hour.\n3. Each dolphin has a unique whistle, like a name.\n4. Dolphins have been known to help injured swimmers reach shore.\n5. They can hold their breath for up to 15 minutes!',
    },
    feedback: {
      poor: 'Your prompt was too vague! The AI didn\'t know which animal to focus on. Try naming a specific animal.',
      good: 'Good start! You named an animal and asked for information. Try also adding a format (like "5 fun facts") to get an even better response.',
      great: 'Excellent! Your specific prompt got a focused, detailed response. That\'s the power of details!',
    },
  },

  L1C2: {
    id: 'L1C2',
    title: 'Explain It Simply',
    task: 'Write a prompt asking the AI to explain a science topic in a way that a specific age group would understand.',
    hint: 'Pick a science topic (like photosynthesis, gravity, or the water cycle), then mention who should be able to understand it (a 5-year-old, a 6th grader, etc.).',
    criteria: [
      {
        id: 'topic',
        label: 'Names a specific science topic',
        test: 'containsAny',
        args: [['photosynthesis', 'gravity', 'water cycle', 'volcano', 'earthquake', 'eclipse', 'solar system', 'atoms', 'electricity', 'magnetism', 'evolution', 'dna', 'cells', 'weather', 'climate', 'erosion', 'fossil', 'planet', 'moon', 'star', 'light', 'sound', 'energy', 'force', 'chemical', 'biology', 'physics']],
        weight: 1,
      },
      {
        id: 'audience',
        label: 'Specifies an audience or age',
        test: 'containsAny',
        args: [['year-old', 'grader', 'kid', 'child', 'student', 'beginner', 'young', 'simple', 'easy', 'middle school', 'elementary', '5th', '6th', '7th', '8th', 'teen']],
        weight: 1,
      },
      {
        id: 'format',
        label: 'Requests a specific format or approach',
        test: 'containsAny',
        args: [['step', 'steps', 'analogy', 'example', 'list', 'paragraph', 'explain like', 'simple words', 'sentence', 'short']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Science is the study of the natural world. It involves observing, experimenting, and drawing conclusions about how things work. There are many branches of science including biology, chemistry, and physics...',
      good: 'Photosynthesis is how plants make their own food! Plants take in sunlight, water from the ground, and carbon dioxide from the air. They use these ingredients to create sugar (glucose) which gives them energy to grow. As a bonus, they release oxygen — which is what we breathe!',
      great: 'Photosynthesis in 3 simple steps (for kids):\n\n1. 🌞 Plants soak up sunlight through their leaves\n2. 💧 They mix it with water (from roots) and air (CO2 from their leaves)\n3. 🍬 They create sugar for food + release oxygen for us to breathe!\n\nThink of it like cooking: sunlight is the stove, water and CO2 are ingredients, and sugar is the meal!',
    },
    feedback: {
      poor: 'The AI didn\'t know what science topic you wanted or who needs to understand it. Try being more specific!',
      good: 'Nice! You gave it a topic and an audience. Try adding a format (like "in 3 steps" or "using an analogy") to level up.',
      great: 'Perfect! Topic + audience + format = an awesome, clear explanation!',
    },
  },

  L1C3: {
    id: 'L1C3',
    title: 'Creative Writing Prompt',
    task: 'Write a prompt asking the AI to write a short creative piece (story, poem, etc.) with specific constraints.',
    hint: 'Include: what type of writing (poem, story), a specific topic or setting, a length (3 paragraphs, 8 lines), and maybe a style or audience.',
    criteria: [
      {
        id: 'type',
        label: 'Specifies a type of writing',
        test: 'containsAny',
        args: [['story', 'poem', 'song', 'rap', 'haiku', 'limerick', 'tale', 'narrative', 'fiction', 'adventure', 'mystery', 'fairy tale']],
        weight: 1,
      },
      {
        id: 'topic-or-setting',
        label: 'Includes a topic or setting',
        test: 'minWordCount',
        args: [8],
        weight: 1,
      },
      {
        id: 'constraints',
        label: 'Adds constraints (length, style, audience)',
        test: 'containsAny',
        args: [['paragraph', 'line', 'word', 'short', 'long', 'rhyme', 'funny', 'scary', 'sad', 'happy', 'for kids', 'for middle school', 'for teens', '3', '5', 'stanza', 'chapter', 'page']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Once upon a time, there was a person who did things. They went places and saw stuff. The end.',
      good: 'The old lighthouse stood tall against the crashing waves. Inside, 12-year-old Maya discovered a dusty journal filled with mysterious symbols. As she traced the strange markings with her finger, the walls began to glow...',
      great: '🏚️ THE HAUNTED LIBRARY — A Mystery in 3 Paragraphs\n\nThe library had been closed for fifty years, but Zara could see a light flickering in the window. "Books don\'t turn on their own lights," she whispered to her best friend Marcus, who was already backing away.\n\nInside, the shelves stretched impossibly high, and every book was open to the same page — page 13. Marcus picked one up and gasped: the words were rearranging themselves, spelling out a message: "FIND THE RED BOOK BEFORE MIDNIGHT."\n\n"That gives us twenty minutes," Zara said, checking her phone. Somewhere deep in the library, a clock started ticking — and it definitely wasn\'t counting in seconds.',
    },
    feedback: {
      poor: 'The AI had no idea what kind of writing you wanted or any details about it. The result is... boring! Add specifics.',
      good: 'Getting better! You gave it a type and some direction. Adding a length or other constraint would make it even more focused.',
      great: 'Amazing prompt! The AI delivered exactly the kind of creative piece you asked for because you were so specific!',
    },
  },

  L1C4: {
    id: 'L1C4',
    title: 'Study Helper',
    task: 'Write a prompt asking the AI to create a study resource (study guide, flashcards, quiz, etc.) for a specific subject.',
    hint: 'Include: what subject and topic, what type of study resource, how many items, and who it\'s for (what grade level).',
    criteria: [
      {
        id: 'subject',
        label: 'Names a specific subject or topic',
        test: 'containsAny',
        args: [['math', 'science', 'history', 'english', 'social studies', 'geography', 'biology', 'chemistry', 'physics', 'algebra', 'geometry', 'vocabulary', 'grammar', 'fractions', 'decimals', 'revolution', 'civil war', 'ancient', 'medieval', 'world war', 'constitution', 'ecosystem']],
        weight: 1,
      },
      {
        id: 'resource-type',
        label: 'Requests a type of study resource',
        test: 'containsAny',
        args: [['study guide', 'flashcard', 'quiz', 'practice', 'review', 'summary', 'cheat sheet', 'outline', 'notes', 'worksheet', 'test', 'question']],
        weight: 1,
      },
      {
        id: 'scope',
        label: 'Specifies amount or grade level',
        test: 'containsAny',
        args: [['5', '10', '15', '20', 'five', 'ten', 'fifteen', 'twenty', 'grade', 'grader', 'middle school', 'level', 'beginner', 'advanced', 'chapter', 'unit']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Here are some study tips: Read your textbook. Take notes. Review before the test. Ask your teacher if you have questions. Study with a friend...',
      good: 'American Revolution Study Guide:\n\n- The Revolution lasted from 1775 to 1783\n- Key causes: taxation without representation, Boston Tea Party, Intolerable Acts\n- Important figures: George Washington, Benjamin Franklin, Thomas Jefferson\n- Major battles: Lexington & Concord, Bunker Hill, Yorktown\n- Result: American independence, Constitution created',
      great: '📚 American Revolution — 10 Flashcards for 7th Grade\n\n1. Q: What was "taxation without representation"?\n   A: Colonists had to pay British taxes but had no say in British government\n\n2. Q: When was the Boston Tea Party?\n   A: December 16, 1773\n\n3. Q: Who wrote the Declaration of Independence?\n   A: Thomas Jefferson (with help from Benjamin Franklin and John Adams)\n\n4. Q: What battle started the Revolutionary War?\n   A: Battles of Lexington and Concord (April 1775)\n\n5. Q: Who was the commander of the Continental Army?\n   A: George Washington\n\n[...5 more flashcards]',
    },
    feedback: {
      poor: 'The AI didn\'t know what subject, what kind of resource, or what level. Generic study tips aren\'t helpful! Be specific.',
      good: 'Good job picking a subject and resource type! Adding a quantity and grade level would make this study tool even more useful.',
      great: 'You nailed it! A specific subject, resource type, quantity, and grade level = a perfect study tool!',
    },
  },
};
