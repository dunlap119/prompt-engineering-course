/**
 * Lesson 5 prompt challenges — 4 challenges on defensive prompting.
 * Strategies to get more reliable, balanced, and honest AI responses.
 */

export const lesson5Challenges = {
  L5C1: {
    id: 'L5C1',
    title: 'Show Your Sources',
    task: 'Write a prompt that asks the AI to cite its sources or explain where its information comes from. This helps you fact-check what the AI tells you!',
    hint: 'Include phrases like "cite your sources," "where did you get that information," "provide references," or "tell me where I can verify this." You can also ask it to link to real websites or name specific studies.',
    criteria: [
      {
        id: 'asks-for-sources',
        label: 'Requests sources or citations',
        test: 'containsAny',
        args: [['cite', 'source', 'sources', 'reference', 'references', 'citation', 'citations', 'where did you', 'evidence', 'verify', 'link', 'links', 'website', 'study', 'studies', 'research', 'according to', 'based on', 'credit', 'bibliography']],
        weight: 1,
      },
      {
        id: 'specific-topic',
        label: 'Asks about a specific topic',
        test: 'containsAny',
        args: [['science', 'history', 'health', 'climate', 'space', 'animal', 'technology', 'math', 'environment', 'ocean', 'planet', 'disease', 'nutrition', 'energy', 'pollution', 'medicine', 'brain', 'psychology', 'earth', 'evolution', 'weather', 'extinct', 'endangered']],
        weight: 1,
      },
      {
        id: 'fact-checking-intent',
        label: 'Shows intent to verify or fact-check',
        test: 'containsAny',
        args: [['fact-check', 'fact check', 'verify', 'make sure', 'reliable', 'accurate', 'trustworthy', 'real', 'true', 'credible', 'confirm', 'check', 'look up', 'double-check', 'double check', 'prove']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Climate change is causing temperatures to rise worldwide. The polar ice caps are melting, sea levels are rising, and extreme weather events are becoming more common. Scientists agree this is largely caused by human activities that release greenhouse gases.',
      good: 'Climate change is causing global temperatures to rise, primarily due to human-produced greenhouse gases. According to NASA and NOAA data, the global average temperature has increased by about 1.1 degrees Celsius since the late 1800s. The main sources of greenhouse gases include burning fossil fuels, deforestation, and agriculture.\n\nNote: You can verify these facts at NASA\'s climate website (climate.nasa.gov) and NOAA\'s climate page (climate.gov).',
      great: 'Here are key facts about climate change with sources you can verify:\n\n1. **Global temperature rise**: Earth\'s average temperature has risen about 1.1 degrees C since the late 1800s.\n   Source: NASA Global Climate Change (climate.nasa.gov)\n\n2. **CO2 levels**: Atmospheric CO2 is at its highest in 800,000 years (over 420 parts per million).\n   Source: NOAA Global Monitoring Lab (gml.noaa.gov)\n\n3. **Ice loss**: Greenland and Antarctica lose about 427 billion tons of ice per year.\n   Source: NASA Ice Sheet data via satellite measurements\n\n4. **Sea level rise**: Global sea level has risen about 8-9 inches since 1880.\n   Source: NOAA Sea Level Trends (tidesandcurrents.noaa.gov)\n\nIMPORTANT NOTE: I\'m an AI and my training data has a cutoff date. These figures may have been updated since I last learned. Always check the original sources for the most current data!',
    },
    feedback: {
      poor: 'The AI gave you facts with zero sources! You have no way to verify if any of this is correct. Always ask for citations so you can fact-check.',
      good: 'Nice! You asked for sources and the AI provided some. Try also asking it to be transparent about what it\'s unsure of for even more reliability.',
      great: 'Excellent defensive prompting! You got the AI to cite specific sources you can actually verify. This is how you use AI responsibly!',
    },
  },

  L5C2: {
    id: 'L5C2',
    title: 'Both Sides of the Story',
    task: 'Write a prompt that asks the AI to present multiple perspectives or viewpoints on a topic — not just one side. This helps you avoid bias in AI responses!',
    hint: 'Use phrases like "give me both sides," "show different perspectives," "what are the arguments for AND against," or "include diverse viewpoints." Pick a topic where people disagree!',
    criteria: [
      {
        id: 'asks-for-perspectives',
        label: 'Requests multiple viewpoints',
        test: 'containsAny',
        args: [['both sides', 'multiple perspectives', 'different viewpoints', 'different perspectives', 'pros and cons', 'for and against', 'arguments for', 'arguments against', 'advantages and disadvantages', 'different opinions', 'all sides', 'various viewpoints', 'diverse perspectives', 'balanced', 'unbiased', 'opposing views', 'compare viewpoints']],
        weight: 1,
      },
      {
        id: 'debatable-topic',
        label: 'Chooses a topic with multiple sides',
        test: 'containsAny',
        args: [['homework', 'school', 'phones', 'social media', 'uniform', 'uniforms', 'technology', 'internet', 'video games', 'AI', 'artificial intelligence', 'sports', 'testing', 'grading', 'screen time', 'remote learning', 'online', 'dress code', 'lunch', 'recess', 'year-round', 'college', 'zoos', 'space', 'climate', 'energy', 'cars', 'robots']],
        weight: 1,
      },
      {
        id: 'fairness-language',
        label: 'Asks for fairness or balance',
        test: 'containsAny',
        args: [['fair', 'fairly', 'balanced', 'equal', 'equally', 'neutral', 'objective', 'without bias', 'unbiased', 'each side', 'both', 'all perspectives', 'don\'t take sides', 'no bias']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Homework is important because it helps students practice what they learned in class. It reinforces learning, builds study habits, and prepares students for tests. Students who do homework regularly tend to perform better in school.',
      good: 'Here are arguments both for and against homework:\n\nFOR homework:\n- Reinforces what students learn in class\n- Builds study habits and time management skills\n- Helps teachers identify what students are struggling with\n\nAGAINST homework:\n- Can cause stress and burnout, especially with too much\n- Takes away from free time, family time, and hobbies\n- Some studies suggest it has limited benefit for younger students\n- Not all students have equal access to resources at home',
      great: 'Should Middle Schoolers Have Homework? A Balanced Look at 3 Perspectives:\n\nPERSPECTIVE 1 - "Yes, Homework Helps"\n- Practice reinforces learning (like how athletes train outside of games)\n- Builds responsibility and time management skills\n- Helps parents see what their kids are learning\n- Supported by: Some studies (like Cooper, 2006) show benefits for older students\n\nPERSPECTIVE 2 - "No, Homework Hurts"\n- Too much homework causes stress, anxiety, and sleep loss\n- Takes away time for sports, hobbies, and family\n- Creates inequality: some kids have help at home, some don\'t\n- Supported by: Research showing diminishing returns past 1-2 hours\n\nPERSPECTIVE 3 - "It Depends on the Type"\n- Meaningful practice (applying skills) helps; busywork doesn\'t\n- The amount matters: 10-minute rule (10 min per grade level) is widely recommended\n- Quality > quantity: short, focused assignments beat long worksheets\n- Supported by: Most education experts advocate for balanced approaches\n\nNOTE: This is a genuinely debated topic in education. Reasonable people disagree, and the best answer may depend on the student, the subject, and the assignment.',
    },
    feedback: {
      poor: 'The AI only gave you ONE side of the story! Without asking for multiple perspectives, you get a biased, one-sided response. Ask for different viewpoints.',
      good: 'Good! You got the AI to show both sides. Try asking for a more balanced or fair presentation to catch any subtle bias in how it frames each side.',
      great: 'Great defensive prompting! You got a balanced, multi-perspective response that lets YOU decide what to think. This is how you fight AI bias!',
    },
  },

  L5C3: {
    id: 'L5C3',
    title: 'It\'s OK to Say "I Don\'t Know"',
    task: 'Write a prompt that explicitly tells the AI to say "I don\'t know" or "I\'m not sure" when it doesn\'t have reliable information, instead of making something up.',
    hint: 'Include instructions like "If you\'re not sure, say so," "Don\'t make anything up," "Admit when you don\'t know," or "It\'s better to say you\'re unsure than to guess." Then ask about something the AI might struggle with.',
    criteria: [
      {
        id: 'honesty-instruction',
        label: 'Tells AI to admit uncertainty',
        test: 'containsAny',
        args: [['say I don\'t know', 'say you don\'t know', 'admit', 'honest', 'don\'t make up', 'don\'t guess', 'don\'t make things up', 'don\'t invent', 'don\'t fabricate', 'if you\'re not sure', 'if you don\'t know', 'if unsure', 'when unsure', 'not sure', 'I\'m not sure', 'uncertain', 'be transparent', 'be honest', 'only if you know', 'only answer if']],
        weight: 1,
      },
      {
        id: 'hallucination-prevention',
        label: 'Guards against hallucination',
        test: 'containsAny',
        args: [['make up', 'making up', 'hallucinate', 'hallucination', 'invent', 'inventing', 'fabricate', 'fake', 'false', 'incorrect', 'wrong', 'guess', 'guessing', 'accurate', 'accuracy', 'confident', 'confidence', 'reliable', 'trustworthy', 'verified']],
        weight: 1,
      },
      {
        id: 'specific-question',
        label: 'Asks a specific question',
        test: 'containsAny',
        args: [['what', 'who', 'when', 'where', 'how', 'why', 'tell me', 'explain', 'describe', 'is it true', 'give me', 'list', 'name']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'The Riverside Middle School Cougars won the state championship in 2019 with a score of 42-38 in the finals against Lincoln Academy. Their star player, Jamie Rodriguez, scored 18 points in the final quarter. The school has a long tradition of athletic excellence dating back to 1985.',
      good: 'I can share some general information about middle school basketball programs, but I should be upfront: I don\'t have specific information about Riverside Middle School\'s basketball team or their recent records. For accurate details about a specific school, I\'d recommend checking the school\'s website or contacting their athletic department directly.',
      great: 'Great question! I want to be honest with you about what I know and don\'t know:\n\nWhat I CAN tell you (general knowledge):\n- Middle school basketball seasons typically run from November to February\n- Teams usually play 15-20 games per season\n- Most states have regional and state championship tournaments\n\nWhat I DON\'T know (and won\'t guess about):\n- I don\'t have specific records for Riverside Middle School\n- I can\'t verify their championship history or player stats\n- I don\'t have current roster or coaching information\n\nWhere to find accurate info:\n- The school\'s official website or athletics page\n- Local newspaper sports sections\n- State athletic association websites\n- The school\'s front office or athletic director\n\nI\'d rather point you to the right sources than risk giving you made-up information! AI can sometimes "hallucinate" (make up facts that sound real), so for specific local information like this, real sources are always better.',
    },
    feedback: {
      poor: 'Uh oh! The AI made up a completely fake answer because you didn\'t tell it to be honest about its limits. Always instruct AI to admit when it doesn\'t know something.',
      good: 'Good! You told the AI to be honest, and it admitted its limitations instead of making things up. That\'s much better than a confident lie.',
      great: 'Perfect defensive prompting! The AI clearly labeled what it knows vs. what it doesn\'t, and pointed you to real sources. This is how you prevent AI hallucinations!',
    },
  },

  L5C4: {
    id: 'L5C4',
    title: 'Facts vs. Opinions',
    task: 'Write a prompt that tells the AI to clearly separate facts from opinions in its response. Ask it to label which statements are proven facts and which are opinions or interpretations.',
    hint: 'Try phrases like "separate facts from opinions," "label each statement as fact or opinion," "tell me which parts are proven and which are your interpretation," or "distinguish between what we know for sure and what\'s debated."',
    criteria: [
      {
        id: 'separation-request',
        label: 'Asks to separate facts from opinions',
        test: 'containsAny',
        args: [['fact and opinion', 'facts and opinions', 'fact or opinion', 'facts from opinions', 'fact vs', 'facts vs', 'separate', 'distinguish', 'label', 'which are facts', 'which are opinions', 'proven', 'objective', 'subjective', 'what we know', 'what is debated']],
        weight: 1,
      },
      {
        id: 'specific-topic',
        label: 'Asks about a specific topic',
        test: 'containsAny',
        args: [['social media', 'technology', 'school', 'sports', 'video games', 'climate', 'health', 'nutrition', 'diet', 'exercise', 'sleep', 'phones', 'internet', 'homework', 'music', 'art', 'animals', 'space', 'AI', 'science', 'history', 'education']],
        weight: 1,
      },
      {
        id: 'clarity-formatting',
        label: 'Asks for clear labeling or formatting',
        test: 'containsAny',
        args: [['label', 'mark', 'clearly', 'clearly state', 'identify', 'categorize', 'organize', 'list', 'section', 'heading', 'bold', 'separate section', 'two columns', 'table', 'bullet']],
        weight: 1,
      },
    ],
    thresholds: { good: 2, great: 3 },
    responses: {
      poor: 'Video games are a popular form of entertainment but they can be harmful. They cause addiction, reduce physical activity, and can lead to poor grades. However, some games can improve problem-solving skills and hand-eye coordination. Overall, kids should limit their screen time to stay healthy.',
      good: 'Here\'s what we know about video games and kids:\n\nFACTS:\n- The gaming industry is worth over $180 billion worldwide\n- Studies have shown that certain games can improve spatial reasoning and reaction time\n- The WHO classified "gaming disorder" as a condition in 2018\n- The average American teenager plays about 7 hours of video games per week\n\nOPINIONS:\n- Whether video games are "harmful" overall is still debated\n- The ideal amount of screen time varies by expert\n- Some believe video games are as valid an art form as movies or books',
      great: 'Video Games and Kids: Facts vs. Opinions (Clearly Labeled)\n\nPROVEN FACTS (supported by research):\n- Fact: Action games can improve visual attention and reaction time (multiple studies confirm this)\n- Fact: Excessive gaming (30+ hours/week) is associated with lower academic performance\n- Fact: The WHO recognized "gaming disorder" as a diagnosable condition in 2018\n- Fact: Many games require problem-solving, teamwork, and strategic thinking\n- Fact: The average U.S. teen spends about 7 hours per week gaming\n\nOPINIONS & INTERPRETATIONS (people disagree on these):\n- Opinion: "Video games are bad for kids" — this is too broad to be a fact; effects depend on the game type, amount, and child\n- Opinion: "Kids should only play 1 hour per day" — this is a recommendation, not a proven threshold\n- Opinion: "Violent games cause real-world violence" — research has NOT proven a direct causal link, though this is debated\n- Opinion: "Educational games are just as effective as traditional learning" — evidence is mixed\n\nWHY THIS MATTERS: When you see someone say video games are "good" or "bad," ask yourself: is that a proven fact or someone\'s opinion? The answer is almost always more complex than a simple good/bad label.\n\nNote: Research in this area is ongoing. Some "facts" today may be revised as new studies come out.',
    },
    feedback: {
      poor: 'The AI mixed facts and opinions together without labeling them! Some of those statements were opinions disguised as facts. Ask the AI to clearly separate the two.',
      good: 'Good! You got the AI to split facts and opinions. Try asking for even clearer labeling and explanations of why each is a fact vs. an opinion.',
      great: 'Outstanding! The AI clearly labeled every statement as fact or opinion and explained the difference. This is critical thinking at its best — and a key skill for evaluating any information, not just AI!',
    },
  },
};
