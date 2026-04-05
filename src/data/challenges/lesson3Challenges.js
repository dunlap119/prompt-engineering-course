/**
 * Lesson 3 prompt challenges — 4 "fix the bad prompt" challenges.
 * Each includes a badPrompt, badResponse, and task to fix it.
 */

export const lesson3Challenges = {
  L3C1: {
    id: 'L3C1',
    title: 'Fix: "Tell me about history"',
    badPrompt: 'Tell me about history.',
    badResponse: 'History is the study of past events, particularly in human affairs. It encompasses everything from ancient civilizations to modern times. History helps us understand how societies developed, how cultures changed, and how events shaped the world we live in today. There are many branches of history including political history, social history, economic history, and cultural history...',
    task: 'This prompt is way too vague! The AI doesn\'t know which part of history, what time period, or what level of detail you want. Rewrite it to be specific — pick a topic, time period, or event and tell the AI exactly what you need.',
    hint: 'Pick ONE specific historical event or topic (like "the Boston Tea Party" or "ancient Egypt"), mention who it\'s for, and ask for a specific format like a timeline or list of key facts.',
    criteria: [
      {
        id: 'specific-topic',
        label: 'Names a specific historical topic or event',
        test: 'containsAny',
        args: [['revolution', 'war', 'ancient', 'medieval', 'civil war', 'world war', 'egypt', 'rome', 'greece', 'boston tea party', 'declaration', 'constitution', 'renaissance', 'colonial', 'slavery', 'civil rights', 'cold war', 'industrial', 'exploration', 'viking', 'aztec', 'maya', 'inca', 'dynasty', 'empire', 'king', 'queen', 'president']],
        weight: 1,
      },
      {
        id: 'scope-or-detail',
        label: 'Specifies scope or level of detail',
        test: 'containsAny',
        args: [['key', 'main', 'important', 'major', 'top', 'most', '3', '5', '10', 'three', 'five', 'brief', 'short', 'detailed', 'summary', 'overview', 'quick', 'focused']],
        weight: 1,
      },
      {
        id: 'format-or-audience',
        label: 'Requests a format or names audience',
        test: 'containsAny',
        args: [['list', 'timeline', 'paragraph', 'bullet', 'table', 'step', 'outline', 'grade', 'grader', 'middle school', 'kid', 'student', 'explain', 'simple', 'fun facts']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'History is the study of past events, particularly in human affairs. It encompasses everything from ancient civilizations to modern times. History helps us understand how societies developed...',
      good: 'The Boston Tea Party was a political protest by American colonists against British taxation in 1773. On December 16, colonists disguised as Mohawk Indians boarded three British ships in Boston Harbor and dumped 342 chests of tea into the water. This event was a key moment leading to the American Revolution because it showed Britain that the colonists were serious about resisting unfair taxes.',
      great: 'The Boston Tea Party — 5 Key Facts for 7th Graders:\n\n1. WHEN: December 16, 1773, at night in Boston Harbor\n2. WHY: Colonists were furious about the Tea Act — Britain was taxing them without giving them a vote in Parliament ("no taxation without representation")\n3. WHAT HAPPENED: About 116 men, some disguised as Mohawk Indians, boarded 3 British ships and dumped 342 chests of tea into the harbor\n4. HOW MUCH TEA: Over 92,000 pounds of tea worth about $1.7 million in today\'s money!\n5. WHAT CAME NEXT: Britain passed the Intolerable Acts to punish Massachusetts, which actually united the colonies and pushed them toward revolution\n\nThe tea party wasn\'t a party at all — it was an act of rebellion that changed history!',
    },
    feedback: {
      poor: 'Your rewrite is still too vague — the AI doesn\'t know what part of history to focus on. Try naming a specific event, time period, or topic!',
      good: 'Better! You narrowed the topic so the AI could give a focused answer. Try adding a format (timeline, list) or audience to make it even sharper.',
      great: 'Excellent fix! You turned a vague mess into a specific, well-structured prompt. See how much better the response is?',
    },
  },

  L3C2: {
    id: 'L3C2',
    title: 'Fix: "Explain math"',
    badPrompt: 'Explain math.',
    badResponse: 'Mathematics is a broad field of study that deals with numbers, quantities, shapes, and patterns. It includes many branches such as arithmetic, algebra, geometry, calculus, statistics, and more. Math is used in everyday life for things like counting, measuring, and solving problems...',
    task: 'This prompt is absurdly broad! "Math" covers everything from counting to calculus. The AI has no idea what topic, level, or kind of explanation you want. Rewrite it with a specific math concept and tell the AI who needs to understand it.',
    hint: 'Pick ONE math concept (like fractions, order of operations, or area of a triangle), state your grade level, and ask for step-by-step examples or a specific number of practice problems.',
    criteria: [
      {
        id: 'specific-math',
        label: 'Names a specific math topic',
        test: 'containsAny',
        args: [['fraction', 'fractions', 'decimal', 'decimals', 'percent', 'algebra', 'equation', 'geometry', 'area', 'perimeter', 'volume', 'ratio', 'proportion', 'integer', 'exponent', 'variable', 'graph', 'probability', 'mean', 'median', 'mode', 'angle', 'triangle', 'circle', 'multiply', 'divide', 'order of operations', 'slope', 'negative number', 'absolute value']],
        weight: 1,
      },
      {
        id: 'audience-level',
        label: 'Specifies audience or difficulty level',
        test: 'containsAny',
        args: [['grade', 'grader', 'middle school', 'beginner', 'student', 'kid', 'simple', 'easy', 'basic', '5th', '6th', '7th', '8th', 'year-old', 'level', 'confused', 'struggling', 'don\'t understand', 'new to']],
        weight: 1,
      },
      {
        id: 'method-or-format',
        label: 'Requests examples, steps, or format',
        test: 'containsAny',
        args: [['step by step', 'step-by-step', 'example', 'examples', 'practice', 'problem', 'problems', 'show', 'walk me through', 'how to', 'solve', 'explain like', 'break down', 'with work', 'show your work']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Mathematics is a broad field of study that deals with numbers, quantities, shapes, and patterns. It includes many branches such as arithmetic, algebra, geometry, calculus, statistics...',
      good: 'Adding fractions means combining parts of a whole. When the denominators (bottom numbers) are the same, just add the numerators (top numbers): 1/4 + 2/4 = 3/4. When denominators are different, you need to find a common denominator first. For example, 1/3 + 1/4: the common denominator is 12, so it becomes 4/12 + 3/12 = 7/12.',
      great: 'How to Add Fractions — Step by Step for 6th Graders:\n\nSTEP 1: Check the denominators (bottom numbers)\n- Same denominator? Just add the tops! Example: 2/5 + 1/5 = 3/5\n\nSTEP 2: Different denominators? Find the LCD (Least Common Denominator)\n- Example: 1/3 + 1/4\n- Multiples of 3: 3, 6, 9, 12... Multiples of 4: 4, 8, 12...\n- LCD = 12!\n\nSTEP 3: Convert both fractions\n- 1/3 = 4/12 (multiply top and bottom by 4)\n- 1/4 = 3/12 (multiply top and bottom by 3)\n\nSTEP 4: Now add!\n- 4/12 + 3/12 = 7/12\n\nSTEP 5: Simplify if possible\n- 7/12 is already simplified!\n\nPractice Problem: Try 2/5 + 1/3. (Answer: 6/15 + 5/15 = 11/15)',
    },
    feedback: {
      poor: 'Your rewrite is still too broad — "math" covers thousands of topics! Pick ONE specific concept to get a useful explanation.',
      good: 'Much better! You picked a topic and gave some direction. Adding examples or step-by-step instructions would take it to the next level.',
      great: 'Perfect fix! Specific topic + audience + step-by-step format = a math explanation you can actually learn from!',
    },
  },

  L3C3: {
    id: 'L3C3',
    title: 'Fix: "Write a story"',
    badPrompt: 'Write a story.',
    badResponse: 'Once upon a time, there was a person. They went on a journey to a place. Along the way, they met someone and something happened. In the end, everything worked out. The end.',
    task: 'This prompt gives the AI ZERO guidance! No genre, characters, setting, length, or audience. The result is the most boring story ever. Rewrite it with specific details about what kind of story you want.',
    hint: 'Include a genre (mystery, adventure, sci-fi), a main character, a setting, a length (like "under 200 words" or "3 paragraphs"), and who should enjoy it (kids, teens, etc.).',
    criteria: [
      {
        id: 'genre-or-type',
        label: 'Specifies a genre or story type',
        test: 'containsAny',
        args: [['mystery', 'adventure', 'sci-fi', 'science fiction', 'fantasy', 'horror', 'scary', 'funny', 'comedy', 'fairy tale', 'superhero', 'detective', 'ghost', 'thriller', 'romance', 'action', 'spooky', 'magical']],
        weight: 1,
      },
      {
        id: 'character-or-setting',
        label: 'Describes characters or setting',
        test: 'containsPattern',
        args: [{ source: 'about a|character|main character|protagonist|set in|takes place|middle school|school|space|forest|ocean|city|castle|island|future|planet|kingdom|neighborhood|haunted', flags: 'i' }],
        weight: 1,
      },
      {
        id: 'length-or-audience',
        label: 'Sets a length or audience',
        test: 'containsAny',
        args: [['paragraph', 'paragraphs', 'word', 'words', 'short', 'long', 'page', 'chapter', 'sentence', 'sentences', 'under', 'for kids', 'for teens', 'for middle school', 'grader', 'age', 'line', 'lines', '100', '200', '300', '500']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Once upon a time, there was a person. They went on a journey to a place. Along the way, they met someone and something happened. In the end, everything worked out. The end.',
      good: 'Maya stared at the locked door at the end of the school hallway. No one was supposed to go down there — but the strange music she\'d been hearing all week was definitely coming from behind it.\n\nShe reached for the handle. It was ice cold.\n\n"Don\'t," whispered a voice behind her. She spun around, but the hallway was empty. Only the flickering fluorescent lights stared back at her...',
      great: 'THE LAST LEVEL - A Sci-Fi Mystery in 3 Paragraphs (for middle schoolers)\n\nJax had been stuck on Level 99 of "Phantom Code" for three weeks — but tonight, at exactly 11:11 PM, a new door appeared in the game that he\'d never seen before. When he clicked it, his screen went black. Then six words appeared: "WELCOME TO THE REAL GAME." His bedroom lights flickered, his phone buzzed with a text from an unknown number — "Look behind you" — and when he turned around, his closet door was open. It had been closed five seconds ago.\n\nHeart pounding, Jax grabbed his flashlight and peered inside. Instead of clothes, he saw a staircase spiraling downward, lit by the same blue glow as his game. Against every instinct, he stepped in. The stairs were real. The air was cold. At the bottom was a room with six screens, each showing a different player — all trapped in their own closets, all looking as terrified as he felt.\n\nA robotic voice echoed through the room: "Congratulations, players. You\'ve reached Level 100. The only way out... is to solve it together. You have one hour." On every screen, a timer started counting down. Jax looked at the other players\' faces and whispered, "Okay. Let\'s do this."',
    },
    feedback: {
      poor: 'The AI still doesn\'t know what kind of story you want! Add a genre, character details, or setting so it has something to work with.',
      good: 'Nice improvement! You gave the AI some direction and the story got way more interesting. Try adding a length and audience too.',
      great: 'What a difference! Your detailed prompt produced an actual compelling story with a genre, characters, and a hook. That\'s the power of specificity!',
    },
  },

  L3C4: {
    id: 'L3C4',
    title: 'Fix: "Make something creative"',
    badPrompt: 'Make something creative.',
    badResponse: 'Here\'s something creative:\n\nRoses are red,\nViolets are blue,\nCreativity is fun,\nAnd so are you.\n\nHope you enjoyed that! Let me know if you\'d like something else.',
    task: 'This is the vaguest prompt possible. "Something" and "creative" tell the AI literally nothing. You need a full CRAFT rewrite — define what creative thing you want, who should enjoy it, what format, and how it should feel.',
    hint: 'Decide what you want (poem? song lyrics? comic script? dialogue?), pick a topic, set a length, describe the tone, and maybe even assign a role. Use as many CRAFT elements as you can!',
    criteria: [
      {
        id: 'creative-type',
        label: 'Specifies a creative format',
        test: 'containsAny',
        args: [['poem', 'story', 'song', 'rap', 'lyrics', 'dialogue', 'script', 'comic', 'skit', 'haiku', 'limerick', 'monologue', 'speech', 'letter', 'journal', 'diary', 'scene', 'play']],
        weight: 1,
      },
      {
        id: 'topic-direction',
        label: 'Gives a topic or direction',
        test: 'minWordCount',
        args: [10],
        weight: 1,
      },
      {
        id: 'tone-or-style',
        label: 'Describes a tone or style',
        test: 'containsAny',
        args: [['funny', 'scary', 'sad', 'happy', 'exciting', 'dramatic', 'silly', 'serious', 'emotional', 'inspiring', 'mysterious', 'dark', 'light', 'upbeat', 'rhyming', 'humorous', 'heartfelt', 'epic']],
        weight: 1,
      },
      {
        id: 'length-or-structure',
        label: 'Sets a length or structure',
        test: 'containsAny',
        args: [['line', 'lines', 'verse', 'verses', 'stanza', 'paragraph', 'paragraphs', 'word', 'words', 'short', 'long', '3', '5', '8', '10', '12', 'minute']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Here\'s something creative:\n\nRoses are red,\nViolets are blue,\nCreativity is fun,\nAnd so are you.\n\nHope you enjoyed that!',
      good: 'THE CAFETERIA CHRONICLES - A Rap\n\nLunch line stretching to the door,\nMystery meat — what is that for?\nTater tots are golden and hot,\nThat\'s the only thing that hits the spot!\nChocolate milk in a tiny carton,\nTrading snacks like we\'re at a bargain.\nBell rings and we\'re out the door,\nBut tomorrow we\'ll be back for more!',
      great: 'THE CAFETERIA CHRONICLES - A Funny Rap (3 Verses + Chorus)\n\n[Verse 1]\nYo, it\'s 12 o\'clock, the bell just rang,\nWhole school stampeding — BANG BANG BANG,\nGot my tray, got my strategy planned,\nSkip the salad bar, pizza\'s in demand!\n\n[Chorus]\nCafeteria, cafeteria — it\'s a battleground,\nCafeteria, cafeteria — best lunch in town!\n\n[Verse 2]\nMystery meat Monday, nobody knows,\nIs it chicken? Beef? Nobody goes close.\nBut those tater tots? Absolute fire,\nStack \'em on my tray, pile \'em higher and higher!\n\n[Chorus]\nCafeteria, cafeteria — it\'s a battleground,\nCafeteria, cafeteria — best lunch in town!\n\n[Verse 3]\nTrading cookies like they\'re made of gold,\nTwo chips for a brownie? SOLD!\nBell rings, lunch is almost through,\nSee you tomorrow, same time, same crew!\n\n[Outro]\nCafeteria life — it\'s a beautiful thing.\n*drops tray* *mic drop*',
    },
    feedback: {
      poor: 'The AI still had nothing to work with. "Creative" could mean anything! Tell it specifically what to create, about what, and in what style.',
      good: 'Way better! You gave the AI a creative direction and it actually produced something fun. Adding more structure or a specific tone would complete the transformation.',
      great: 'Incredible rewrite! You turned the vaguest prompt ever into something specific and the AI delivered. That\'s a complete CRAFT transformation!',
    },
  },
};
