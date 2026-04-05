/**
 * Lesson 4 prompt challenges — 4 challenges on advanced prompting techniques.
 * Role-playing, chain-of-thought, few-shot examples, and combining techniques.
 */

export const lesson4Challenges = {
  L4C1: {
    id: 'L4C1',
    title: 'Creative Character',
    task: 'Write a prompt that assigns the AI a fun, creative role or persona — not just "a teacher" but something more imaginative, like a time-traveling historian or a pirate science tutor. Then ask it to explain something.',
    hint: 'Think outside the box! Try roles like "a nature documentary narrator describing gym class," "a medieval knight explaining the internet," or "a detective investigating why homework exists."',
    criteria: [
      {
        id: 'creative-role',
        label: 'Assigns a creative or unusual role',
        test: 'containsAny',
        args: [['pirate', 'narrator', 'detective', 'alien', 'robot', 'knight', 'wizard', 'superhero', 'time travel', 'ghost', 'dinosaur', 'astronaut', 'spy', 'mad scientist', 'viking', 'ninja', 'caveman', 'villain', 'explorer', 'royal', 'king', 'queen', 'shakespeare', 'cowboy', 'samurai']],
        weight: 1,
      },
      {
        id: 'role-phrasing',
        label: 'Uses role-assignment language',
        test: 'containsAny',
        args: [['act as', 'you are', 'pretend', 'be a', 'act like', 'imagine you', 'you\'re a', 'play the role', 'respond as', 'speak as', 'talk like', 'write as']],
        weight: 1,
      },
      {
        id: 'topic-to-explain',
        label: 'Asks the persona to explain something specific',
        test: 'containsAny',
        args: [['explain', 'teach', 'describe', 'tell', 'present', 'introduce', 'walk me through', 'break down', 'show', 'help me understand', 'give a lesson', 'lecture']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Gravity is a force that attracts objects toward each other. The more mass an object has, the stronger its gravitational pull. Earth\'s gravity keeps us on the ground and keeps the Moon in orbit around our planet...',
      good: '*adjusts pirate hat*\n\nAhoy, mateys! Captain Gravity here to tell ye about the most powerful force on the seven seas — GRAVITY!\n\nGravity be the invisible force that pulls everything toward the ground. It\'s why yer cannonball falls into the ocean instead of floating away! The bigger the object, the stronger its pull. That\'s why the Earth — a massive beauty — keeps us pirates stuck to the deck instead of floating off into the sky!',
      great: '*In a David Attenborough whisper*\n\nAnd here... in the wild savannas of the classroom... we observe a most remarkable phenomenon. The student reaches for their pencil — and watch... it falls. It tumbles, end over end, pulled by an invisible force scientists call... gravity.\n\nGravity, you see, is nature\'s leash. It is the force that attracts every object with mass toward every other object with mass. The Earth, being enormously massive, pulls everything toward its center — pencils, students, and even the International Space Station, which is actually falling around the Earth in a constant state of freefall we call "orbit."\n\nRemarkable. The same force that drops a pencil... holds the Moon in the sky.\n\n*camera zooms in on fallen pencil*\n\nNature... is extraordinary.',
    },
    feedback: {
      poor: 'You didn\'t assign the AI a creative character! Without a role, it just gave a plain, textbook answer. Try giving it a fun persona.',
      good: 'Good role assignment! The AI changed its personality. Try picking a more unexpected or creative role for even more entertaining results.',
      great: 'Incredible! That creative persona made the explanation way more engaging and memorable. Role-playing is one of the most powerful prompting techniques!',
    },
  },

  L4C2: {
    id: 'L4C2',
    title: 'Think Step by Step',
    task: 'Write a prompt that asks the AI to use chain-of-thought reasoning — meaning it should think through the problem step by step and show its work, not just give the final answer.',
    hint: 'Include phrases like "think step by step," "show your reasoning," "explain each step," or "walk me through the process." This works great for math, logic puzzles, or complex questions.',
    criteria: [
      {
        id: 'chain-of-thought',
        label: 'Asks for step-by-step reasoning',
        test: 'containsAny',
        args: [['step by step', 'step-by-step', 'show your work', 'show your reasoning', 'think through', 'explain each step', 'walk me through', 'one step at a time', 'break it down', 'explain your thinking', 'reason through', 'show how', 'work through']],
        weight: 1,
      },
      {
        id: 'specific-problem',
        label: 'Provides a specific problem or question',
        test: 'containsAny',
        args: [['solve', 'calculate', 'figure out', 'how do', 'how would', 'how does', 'why does', 'what happens', 'explain how', 'explain why', 'if', 'problem', 'equation', 'question', 'what is', 'find', 'determine']],
        weight: 1,
      },
      {
        id: 'verification-or-detail',
        label: 'Asks for explanation or verification',
        test: 'containsAny',
        args: [['explain', 'why', 'reasoning', 'logic', 'check', 'verify', 'prove', 'understand', 'detail', 'detailed', 'thorough', 'clearly', 'carefully', 'make sure', 'each', 'every']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'The answer is 42.',
      good: 'To solve 15% of 80:\nFirst, convert 15% to a decimal: 15 / 100 = 0.15\nThen multiply: 0.15 x 80 = 12\nThe answer is 12.',
      great: 'Let me solve "If a shirt costs $45 and is 20% off, what do you pay?" step by step:\n\nStep 1: Understand the problem\n- Original price = $45\n- Discount = 20%\n- I need to find the final price after the discount\n\nStep 2: Calculate the discount amount\n- 20% means 20 out of 100, or 0.20 as a decimal\n- Discount = 0.20 x $45 = $9.00\n- So you save $9!\n\nStep 3: Subtract the discount from the original price\n- Final price = $45 - $9 = $36\n\nStep 4: Double-check with another method\n- If it\'s 20% OFF, you\'re paying 80% of the price\n- 0.80 x $45 = $36 (same answer!)\n\nFinal answer: You pay $36.00\n\nWhy this works: Percent means "per hundred." So 20% off means you\'re removing 20 out of every 100 cents. Both methods give the same answer, which confirms we got it right!',
    },
    feedback: {
      poor: 'You didn\'t ask the AI to show its thinking! Without that request, it just gave a bare answer with no explanation. Add "step by step" or "show your work."',
      good: 'Nice! You got the AI to show its steps. Try also asking it to explain WHY each step works, or to verify the answer, for an even more detailed walkthrough.',
      great: 'Perfect chain-of-thought prompt! The AI showed every step, explained its reasoning, and even double-checked. This is how you learn from AI instead of just copying answers!',
    },
  },

  L4C3: {
    id: 'L4C3',
    title: 'Show Me an Example First',
    task: 'Write a prompt that includes a few-shot example — meaning you SHOW the AI an example of exactly what you want before asking it to create more. Give it one example, then ask for more in the same format.',
    hint: 'Write out ONE example of exactly what you want (a flashcard, a fun fact, a vocabulary entry) and then say "Now create 3 more in the same format" or "Follow this pattern for these words."',
    criteria: [
      {
        id: 'provides-example',
        label: 'Includes at least one example',
        test: 'containsAny',
        args: [['example', 'for example', 'like this', 'here is an example', 'here\'s an example', 'format:', 'such as', 'sample', 'template', 'pattern', 'for instance', 'here\'s one', 'here is one']],
        weight: 1,
      },
      {
        id: 'asks-for-more',
        label: 'Asks AI to create more in same format',
        test: 'containsAny',
        args: [['now create', 'now make', 'now write', 'now do', 'make more', 'create more', 'write more', 'do the same', 'same format', 'same style', 'same way', 'follow this', 'follow the same', 'more like this', 'do this for', 'using this format', 'in this format']],
        weight: 1,
      },
      {
        id: 'enough-detail',
        label: 'Example has enough detail to be useful',
        test: 'minWordCount',
        args: [20],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Here are some vocabulary words:\n\n1. Benevolent - kind and generous\n2. Meticulous - very careful and precise\n3. Resilient - able to recover quickly',
      good: 'Following your format! Here are more vocabulary entries:\n\nWord: Meticulous\nDefinition: Showing great attention to detail; very careful\nExample: She was meticulous about organizing her notes before the test.\n\nWord: Resilient\nDefinition: Able to recover quickly from difficulties\nExample: The resilient community rebuilt after the hurricane.',
      great: 'Following your exact format! Here are 3 more:\n\nWord: Meticulous\nDefinition: Showing great attention to detail; very careful and precise\nExample sentence: She was meticulous about organizing her notes, color-coding every section.\nMemory trick: "Me-TICK-ulous" — imagine someone so careful they check every TICK on a checklist!\n\nWord: Resilient\nDefinition: Able to recover quickly from difficulties; tough\nExample sentence: The resilient team bounced back from a 3-0 deficit to win the game.\nMemory trick: "Re-SILLY-ent" — imagine being so tough that setbacks seem SILLY to you!\n\nWord: Benevolent\nDefinition: Well-meaning and kindly; wanting to do good\nExample sentence: The benevolent neighbor brought soup to everyone who was sick on the street.\nMemory trick: "BENE-volent" — "bene" means good (like "benefit"), so benevolent = good-willed!',
    },
    feedback: {
      poor: 'You didn\'t show the AI an example of what you want! Without a model to follow, the AI just guessed at the format. Try giving it ONE example first.',
      good: 'Good start! You gave an example and asked for more. Try making your example more detailed so the AI copies all the specific elements you want.',
      great: 'Awesome few-shot prompting! By showing the AI exactly what you want, you got perfectly consistent results every time. This is a pro technique!',
    },
  },

  L4C4: {
    id: 'L4C4',
    title: 'Technique Combo',
    task: 'Write ONE prompt that combines at least 3 advanced techniques: a creative role, chain-of-thought reasoning, AND a specific output format. Stack those techniques together!',
    hint: 'Try something like: "Act as a [creative role]. Explain [topic] step by step. Present your answer as [specific format]." The more techniques you combine, the more control you have!',
    criteria: [
      {
        id: 'combo-role',
        label: 'Assigns a role or persona',
        test: 'containsAny',
        args: [['act as', 'you are', 'pretend', 'be a', 'act like', 'imagine you', 'you\'re a', 'play the role', 'respond as', 'as a']],
        weight: 1,
      },
      {
        id: 'combo-cot',
        label: 'Requests step-by-step reasoning',
        test: 'containsAny',
        args: [['step by step', 'step-by-step', 'show your work', 'explain each step', 'walk me through', 'think through', 'break it down', 'one step at a time', 'explain your reasoning', 'reason through']],
        weight: 1,
      },
      {
        id: 'combo-format',
        label: 'Specifies an output format',
        test: 'containsAny',
        args: [['bullet', 'numbered', 'list', 'table', 'paragraph', 'outline', 'format', 'section', 'heading', 'column', 'chart', 'steps', 'points']],
        weight: 1,
      },
      {
        id: 'combo-topic',
        label: 'Includes a specific topic or question',
        test: 'minWordCount',
        args: [15],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 4 },
    responses: {
      poor: 'Photosynthesis is the process by which plants convert sunlight into energy. Plants use chlorophyll in their leaves to absorb light. They combine carbon dioxide from the air with water from the soil to create glucose and oxygen.',
      good: '*Adjusts lab goggles*\n\nAs your mad scientist tutor, let me walk you through photosynthesis step by step!\n\nStep 1: Plants absorb sunlight through chlorophyll (the green stuff in leaves)\nStep 2: They pull water up from the roots\nStep 3: They grab carbon dioxide from the air through tiny holes called stomata\nStep 4: Using light energy, they combine water + CO2 into glucose (sugar for food!)\nStep 5: Oxygen is released as a byproduct — which is what we breathe!\n\nThe formula: 6CO2 + 6H2O + light energy = C6H12O6 + 6O2',
      great: '*Adjusts lab goggles and cackles*\n\nGREETINGS, young apprentice! I am Dr. Chlorophyll, mad scientist extraordinaire, and today I shall reveal the GREATEST RECIPE IN NATURE — photosynthesis! Follow my steps carefully...\n\nThe Mad Scientist\'s Guide to Photosynthesis:\n\n| Step | What Happens | The Mad Scientist Explanation |\n|------|-------------|-----------------------------|\n| 1. Absorb Light | Chlorophyll in leaves captures sunlight | "The leaves are like tiny SOLAR PANELS! Green because chlorophyll reflects green light but ABSORBS red and blue!" |\n| 2. Drink Up | Roots pull water from soil | "The roots are STRAWS sucking up H2O from underground! Slurrrp!" |\n| 3. Breathe In | Stomata (tiny leaf holes) take in CO2 | "Leaves have MOUTHS called stomata! They inhale carbon dioxide!" |\n| 4. The Reaction | Light energy splits water, combines with CO2 | "HERE\'S WHERE THE MAGIC HAPPENS! Light energy rearranges the atoms like molecular LEGOS!" |\n| 5. The Output | Plant makes glucose + releases O2 | "The plant gets FOOD (glucose) and we get OXYGEN! It\'s a WIN-WIN, MWAHAHAHA!" |\n\nSecret Formula: 6CO2 + 6H2O + light = C6H12O6 + 6O2\n\nIn plain English: 6 carbon dioxides + 6 waters + sunlight = 1 sugar + 6 oxygens\n\nNow go forth and photosynthesize! ...wait, you\'re not a plant. Never mind!',
    },
    feedback: {
      poor: 'Your prompt only used one technique (or none!). Try stacking a role + chain-of-thought + format together in one prompt.',
      good: 'Nice! You combined a couple of techniques. Try adding a third to get the full combo effect — role + step-by-step + format is incredibly powerful.',
      great: 'Technique combo master! You stacked role-playing, chain-of-thought, and a specific format into one prompt. The result is detailed, engaging, and perfectly structured!',
    },
  },
};
