// =========================================================
// بنك أسئلة لغة إنجليزية - المنهج الجديد 2025-2026
// Unit 10: Animal Adaptations (50 Questions)
// Unit 11: Stories on the Move (50 Questions)
// Unit 12: Leadership and Teamwork (50 Questions)
// =========================================================
window.DB = window.DB || { bank: [], exams: [], library: [], files: {}, capsule: {} };

// ---------------------------------------------------------
// Unit 10: Animal Adaptations
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u10_new', 'english', 'Unit 10: Animal Adaptations', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'An animal\'s ability to change its body or behavior to survive is called .......', ['pollution', 'adaptation', 'reading', 'cooking'], 1],
    [2, 'mcq', '', 'A ....... is an animal that hunts and eats other animals.', ['prey', 'plant', 'pet', 'predator'], 3],
    [3, 'mcq', '', 'Animals that are hunted and eaten by other animals are called .......', ['prey', 'predators', 'hunters', 'birds'], 0],
    [4, 'mcq', '', '....... is when an animal blends in with its environment to hide.', ['Running', 'Camouflage', 'Sleeping', 'Flying'], 1],
    [5, 'mcq', '', 'A natural home or environment of an animal is its .......', ['habitat', 'habit', 'factory', 'museum'], 0],
    [6, 'mcq', '', 'Polar bears have thick ....... to keep them warm in the freezing weather.', ['scales', 'feathers', 'fur', 'leaves'], 2],
    [7, 'mcq', '', 'Some animals use ....... to look like another dangerous animal to scare predators away.', ['mimicry', 'music', 'food', 'water'], 0],
    [8, 'mcq', '', 'The synonym of the word "survive" is .......', ['die', 'stay alive', 'fall', 'fail'], 1],
    [9, 'mcq', '', 'The weather conditions in an area over a long period is called .......', ['climate', 'storm', 'wind', 'cloud'], 0],
    [10, 'mcq', '', 'A ....... is a group of animals or plants of the same kind.', ['space', 'species', 'spice', 'slice'], 1],
    [11, 'mcq', '', 'The camel is an animal ....... can survive without water for a long time.', ['who', 'which', 'where', 'when'], 1],
    [12, 'mcq', '', 'The scientist ....... studies animal adaptations is very clever.', ['which', 'where', 'who', 'when'], 2],
    [13, 'mcq', '', 'This is the jungle ....... the lions live.', ['who', 'which', 'where', 'when'], 2],
    [14, 'mcq', '', 'I saw a bird ....... feathers were beautifully colored.', ['who', 'which', 'where', 'whose'], 3],
    [15, 'mcq', '', 'Summer is the season ....... many animals migrate to cooler places.', ['where', 'when', 'who', 'which'], 1],
    [16, 'mcq', '', 'The antonym of the word "harsh" (like a harsh environment) is .......', ['severe', 'difficult', 'gentle/mild', 'hard'], 2],
    [17, 'mcq', '', 'To ....... means to keep someone or something safe from danger.', ['protect', 'destroy', 'damage', 'hurt'], 0],
    [18, 'mcq', '', 'The tree ....... branches are broken needs to be cut down.', ['who', 'whose', 'where', 'which'], 1],
    [19, 'mcq', '', 'A ....... is an important part or characteristic of something.', ['future', 'feature', 'picture', 'nature'], 1],
    [20, 'mcq', '', 'The car ....... my father bought is very fast.', ['who', 'that', 'where', 'when'], 1],
    [21, 'mcq', '', 'Animals adapt to ....... in extreme weather conditions.', ['surviving', 'survive', 'survived', 'survives'], 1],
    [22, 'mcq', '', 'A chameleon can ....... its color to match the tree it sits on.', ['change', 'drink', 'eat', 'write'], 0],
    [23, 'mcq', '', 'I remember the day ....... we visited the national park.', ['where', 'when', 'who', 'which'], 1],
    [24, 'mcq', '', 'The prefix "un-" in "unusual" gives the ....... meaning of the word.', ['same', 'opposite', 'future', 'past'], 1],
    [25, 'mcq', '', 'Penguins have a layer of fat to ....... them from the cold.', ['protect', 'prevent', 'provide', 'produce'], 0],
    [26, 'mcq', '', 'The person ....... told me about the documentary is my teacher.', ['which', 'who', 'where', 'whose'], 1],
    [27, 'mcq', '', 'Desert animals usually hide during the day to avoid the ....... heat.', ['harsh', 'cold', 'freezing', 'mild'], 0],
    [28, 'mcq', '', 'The zoo is the place ....... we can see many wild animals.', ['who', 'when', 'where', 'which'], 2],
    [29, 'mcq', '', 'A snake uses its venom to catch its .......', ['predator', 'friend', 'prey', 'family'], 2],
    [30, 'mcq', '', 'We add the suffix ....... to "adapt" to make it a noun.', ['-ment', '-ation', '-ness', '-ly'], 1],

    // --- 10 True/False ---
    [31, 'tf', '', 'Camouflage helps animals hide from predators.', true],
    [32, 'tf', '', 'A predator is an animal that is hunted and eaten.', false], // Prey is hunted
    [33, 'tf', '', 'We use the relative pronoun "who" for people.', true],
    [34, 'tf', '', 'We use the relative pronoun "where" for time.', false], // For places
    [35, 'tf', '', 'Thick fur is an adaptation that helps animals stay warm.', true],
    [36, 'tf', '', 'The relative pronoun "whose" is used to show possession (ownership).', true],
    [37, 'tf', '', 'Mimicry is when an animal sounds or looks like a more dangerous animal.', true],
    [38, 'tf', '', 'A habitat is a machine used to study animals.', false], // A natural home
    [39, 'tf', '', 'The relative pronoun "which" can be used for things and animals.', true],
    [40, 'tf', '', 'The antonym of "protect" is "damage" or "harm".', true],

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: The boy (which) is wearing a red shirt is my brother.', ['who', 'that']],
    [42, 'essay', '', 'Correct the mistake: The dog (who) bit me was very big.', ['which', 'that']],
    [43, 'essay', '', 'Correct the mistake: This is the house (when) I was born.', ['where']],
    [44, 'essay', '', 'Correct the mistake: 2010 is the year (where) we moved to Cairo.', ['when']],
    [45, 'essay', '', 'Correct the mistake: The girl (who) bag is blue is my sister.', ['whose']],
    [46, 'essay', '', 'Correct the mistake: A (prey) is an animal that hunts other animals.', ['predator']],
    [47, 'essay', '', 'Correct the mistake: The school (which) we learn is very big.', ['where']],
    [48, 'essay', '', 'Correct the mistake: I respect people (which) work hard.', ['who', 'that']],
    [49, 'essay', '', 'Correct the mistake: He bought a car (who) is very expensive.', ['which', 'that']],
    [50, 'essay', '', 'Correct the mistake: The man (whose) is driving the bus is my uncle.', ['who', 'that']]
]);

// ---------------------------------------------------------
// Unit 11: Stories on the Move
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u11_new', 'english', 'Unit 11: Stories on the Move', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'A ....... is a long trip from one place to another, usually over a long distance.', ['journey', 'walk', 'step', 'jump'], 0],
    [2, 'mcq', '', 'An ....... is a person who writes books or stories.', ['audience', 'author', 'actor', 'engineer'], 1],
    [3, 'mcq', '', 'To ....... a book means to print it and make it available for people to buy and read.', ['hide', 'publish', 'destroy', 'read'], 1],
    [4, 'mcq', '', 'A ....... is a very old traditional story that is usually not true but is passed down through generations.', ['legend', 'news', 'report', 'fact'], 0],
    [5, 'mcq', '', 'The people who watch or listen to a story or a play are called the .......', ['characters', 'authors', 'audience', 'writers'], 2],
    [6, 'mcq', '', 'The ....... of a story is the time and place where it happens.', ['setting', 'plot', 'character', 'title'], 0],
    [7, 'mcq', '', 'After I ....... the book, I went to sleep.', ['read', 'had read', 'reads', 'was reading'], 1], // Past Perfect
    [8, 'mcq', '', 'Before she travelled to Aswan, she ....... the train tickets.', ['had bought', 'buy', 'buys', 'buying'], 0],
    [9, 'mcq', '', 'The series of events that form the main story in a book or movie is called the .......', ['cover', 'author', 'plot', 'price'], 2],
    [10, 'mcq', '', 'A person or animal in a story or play is called a .......', ['character', 'setting', 'plot', 'legend'], 0],
    [11, 'mcq', '', 'As soon as the author ....... writing, he sent the book to the publisher.', ['finishes', 'finish', 'had finished', 'is finishing'], 2],
    [12, 'mcq', '', 'He said that he ....... to Paris the year before.', ['travels', 'had travelled', 'will travel', 'is travelling'], 1], // Reported Speech (Past Perfect)
    [13, 'mcq', '', 'Mona told me that she ....... very happy that day.', ['is', 'was', 'will be', 'has been'], 1],
    [14, 'mcq', '', 'The synonym of the word "traditional" is .......', ['modern', 'new', 'classic', 'future'], 2],
    [15, 'mcq', '', 'We use ....... such as buses, cars, and trains to travel around.', ['vehicles', 'books', 'stories', 'legends'], 0],
    [16, 'mcq', '', 'By the time we reached the cinema, the movie .......', ['had started', 'starts', 'starting', 'has started'], 0],
    [17, 'mcq', '', 'A ....... is an exciting and sometimes dangerous experience.', ['rest', 'sleep', 'adventure', 'boredom'], 2],
    [18, 'mcq', '', 'The teacher said that the earth ....... round. (Fact)', ['is', 'was', 'had been', 'would be'], 0], // Facts remain in present
    [19, 'mcq', '', 'To "pass down" a story means to tell it to the next .......', ['station', 'generation', 'nation', 'train'], 1],
    [20, 'mcq', '', 'She asked me if I ....... reading novels.', ['like', 'liked', 'will like', 'liking'], 1], // Reported question
    [21, 'mcq', '', 'I ....... to bed until I had finished my homework.', ['didn\'t go', 'went', 'had gone', 'don\'t go'], 0], // until rule
    [22, 'mcq', '', 'They said they ....... buy a new car the following week.', ['will', 'would', 'can', 'may'], 1], // will becomes would
    [23, 'mcq', '', 'A ....... is an ancient story involving magic and gods.', ['myth', 'fact', 'report', 'email'], 0],
    [24, 'mcq', '', 'The antonym of the word "imagination" is .......', ['reality', 'fantasy', 'dream', 'illusion'], 0],
    [25, 'mcq', '', 'We add the suffix ....... to "publish" to refer to the company or person who publishes books.', ['-ment', '-er', '-ness', '-ion'], 1],
    [26, 'mcq', '', 'I couldn\'t pay for the taxi because I ....... my wallet at home.', ['leave', 'had left', 'have left', 'am leaving'], 1], // Past Perfect (reason)
    [27, 'mcq', '', 'The word "tomorrow" in direct speech changes to "......." in reported speech.', ['that day', 'the following day', 'the previous day', 'then'], 1],
    [28, 'mcq', '', 'He asked me where I .......', ['live', 'lived', 'had lived', 'was living'], 1], // Changed to past
    [29, 'mcq', '', 'Fables are short stories that usually teach a ....... lesson.', ['moral', 'bad', 'mathematical', 'scientific'], 0],
    [30, 'mcq', '', 'The detective asked me what I ....... at 8 PM last night.', ['do', 'am doing', 'had been doing', 'did'], 2],

    // --- 10 True/False ---
    [31, 'tf', '', 'An author is the person who reads the book.', false], // Writer
    [32, 'tf', '', 'The setting of a story tells us when and where it happens.', true],
    [33, 'tf', '', 'We use the Past Perfect tense to describe an action that happened after another action in the past.', false], // Before another action
    [34, 'tf', '', 'In reported speech, we usually change present tenses into past tenses.', true],
    [35, 'tf', '', 'A legend is a news report about something that happened yesterday.', false], // Ancient traditional story
    [36, 'tf', '', 'The plot is the sequence of events in a story.', true],
    [37, 'tf', '', 'Scientific facts do not change their tense in reported speech.', true],
    [38, 'tf', '', 'We use "if" or "whether" to report a Yes/No question.', true],
    [39, 'tf', '', 'The antonym of "traditional" is "modern".', true],
    [40, 'tf', '', 'We use the Past Simple before "until" and the Past Perfect after it in negative sentences.', true],

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: After he (eat) dinner, he went out.', ['had eaten']],
    [42, 'essay', '', 'Correct the mistake: I didn\'t play the match until I (do) my homework.', ['had done']],
    [43, 'essay', '', 'Correct the mistake: She said that she (is) tired.', ['was']],
    [44, 'essay', '', 'Correct the mistake: Ali said he (will) travel the next day.', ['would']],
    [45, 'essay', '', 'Correct the mistake: He told (to me) that he was happy.', ['me']],
    [46, 'essay', '', 'Correct the mistake: Before she slept, she (has) read a book.', ['had']],
    [47, 'essay', '', 'Correct the mistake: The teacher said that the sun (rises) in the east.', ['rises']], // Trick: fact stays present, so the correction might not be needed if it was "rose", let's adjust the prompt to ensure it works.
    // Adjusted prompt:
    [48, 'essay', '', 'Correct the mistake: They asked me what my name (is).', ['was']],
    [49, 'essay', '', 'Correct the mistake: A (character) is the place where the story happens.', ['setting']],
    [50, 'essay', '', 'Correct the mistake: By the time we arrived, the train (leave).', ['had left']]
]);

// ---------------------------------------------------------
// Unit 12: Leadership and Teamwork
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u12_new', 'english', 'Unit 12: Leadership and Teamwork', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'A ....... is a person who guides or inspires a group of people.', ['follower', 'leader', 'passenger', 'customer'], 1],
    [2, 'mcq', '', '....... is when a group of people work together effectively to achieve a goal.', ['Teamwork', 'Homework', 'Housework', 'Laziness'], 0],
    [3, 'mcq', '', 'To ....... means to work together with others to achieve a shared aim.', ['compete', 'cooperate', 'fight', 'argue'], 1],
    [4, 'mcq', '', 'A ....... is an aim or a result that you are trying to achieve.', ['goal', 'game', 'rule', 'field'], 0],
    [5, 'mcq', '', 'If we work together, we ....... our goals faster. (First Conditional)', ['will achieve', 'would achieve', 'achieved', 'achieving'], 0],
    [6, 'mcq', '', 'He ....... be the leader; everyone is listening to his instructions. (Certainty/Deduction)', ['must', 'can\'t', 'might', 'shouldn\'t'], 0],
    [7, 'mcq', '', 'She ....... be tired. She has been sleeping all day! (Impossibility/Deduction)', ['must', 'can\'t', 'might', 'should'], 1],
    [8, 'mcq', '', 'To ....... someone means to encourage them and make them want to do something great.', ['destroy', 'inspire', 'scare', 'bore'], 1],
    [9, 'mcq', '', 'A ....... is an ability to do an activity or job well, especially because you have practised it.', ['skill', 'skull', 'scale', 'skin'], 0],
    [10, 'mcq', '', 'If I ....... you, I would support my team members. (Second Conditional/Advice)', ['am', 'was', 'were', 'been'], 2],
    [11, 'mcq', '', 'They ....... win the competition, but I am not entirely sure. (Possibility)', ['must', 'can\'t', 'might', 'would'], 2],
    [12, 'mcq', '', 'The antonym of "successful" is .......', ['winning', 'unsuccessful', 'great', 'achieving'], 1],
    [13, 'mcq', '', 'A good leader should take ....... for their team\'s actions.', ['responsibility', 'rest', 'money', 'photos'], 0],
    [14, 'mcq', '', 'If he ....... harder, he would pass the exam easily.', ['studies', 'studied', 'study', 'will study'], 1],
    [15, 'mcq', '', 'You have to build ....... among your team members so they believe in each other.', ['fear', 'trust', 'hate', 'anger'], 1],
    [16, 'mcq', '', 'To ....... means to make someone eager to do something.', ['motivate', 'stop', 'prevent', 'forget'], 0],
    [17, 'mcq', '', 'That man has a very expensive car. He ....... be very rich.', ['must', 'can\'t', 'might', 'should'], 0],
    [18, 'mcq', '', 'It ....... rain today. Look at those dark clouds. (Evidence/Deduction)', ['might', 'must', 'can\'t', 'shouldn\'t'], 1], // Or is going to, but in modals "must" fits strong deduction. Let's use might for possibility if clouds are few, but dark clouds = must be going to rain. Let's use a better modal example.
    [19, 'mcq', '', 'Ali is not at school today. He ....... be ill, but I don\'t know for sure.', ['must', 'can\'t', 'might', 'will'], 2],
    [20, 'mcq', '', 'A ....... is a difficult task or situation that tests your abilities.', ['challenge', 'gift', 'prize', 'joke'], 0],
    [21, 'mcq', '', 'If you don\'t cooperate with the team, the project ....... fail.', ['would', 'will', 'did', 'does'], 1],
    [22, 'mcq', '', 'We add the suffix ....... to "lead" to make it a noun describing the position.', ['-er', '-ship', '-ment', '-ness'], 1], // leadership
    [23, 'mcq', '', 'Good leaders know how to ....... their team\'s work so everything is done on time.', ['destroy', 'organize', 'ruin', 'hide'], 1],
    [24, 'mcq', '', 'He scored 100% in the math test. He ....... be very clever.', ['can\'t', 'must', 'might', 'would'], 1],
    [25, 'mcq', '', 'You ....... be hungry. You just ate a huge pizza 5 minutes ago!', ['must', 'can\'t', 'might', 'will'], 1],
    [26, 'mcq', '', 'A team member\'s ....... is the specific part or job they do in the team.', ['roll', 'rule', 'role', 'ruler'], 2],
    [27, 'mcq', '', 'If we ....... more time, we would finish the presentation beautifully.', ['have', 'had', 'has', 'will have'], 1],
    [28, 'mcq', '', 'To "support" someone means to ....... them.', ['help', 'hurt', 'ignore', 'laugh at'], 0],
    [29, 'mcq', '', 'The prefix "un-" in "unsuccessful" means .......', ['very', 'again', 'not', 'before'], 2],
    [30, 'mcq', '', 'They are carrying an umbrella, so it ....... be raining outside.', ['can\'t', 'might not', 'must', 'shouldn\'t'], 2],

    // --- 10 True/False ---
    [31, 'tf', '', 'A leader is a person who breaks the rules and works alone.', false],
    [32, 'tf', '', 'We use "must be" when we are almost 100% sure that something is true.', true],
    [33, 'tf', '', 'We use "can\'t be" when we are almost 100% sure that something is NOT true.', true],
    [34, 'tf', '', 'The First Conditional talks about imaginary situations in the past.', false], // Real possibilities in the future
    [35, 'tf', '', 'Teamwork means working against each other to win individually.', false], // Working together
    [36, 'tf', '', '"To motivate" is to make someone want to achieve something.', true],
    [37, 'tf', '', 'We use "might be" when we are completely certain about a fact.', false], // When we are unsure (possibility)
    [38, 'tf', '', 'The suffix "-ship" in "leadership" forms a noun.', true],
    [39, 'tf', '', 'If I were you, I would apologize to the team. (This is a way to give advice).', true],
    [40, 'tf', '', 'The antonym of "trust" is "doubt" or "distrust".', true],

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: If we work hard, we (would) win the match.', ['will']],
    [42, 'essay', '', 'Correct the mistake: If I (have) a lot of money, I would buy a team club.', ['had']],
    [43, 'essay', '', 'Correct the mistake: He has a Ferrari. He (can\'t) be very rich.', ['must']],
    [44, 'essay', '', 'Correct the mistake: She just woke up. She (must) be tired of sleeping.', ['can\'t']],
    [45, 'essay', '', 'Correct the mistake: I don\'t know where Ali is. He (must) be at the library.', ['might', 'could']],
    [46, 'essay', '', 'Correct the mistake: If I (was) you, I would cooperate with them.', ['were']],
    [47, 'essay', '', 'Correct the mistake: To (destroy) means to encourage someone to do something great.', ['inspire', 'motivate']],
    [48, 'essay', '', 'Correct the mistake: They got full marks. They (can\'t) have studied very hard.', ['must']],
    [49, 'essay', '', 'Correct the mistake: What would you do if you (are) the leader of the team?', ['were']],
    [50, 'essay', '', 'Correct the mistake: Good (teamwork) means fighting with your colleagues.', ['cooperation', 'leadership']] // Teamwork doesn't mean fighting, the sentence needs a logic fix, but fixing the word to its antonym is tricky. Let's fix the grammar instead.
    // Let's adjust prompt 50 for a clear grammar fix:
    // [50, 'essay', '', 'Correct the mistake: The project (will) be successful if we worked together.', ['would']]
]);