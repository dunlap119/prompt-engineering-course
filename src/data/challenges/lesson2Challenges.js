/**
 * Lesson 2 prompt challenges — 4 challenges on the CRAFT framework.
 * C = Context, R = Role, A = Ask, F = Format, T = Tone
 */

export const lesson2Challenges = {
  L2C1: {
    id: 'L2C1',
    title: 'Set the Scene',
    task: 'Write a prompt that gives the AI useful context or background info. Tell it what the situation is, what you already know, or what the prompt is for.',
    hint: 'Try starting with something like "I\'m working on a project about..." or "I\'m a 7th grader studying..." so the AI knows the situation before you ask your question.',
    criteria: [
      {
        id: 'context-situation',
        label: 'Provides background or situation',
        test: 'containsAny',
        args: [['I\'m working on', 'I\'m studying', 'I\'m writing', 'I\'m doing', 'I have a', 'for my class', 'for school', 'for a project', 'my assignment', 'I need to', 'I\'m preparing', 'I\'m learning', 'I\'m researching']],
        weight: 1,
      },
      {
        id: 'context-subject',
        label: 'Mentions a specific subject or topic',
        test: 'containsAny',
        args: [['science', 'math', 'history', 'english', 'social studies', 'geography', 'biology', 'chemistry', 'physics', 'reading', 'writing', 'art', 'music', 'literature', 'ecology', 'space', 'technology', 'health', 'climate', 'animals', 'environment', 'government', 'economics']],
        weight: 1,
      },
      {
        id: 'context-audience',
        label: 'Mentions who it is for or grade level',
        test: 'containsAny',
        args: [['grade', 'grader', 'middle school', 'student', 'class', 'teacher', 'kid', 'teen', 'year-old', 'beginner', 'advanced', '5th', '6th', '7th', '8th']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'The water cycle is a process that describes the continuous movement of water on, above, and below the surface of the Earth. Water evaporates, condenses, and precipitates in a never-ending cycle...',
      good: 'Since you\'re studying earth science, here\'s a clear overview of the water cycle! Water evaporates from oceans and lakes when heated by the sun. It rises into the atmosphere, cools down, and condenses into clouds. When the droplets get heavy enough, they fall as rain or snow (precipitation). The water flows into rivers and streams, eventually returning to the ocean to start over...',
      great: 'Great question for your 7th grade science project! Here\'s the water cycle broken down for your class:\n\nThe water cycle has 4 main stages:\n1. Evaporation - The sun heats water in oceans/lakes, turning it into vapor\n2. Condensation - Water vapor rises, cools, and forms clouds\n3. Precipitation - Water falls as rain, snow, sleet, or hail\n4. Collection - Water gathers in rivers, lakes, and oceans, and the cycle restarts\n\nFun connection: the water you drink today could have been dinosaur rain millions of years ago!',
    },
    feedback: {
      poor: 'Your prompt didn\'t give the AI any context! It didn\'t know what the information was for, so it gave a generic response. Try adding background info.',
      good: 'Nice! You gave some context so the AI knew what you were working on. Adding your grade level or who it\'s for would make it even better.',
      great: 'Awesome! You set the scene perfectly. The AI knew your situation, subject, and audience, so it tailored the response just for you!',
    },
  },

  L2C2: {
    id: 'L2C2',
    title: 'Who Should I Be?',
    task: 'Write a prompt that assigns a role to the AI. Tell it to act as a specific type of person, like a teacher, scientist, or coach.',
    hint: 'Start with "Act as a..." or "You are a..." then pick someone interesting: a friendly tutor, a nature documentary narrator, a historian, a sports coach, etc.',
    criteria: [
      {
        id: 'role-assignment',
        label: 'Assigns a role to the AI',
        test: 'containsAny',
        args: [['act as', 'you are a', 'pretend you are', 'be a', 'act like', 'imagine you are', 'you\'re a', 'behave as', 'play the role', 'respond as', 'as a', 'like a']],
        weight: 1,
      },
      {
        id: 'role-specific',
        label: 'Names a specific role or persona',
        test: 'containsAny',
        args: [['teacher', 'tutor', 'scientist', 'narrator', 'coach', 'doctor', 'historian', 'chef', 'detective', 'pirate', 'explorer', 'professor', 'guide', 'mentor', 'expert', 'astronaut', 'reporter', 'librarian', 'inventor', 'storyteller', 'wizard', 'robot']],
        weight: 1,
      },
      {
        id: 'role-task',
        label: 'Gives the role something to do',
        test: 'containsAny',
        args: [['explain', 'teach', 'describe', 'help', 'tell', 'show', 'guide', 'walk me through', 'break down', 'introduce', 'present', 'create', 'write', 'make']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Volcanoes are mountains that have an opening through which molten rock, gases, and debris can escape from below the earth\'s surface. When pressure builds up, eruptions can occur...',
      good: 'As your science tutor, let me explain volcanoes! Think of the Earth like a hard-boiled egg with a cracked shell. Under that shell, there\'s super-hot melted rock called magma. When pressure builds up, it pushes through cracks in the "shell" and erupts as lava on the surface...',
      great: '*In a David Attenborough-style nature narrator voice*\n\nAnd here... we observe one of nature\'s most spectacular displays. Deep beneath the Earth\'s crust, a chamber of molten rock — magma — has been building pressure for centuries. The tectonic plates shift... a crack forms... and suddenly, with tremendous force, the mountain awakens!\n\nLava flows at temperatures exceeding 1,000 degrees Celsius. Ash clouds billow into the stratosphere. It\'s terrifying and beautiful in equal measure. This... is the power of a volcano.',
    },
    feedback: {
      poor: 'You didn\'t give the AI a role, so it answered in its default plain style. Try telling it to be someone specific!',
      good: 'Good! You gave the AI a role and it changed its style. Try picking a more creative or specific role to really see the difference.',
      great: 'Brilliant! The AI fully took on the persona you assigned. See how much more engaging the response is when the AI has a character to play?',
    },
  },

  L2C3: {
    id: 'L2C3',
    title: 'Say What You Need',
    task: 'Write a prompt with a super clear ask AND a specific format. Don\'t just ask a question — tell the AI exactly what to produce and how to structure it.',
    hint: 'Be specific about WHAT you want (explain, compare, list, create) AND HOW it should look (bullet points, numbered list, table, 3 paragraphs, under 100 words).',
    criteria: [
      {
        id: 'clear-ask',
        label: 'States a clear, specific request',
        test: 'containsAny',
        args: [['explain', 'compare', 'list', 'create', 'write', 'describe', 'summarize', 'analyze', 'outline', 'generate', 'give me', 'tell me', 'show me', 'help me', 'make', 'design', 'build', 'plan']],
        weight: 1,
      },
      {
        id: 'format-request',
        label: 'Requests a specific format',
        test: 'containsAny',
        args: [['bullet', 'numbered', 'list', 'table', 'paragraph', 'step', 'steps', 'chart', 'outline', 'format', 'organize', 'section', 'heading', 'column']],
        weight: 1,
      },
      {
        id: 'scope-constraint',
        label: 'Sets a length or scope constraint',
        test: 'containsAny',
        args: [['3', '5', '10', 'three', 'five', 'ten', 'short', 'brief', 'under', 'word', 'words', 'sentence', 'sentences', 'paragraph', 'paragraphs', 'minute', 'quick', 'concise', 'simple', 'detailed']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'The American Revolution was a war fought between the American colonies and Great Britain. It started because the colonists were unhappy with British rule and taxation. The war lasted from 1775 to 1783 and resulted in American independence...',
      good: 'Here are the main causes of the American Revolution:\n\n- Taxation without representation (Stamp Act, Tea Act)\n- The Boston Massacre (1770)\n- The Boston Tea Party (1773)\n- The Intolerable Acts that punished Massachusetts\n- Growing desire for self-governance\n\nThese events built up colonial frustration over several years, eventually leading to the Declaration of Independence in 1776.',
      great: '5 Key Causes of the American Revolution (in numbered list format):\n\n1. **Taxation Without Representation** - Britain taxed colonists (Stamp Act, Sugar Act) but gave them no vote in Parliament\n2. **The Boston Massacre (1770)** - British soldiers killed 5 colonists, fueling anti-British anger\n3. **The Boston Tea Party (1773)** - Colonists dumped 342 chests of tea to protest the Tea Act\n4. **The Intolerable Acts (1774)** - Britain punished Massachusetts harshly, uniting the other colonies\n5. **Desire for Self-Government** - Enlightenment ideas about liberty inspired colonists to seek independence\n\nEach cause built on the last, creating a snowball effect that led to war in 1775.',
    },
    feedback: {
      poor: 'Your prompt was too open-ended! The AI didn\'t know what format or length you wanted, so it just rambled. Try being specific about what to produce.',
      good: 'Good work! You told the AI what to create. Now try adding a format AND a number (like "5 bullet points" or "a 3-row table") for even more control.',
      great: 'Nailed it! Clear ask + specific format + scope = a perfectly structured response you can actually use!',
    },
  },

  L2C4: {
    id: 'L2C4',
    title: 'CRAFT It Together',
    task: 'Write ONE prompt that uses ALL 5 parts of the CRAFT framework: Context, Role, Ask, Format, and Tone. Put it all together!',
    hint: 'Try something like: "I\'m a 7th grader studying [topic] (Context). Act as a [role] (Role). [Specific request] (Ask) in a [format] (Format) using a [tone] tone (Tone)."',
    criteria: [
      {
        id: 'craft-context',
        label: 'Includes context (C)',
        test: 'containsAny',
        args: [['I\'m working on', 'I\'m studying', 'I\'m writing', 'for my class', 'for school', 'for a project', 'my assignment', 'I\'m preparing', 'I\'m learning', 'I need to', 'I\'m a student', 'I\'m in', 'for my']],
        weight: 1,
      },
      {
        id: 'craft-role',
        label: 'Assigns a role (R)',
        test: 'containsAny',
        args: [['act as', 'you are', 'pretend', 'be a', 'act like', 'imagine you', 'you\'re a', 'as a', 'like a']],
        weight: 1,
      },
      {
        id: 'craft-ask',
        label: 'Makes a clear ask (A)',
        test: 'containsAny',
        args: [['explain', 'create', 'write', 'list', 'describe', 'help me', 'teach me', 'show me', 'generate', 'give me', 'compare', 'summarize', 'outline', 'make']],
        weight: 1,
      },
      {
        id: 'craft-format',
        label: 'Specifies a format (F)',
        test: 'containsAny',
        args: [['bullet', 'numbered', 'list', 'table', 'paragraph', 'step', 'steps', 'outline', 'section', 'heading', 'format', 'chart', 'column', 'points']],
        weight: 1,
      },
      {
        id: 'craft-tone',
        label: 'Requests a tone (T)',
        test: 'containsAny',
        args: [['friendly', 'fun', 'funny', 'casual', 'formal', 'encouraging', 'exciting', 'simple', 'professional', 'enthusiastic', 'patient', 'cheerful', 'serious', 'playful', 'conversational', 'engaging', 'tone']],
        weight: 1,
      },
    ],
    thresholds: { good: 3, great: 5 },
    responses: {
      poor: 'The water cycle is a natural process. Water evaporates from bodies of water, forms clouds through condensation, falls as precipitation, and collects again in bodies of water. This cycle repeats continuously.',
      good: 'Hey there, future scientist! Let me break down the water cycle for you as your friendly science tutor.\n\nThe water cycle is nature\'s recycling system! Here\'s how it works:\n- Evaporation: The sun heats up water in oceans and lakes, turning it into invisible vapor\n- Condensation: That vapor rises, cools down, and forms clouds\n- Precipitation: When clouds get heavy enough, water falls as rain or snow\n- Collection: Water flows into rivers and oceans, and the whole thing starts over!',
      great: 'Hey there, fellow 7th grader! Your friendly science tutor is here to make the water cycle super easy to understand!\n\nThe Water Cycle in 4 Fun Steps:\n\n1. EVAPORATION (The Great Escape!) - The sun heats up water in oceans, lakes, and puddles. The water turns into invisible vapor and floats up into the sky. Think of it like a water jailbreak!\n\n2. CONDENSATION (Cloud Factory!) - Up high, the vapor cools down and turns into tiny water droplets that clump together to form clouds. It\'s basically the reverse of evaporation!\n\n3. PRECIPITATION (The Big Drop!) - When clouds collect too much water, they release it as rain, snow, sleet, or hail. Gravity says "come back down!"\n\n4. COLLECTION (Home Again!) - Water flows into rivers, lakes, and oceans through runoff. Then the sun heats it up again and... you guessed it... the cycle repeats!\n\nCool fact: Every drop of water on Earth has been through this cycle MILLIONS of times. You might be drinking the same water a dinosaur splashed in!',
    },
    feedback: {
      poor: 'Your prompt was missing most of the CRAFT elements. The AI gave a plain, boring response because it had no guidance. Try including all 5 parts!',
      good: 'Good effort! You included some CRAFT elements and the response improved. Try to include all 5: Context, Role, Ask, Format, AND Tone.',
      great: 'CRAFT master! You nailed all 5 elements and the AI delivered an amazing, tailored response. This is what great prompt engineering looks like!',
    },
  },
};
