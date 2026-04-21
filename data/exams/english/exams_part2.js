/**
 * منصة الطالب - مادة اللغة الإنجليزية (الصف الثالث الإعدادي - الترم الثاني)
 * الدفعة الثانية: الاختبارات الصعبة (150 سؤال)
 * المنهج الجديد + قصة 20,000 Leagues Under the Sea
 */

// =========================================================================
// أولاً: اختبارات المنهج (Units 7 to 12) - المستوى المتقدم
// =========================================================================

// الاختبار السابع: الوحدتان 7 و 8 (Sports & Cultures) - صعب
window.addExam(
    { id: 'eng_u7_8_hard', subject: 'انجليزي', title: 'Units 7 & 8: Sports & Cultures (Hard)', order: 7 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'The new rules ...... by the referee before the match started yesterday.', ['are explained', 'were explaining', 'were explained', 'explained'], 2],
        ['mcq', 45, 'He is used to ...... early every morning. It is his habit now.', ['waking up', 'wake up', 'woke up', 'wakes up'], 0], // Trick: be used to + v-ing
        ['mcq', 45, 'The ruins of the ancient city are considered a site of great cultural ......', ['equipment', 'tournament', 'heritage', 'customs'], 2],
        ['mcq', 45, 'A lot of money ...... spent on building the new stadium last year.', ['were', 'was', 'are', 'is'], 1], // Trick: money is uncountable
        ['mcq', 45, 'We didn\'t ...... to have a computer when we were young.', ['used', 'uses', 'use', 'using'], 2],
        ['mcq', 45, 'If you want to play tennis well, you need to buy expensive ......', ['equipments', 'tools', 'equipment', 'machines'], 2], // Trick: equipment is uncountable
        ['mcq', 45, 'The winner of the tournament ...... a gold medal by the president.', ['gave', 'was giving', 'has given', 'was given'], 3],
        ['mcq', 45, 'Which of these sentences is correct?', ['Did you used to play tennis?', 'Did you use to play tennis?', 'Do you used to play tennis?', 'Did you use playing tennis?'], 1],
        ['mcq', 45, 'A national ...... is something that all people in a country traditionally do.', ['costume', 'habit', 'custom', 'action'], 2],
        ['mcq', 45, 'The Olympic Games ...... every four years.', ['hold', 'are held', 'were held', 'are holding'], 1],
        ['mcq', 45, 'Before the internet was invented, people ...... write letters to communicate.', ['are used to', 'used to', 'use to', 'were used to'], 1],
        ['mcq', 45, 'Look at those dark clouds! It ...... rain.', ['is going to', 'will', 'must', 'might'], 0], // Grammar trick: prediction with evidence
        ['mcq', 45, 'The famous painting ...... from the museum last night.', ['stole', 'is stolen', 'was stealing', 'was stolen'], 3],
        ['mcq', 45, 'Athletes must train hard to compete in international ......', ['heritages', 'tournaments', 'customs', 'referees'], 1],
        ['mcq', 45, 'My brother ...... like fish, but now it\'s his favourite food.', ['didn\'t use to', 'used to', 'doesn\'t use to', 'wasn\'t used to'], 0],
        // 5 T/F (30 ثانية)
        ['tf', 30, 'The word "habit" is usually used for a society, while "custom" is for a person.', false], // العكس
        ['tf', 30, 'We use "was / were + past participle" to form the past simple passive.', true],
        ['tf', 30, 'The word "equipment" can take an "s" in the plural form.', false],
        ['tf', 30, '"Did you use to...?" is the correct question form for past habits.', true],
        ['tf', 30, 'A referee is someone who watches the game from the stadium seats.', false],
        // 5 Essay (60 ثانية)
        ['essay', 60, 'Change into passive: "The mechanic repaired the car."', 'The car was repaired by the mechanic'],
        ['essay', 60, 'What is the noun for a person who competes in sports?', 'Athlete'],
        ['essay', 60, 'Correct the mistake: "Information about the match were useful."', 'was useful'],
        ['essay', 60, 'What do we call the traditional clothes of a specific country?', 'National costume'],
        ['essay', 60, 'Correct the mistake: "She didn\'t used to eat vegetables."', 'use to']
    ]
);

// الاختبار الثامن: الوحدتان 9 و 10 (Courage & Adaptations) - صعب
window.addExam(
    { id: 'eng_u9_10_hard', subject: 'انجليزي', title: 'Units 9 & 10: Courage & Adaptations (Hard)', order: 8 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'I couldn\'t call him because I ...... my phone at home.', ['have left', 'was leaving', 'left', 'had left'], 3],
        ['mcq', 45, 'If I ...... you, I would see a doctor immediately.', ['am', 'was', 'were', 'had been'], 2], // Trick: If I were you
        ['mcq', 45, 'By the time we arrived at the cinema, the film ......', ['has started', 'started', 'had started', 'would start'], 2],
        ['mcq', 45, 'The chameleon\'s ability to change colour is a remarkable ...... to hide from enemies.', ['shelter', 'adaptation', 'courage', 'emergency'], 1],
        ['mcq', 45, 'He would travel the world if he ...... a millionaire.', ['is', 'were', 'has been', 'had been'], 1],
        ['mcq', 45, 'It was extremely brave of him to rescue the child. He showed great ......', ['fear', 'danger', 'courage', 'habitat'], 2],
        ['mcq', 45, 'After the storm ......, we went out to check the damage.', ['had stopped', 'has stopped', 'stops', 'would stop'], 0],
        ['mcq', 45, 'Animals that live in the desert must find ways to ...... in extreme heat.', ['survive', 'die', 'escape', 'destroy'], 0],
        ['mcq', 45, 'If she had a lot of free time, she ...... learn a new language.', ['will', 'can', 'would', 'must'], 2],
        ['mcq', 45, 'The police caught the thief after he ...... the bank.', ['robs', 'robbed', 'had robbed', 'has robbed'], 2],
        ['mcq', 45, 'Many animals lose their homes when their natural ...... are destroyed by humans.', ['adaptations', 'habitats', 'courage', 'emergencies'], 1],
        ['mcq', 45, 'I didn\'t go to the park until I ...... my chores.', ['finish', 'finished', 'had finished', 'have finished'], 2], // Trick: until + past perfect
        ['mcq', 45, 'In an ......, you should call the police or an ambulance immediately.', ['adaptation', 'emergency', 'habitat', 'shelter'], 1],
        ['mcq', 45, 'What ...... if you found a wallet in the street?', ['will you do', 'did you do', 'would you do', 'have you done'], 2],
        ['mcq', 45, 'They ...... eating by the time their guests arrived.', ['had finished', 'finished', 'have finished', 'are finishing'], 0],
        // 5 T/F (30 ثانية)
        ['tf', 30, 'We use the past perfect tense to describe the second action in the past.', false], // First action
        ['tf', 30, 'In the second conditional, we can use "were" with all pronouns (I, he, she, it).', true],
        ['tf', 30, 'A habitat is the way an animal changes its body to survive.', false], // That's adaptation
        ['tf', 30, 'The word "courage" is a synonym for bravery.', true],
        ['tf', 30, 'After "by the time", we usually use the past perfect tense directly.', false], // Past simple
        // 5 Essay (60 ثانية)
        ['essay', 60, 'Correct the mistake: "If he works hard, he would succeed."', 'If he worked hard'],
        ['essay', 60, 'What word describes the natural environment where an animal lives?', 'Habitat'],
        ['essay', 60, 'Complete: He refused to eat until he (wash) his hands.', 'had washed'],
        ['essay', 60, 'What is the noun form of the adjective "brave"?', 'Bravery or Courage'],
        ['essay', 60, 'Correct the mistake: "After he finishes his work, he went to bed."', 'had finished']
    ]
);

// الاختبار التاسع: الوحدتان 11 و 12 (Stories & Leadership) - صعب
window.addExam(
    { id: 'eng_u11_12_hard', subject: 'انجليزي', title: 'Units 11 & 12: Stories & Leadership (Hard)', order: 9 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'He said that he ...... a new car the previous day.', ['bought', 'has bought', 'had bought', 'buys'], 2], // previous day = past perfect
        ['mcq', 45, 'The girl ...... father is a doctor is my best friend.', ['who', 'whom', 'whose', 'which'], 2],
        ['mcq', 45, 'You ...... have seen Ahmed yesterday. He is currently in Paris!', ['must', 'might', 'can\'t', 'should'], 2], // Trick: impossibility in the past
        ['mcq', 45, 'A great leader knows how to ...... his team to achieve their best.', ['punish', 'inspire', 'destroy', 'ignore'], 1],
        ['mcq', 45, 'The teacher told us that the earth ...... around the sun.', ['goes', 'went', 'had gone', 'is going'], 0], // Trick: scientific fact doesn't change tense
        ['mcq', 45, 'This is the restaurant ...... we had dinner last week.', ['which', 'where', 'when', 'whose'], 1],
        ['mcq', 45, 'The street was wet this morning. It ...... have rained last night.', ['can\'t', 'must', 'might not', 'should'], 1],
        ['mcq', 45, 'Greek ...... are full of stories about gods, monsters, and heroes.', ['facts', 'myths', 'transport', 'teamwork'], 1],
        ['mcq', 45, 'She asked me if I ...... help her with the project.', ['can', 'could', 'will', 'may'], 1],
        ['mcq', 45, 'Good ...... means working efficiently with others to reach a common goal.', ['leadership', 'teamwork', 'legend', 'myth'], 1],
        ['mcq', 45, 'Alexandria is the city ...... I was born.', ['which', 'that', 'where', 'who'], 2],
        ['mcq', 45, 'He got the highest mark in the difficult test. He ...... have studied very hard.', ['must', 'can\'t', 'might not', 'won\'t'], 0],
        ['mcq', 45, 'A ...... is an ancient story about real people who did brave things, though it may be exaggerated.', ['fact', 'legend', 'news', 'transport'], 1],
        ['mcq', 45, 'Mona said she was watching TV ......', ['now', 'then', 'tomorrow', 'today'], 1], // now changes to then
        ['mcq', 45, 'The man to ...... I was talking is the new manager.', ['who', 'whose', 'whom', 'which'], 2], // Preposition + whom
        // 5 T/F (30 ثانية)
        ['tf', 30, 'We must always change the tense of the verb when reporting a scientific fact.', false],
        ['tf', 30, 'We use "can\'t have + PP" to express strong disbelief about something in the past.', true],
        ['tf', 30, '"Whose" can be used for both people and things to show possession.', true],
        ['tf', 30, 'A myth is a story that is 100% historically accurate and true.', false],
        ['tf', 30, 'In reported speech, "tomorrow" changes to "the previous day".', false], // the next day
        // 5 Essay (60 ثانية)
        ['essay', 60, 'Change to reported speech: He said, "I will travel tomorrow."', 'He said that he would travel the next day'],
        ['essay', 60, 'What word means to give someone the confidence to do something great?', 'Inspire'],
        ['essay', 60, 'Correct the mistake: "This is the house which I live."', 'where I live'],
        ['essay', 60, 'Deduce the past: Ali was absent. He was sick. (must)', 'He must have been sick'],
        ['essay', 60, 'What is an old story about brave historical figures called?', 'A legend']
    ]
);

// =========================================================================
// ثانياً: اختبارات القصة (20,000 Leagues Under the Sea) - المستوى المتقدم
// =========================================================================

// الاختبار العاشر: القصة - الفصول 1 و 2 (صعب)
window.addExam(
    { id: 'eng_story_1_2_hard', subject: 'انجليزي', title: 'Story (Ch 1 & 2): The Mystery (Hard)', order: 10 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'Why were sailors in the 19th century terrified?', ['Because of fierce pirates', 'Because a mysterious monster was smashing ships', 'Because of a deadly storm', 'Because the ocean was drying up'], 1],
        ['mcq', 45, 'What did Professor Aronnax initially believe the "monster" was?', ['A giant narwhal (whale)', 'A submarine', 'An underwater volcano', 'A moving island'], 0],
        ['mcq', 45, 'What was the specific mission of the warship "Abraham Lincoln"?', ['To map the ocean floor', 'To transport gold', 'To hunt and destroy the sea monster', 'To rescue a lost ship'], 2],
        ['mcq', 45, 'When Ned Land threw his harpoon at the creature, what happened?', ['It pierced the creature\'s skin', 'It bounced off a hard, metallic surface', 'The creature ate the harpoon', 'The creature bled heavily'], 1],
        ['mcq', 45, 'How did Conseil show his extreme loyalty to Professor Aronnax?', ['He gave him money', 'He jumped into the deadly ocean to save him', 'He fought Captain Nemo', 'He built a raft'], 1],
        ['mcq', 45, 'What shocked the three men when they climbed onto the "monster"?', ['It was covered in scales', 'It was made of smooth, hard metal', 'It was extremely hot', 'It was invisible'], 1],
        ['mcq', 45, 'How did Captain Nemo treat the three men when they first met?', ['He welcomed them warmly', 'He threw them back into the sea', 'He told them they were his prisoners forever', 'He gave them control of the ship'], 2],
        ['mcq', 45, 'What power source did Captain Nemo use to run the Nautilus?', ['Coal', 'Steam', 'Electricity generated from the sea', 'Wind'], 2],
        ['mcq', 45, 'What was Ned Land\'s main obsession after being captured?', ['Learning about the ocean', 'Finding treasure', 'Planning an escape', 'Becoming Nemo\'s friend'], 2],
        ['mcq', 45, 'Why was Aronnax conflicted about being a prisoner on the Nautilus?', ['He hated Nemo but loved the food', 'He missed his family but liked the submarine', 'He wanted his freedom but was amazed by the scientific discoveries', 'He was afraid of the dark'], 2],
        ['mcq', 45, 'Before discovering it was a submarine, the public thought the monster might be a...', ['Moving reef or island', 'Giant shark', 'Mermaid', 'Sunken city'], 0],
        ['mcq', 45, 'Captain Nemo told Aronnax that he had completely separated himself from...', ['The ocean', 'Science', 'Human society and its laws', 'His crew'], 2],
        ['mcq', 45, 'The inside of the Nautilus was surprisingly...', ['Dirty and small', 'Luxurious, with a library and museum', 'Empty and cold', 'Full of cages'], 1],
        ['mcq', 45, 'What did the crew of the Nautilus speak?', ['French', 'English', 'A strange, unknown language', 'Spanish'], 2],
        ['mcq', 45, 'Ned Land was angry mainly because he was a man who loved...', ['Money', 'Reading', 'Freedom and hunting', 'Sleeping'], 2],
        // 5 T/F (30 ثانية)
        ['tf', 30, 'Professor Aronnax knew from the beginning that the monster was a machine.', false],
        ['tf', 30, 'The Abraham Lincoln was sunk completely and everyone died except the three men.', false], // It was damaged, not completely sunk
        ['tf', 30, 'Captain Nemo was a man who hated the laws of the surface world.', true],
        ['tf', 30, 'Ned Land accepted his fate quickly and enjoyed the submarine.', false],
        ['tf', 30, 'The Nautilus generated its own electricity using resources from the ocean.', true],
        // 5 Essay (60 ثانية)
        ['essay', 60, 'Why did the warship "Abraham Lincoln" go into the ocean?', 'To hunt and destroy the mysterious sea monster'],
        ['essay', 60, 'What was the "monster" actually made of?', 'Hard metal (it was a submarine)'],
        ['essay', 60, 'Why did Aronnax want to stay on the Nautilus despite being a prisoner?', 'He was fascinated by the scientific discoveries of the ocean'],
        ['essay', 60, 'What power ran the Nautilus?', 'Electricity'],
        ['essay', 60, 'How did Ned Land react to being a prisoner?', 'He was very angry and constantly planned to escape']
    ]
);

// الاختبار الحادي عشر: القصة - الفصول 3 و 4 (صعب)
window.addExam(
    { id: 'eng_story_3_4_hard', subject: 'انجليزي', title: 'Story (Ch 3 & 4): Underwater Wonders (Hard)', order: 11 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'Why were the diving suits Captain Nemo provided special?', ['They were invisible', 'They had tanks providing compressed air for breathing', 'They could fly', 'They were made of gold'], 1],
        ['mcq', 45, 'In the underwater forest, what was unusual about the plants?', ['They were red', 'They grew straight up and didn\'t bend', 'They ate fish', 'They were made of plastic'], 1],
        ['mcq', 45, 'What was Captain Nemo hiding in the underwater cave?', ['A treasure chest', 'A giant oyster containing a massive pearl', 'A captive mermaid', 'A secret weapon'], 1],
        ['mcq', 45, 'Why didn\'t Captain Nemo take the giant pearl?', ['It was too heavy', 'He wanted it to grow even larger', 'It was protected by a shark', 'He hated pearls'], 1],
        ['mcq', 45, 'During the pearl diver incident, Captain Nemo showed that he...', ['Hated all humans', 'Was a coward', 'Still had compassion for poor, oppressed people', 'Only cared about wealth'], 2],
        ['mcq', 45, 'How did the Nautilus travel from the Red Sea to the Mediterranean?', ['By flying over land', 'By sailing around Africa', 'Through a secret, undiscovered underwater tunnel', 'By breaking the land'], 2],
        ['mcq', 45, 'The discovery of the underwater tunnel proved that Captain Nemo...', ['Was a magician', 'Knew more about the ocean than any human scientist', 'Was a pirate', 'Wanted to destroy the world'], 1],
        ['mcq', 45, 'What was the significance of the ruined city the Nautilus visited?', ['It was Nemo\'s hometown', 'It was the legendary sunken city of Atlantis', 'It was a modern underwater base', 'It was full of monsters'], 1],
        ['mcq', 45, 'Where did Captain Nemo get his immense wealth?', ['From a bank', 'From his family', 'From the wreckage of sunken ships on the ocean floor', 'By selling fish'], 2],
        ['mcq', 45, 'What did Captain Nemo do with the gold he collected?', ['He kept it for himself', 'He sent it to support oppressed people fighting for freedom', 'He threw it into volcanos', 'He built a castle'], 1],
        ['mcq', 45, 'Ned Land\'s desire to escape grew stronger when the Nautilus reached...', ['The Red Sea', 'The Mediterranean Sea (close to Europe)', 'Atlantis', 'The underwater forest'], 1],
        ['mcq', 45, 'Nemo told Aronnax that true freedom is only found...', ['In the mountains', 'Under the sea', 'In Paris', 'On a warship'], 1],
        ['mcq', 45, 'When Nemo fought the shark to save the diver, he was...', ['Almost killed until Ned Land saved him', 'Easily the winner', 'Using a submarine laser', 'Bitten on the leg'], 0],
        ['mcq', 45, 'The pearl diver was from...', ['France', 'Canada', 'India', 'Egypt'], 2],
        ['mcq', 45, 'What did Aronnax think of Captain Nemo after the shark incident?', ['He was purely evil', 'He was a complex man with a good heart', 'He was a coward', 'He was a ghost'], 1],
        // 5 T/F (30 ثانية)
        ['tf', 30, 'The plants in the underwater forest bent easily with the water currents.', false], // They grew straight up
        ['tf', 30, 'Captain Nemo intended to eventually harvest the giant pearl.', true],
        ['tf', 30, 'Captain Nemo used his wealth exclusively to build more submarines.', false], // He gave it to oppressed people
        ['tf', 30, 'Ned Land saved Captain Nemo\'s life by killing the shark with his harpoon.', true],
        ['tf', 30, 'The Arabian Tunnel was well known to scientists before Aronnax traveled through it.', false],
        // 5 Essay (60 ثانية)
        ['essay', 60, 'What did the men use to breathe while walking in the underwater forest?', 'Tanks filled with compressed air'],
        ['essay', 60, 'Why did Captain Nemo risk his life for the Indian pearl diver?', 'Because the diver was poor and oppressed, and Nemo sympathized with him'],
        ['essay', 60, 'What legendary sunken city did Captain Nemo show Aronnax?', 'Atlantis'],
        ['essay', 60, 'How did Captain Nemo use the gold he found in sunken ships?', 'He sent it to support poor and oppressed people fighting for freedom'],
        ['essay', 60, 'Who saved Captain Nemo from the shark attack?', 'Ned Land']
    ]
);

// الاختبار الثاني عشر: القصة - الفصول 5 و 6 (صعب)
window.addExam(
    { id: 'eng_story_5_6_hard', subject: 'انجليزي', title: 'Story (Ch 5 & 6): Dangers & Escape (Hard)', order: 12 },
    [
        // 15 MCQ (45 ثانية)
        ['mcq', 45, 'What major crisis did the Nautilus face at the South Pole?', ['It was attacked by penguins', 'It was trapped inside a thick mountain of ice', 'The engine exploded', 'The crew mutinied'], 1],
        ['mcq', 45, 'Why was the ice trap so deadly for the crew?', ['It was too cold', 'They were running out of breathable oxygen', 'The ice was crushing the ship', 'There was no food left'], 1],
        ['mcq', 45, 'How did the crew finally escape the ice trap?', ['By using a giant laser', 'By calling for help', 'By breaking the ice with pickaxes and using boiling water', 'By waiting for summer'], 2],
        ['mcq', 45, 'During the attack by the giant squids, what tragic event occurred?', ['Nemo lost his leg', 'Aronnax was blinded', 'A crew member was snatched and killed by a squid', 'The Nautilus sank'], 2],
        ['mcq', 45, 'How did Captain Nemo react to the loss of his crew member?', ['He laughed', 'He didn\'t care', 'He wept and became deeply depressed', 'He blamed Ned Land'], 2],
        ['mcq', 45, 'What dark side of Captain Nemo was revealed when they encountered a warship?', ['He surrendered to them', 'He used the Nautilus as a weapon to mercilessly sink it', 'He sold his crew to them', 'He ran away in fear'], 1],
        ['mcq', 45, 'After seeing Nemo sink the warship, Aronnax realized that...', ['Nemo was a hero', 'They had to escape immediately because Nemo was driven by dark revenge', 'He wanted to join Nemo\'s crew', 'The Nautilus was invincible'], 1],
        ['mcq', 45, 'What natural disaster did the Nautilus sail into during their escape attempt?', ['A tsunami', 'A hurricane', 'A deadly whirlpool called the Maelstrom', 'An underwater volcano'], 2],
        ['mcq', 45, 'What happened to Aronnax as they tried to escape in the small boat?', ['He was eaten by a shark', 'He hit his head and lost consciousness', 'He decided to stay with Nemo', 'He steered the boat to safety'], 1],
        ['mcq', 45, 'Where did Aronnax, Conseil, and Ned Land find themselves after surviving the whirlpool?', ['In a prison', 'On a desert island', 'In a fisherman\'s safe house in Norway', 'Back in France'], 2],
        ['mcq', 45, 'What remained a mystery to Aronnax at the end of the story?', ['The name of the submarine', 'Ned Land\'s true identity', 'The fate of Captain Nemo and the Nautilus', 'How to speak French'], 2],
        ['mcq', 45, 'The giant squids attacked the submarine mainly using their...', ['Teeth', 'Massive tentacles (arms)', 'Poison', 'Tails'], 1],
        ['mcq', 45, 'Nemo\'s actions against the warship showed that his desire for ...... was stronger than his love for science.', ['Wealth', 'Fame', 'Revenge', 'Peace'], 2],
        ['mcq', 45, 'Aronnax wrote his book to share his adventures and to...', ['Make money', 'Warn people about Nemo', 'Reveal the wonders of the ocean', 'Insult Ned Land'], 2],
        ['mcq', 45, 'In the end, Aronnax felt a mix of ...... towards Captain Nemo.', ['Love and joy', 'Horror and admiration', 'Boredom and anger', 'Jealousy and greed'], 1],
        // 5 T/F (30 ثانية)
        ['tf', 30, 'The crew used boiling water to help melt the ice trapping the Nautilus.', true],
        ['tf', 30, 'Captain Nemo felt no emotion when the giant squid killed his sailor.', false],
        ['tf', 30, 'Aronnax finally agreed to escape because he was disgusted by Nemo sinking the warship.', true],
        ['tf', 30, 'The Maelstrom is a giant, deadly underwater volcano.', false], // It is a whirlpool
        ['tf', 30, 'Aronnax learned the exact reasons behind Nemo\'s desire for revenge before he escaped.', false], // It remained a mystery
        // 5 Essay (60 ثانية)
        ['essay', 60, 'Why was being trapped in the ice at the South Pole life-threatening?', 'Because the crew was running out of oxygen to breathe'],
        ['essay', 60, 'What tragic event made Captain Nemo cry and become depressed?', 'A giant squid snatched and killed one of his crew members'],
        ['essay', 60, 'What did Captain Nemo do to the warship that horrified Aronnax?', 'He used the Nautilus to ram and sink the warship without mercy'],
        ['essay', 60, 'What deadly natural phenomenon did they face during their escape?', 'The Maelstrom (a giant whirlpool)'],
        ['essay', 60, 'What happened to Captain Nemo at the end of the story?', 'His fate remained unknown and a mystery to Aronnax']
    ]
);