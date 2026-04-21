// =========================================================
// بنك أسئلة لغة إنجليزية - المنهج الجديد 2025-2026
// Unit 7: Sports (50 Questions)
// Unit 8: Cultures and Traditions (50 Questions)
// Unit 9: Courage and Survival (50 Questions)
// =========================================================
window.DB = window.DB || { bank: [], exams: [], library: [], files: {}, capsule: {} };

// ---------------------------------------------------------
// Unit 7: Sports
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u7_new', 'english', 'Unit 7: Sports', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'An ....... is a person who is highly trained in sports and physical exercises.', ['author', 'athlete', 'artist', 'astronaut'], 1],
    [2, 'mcq', '', 'The team has won the national ....... for the third time in a row.', ['tournament', 'experiment', 'monument', 'document'], 0],
    [3, 'mcq', '', 'The ....... blew his whistle to end the football match.', ['captain', 'goalkeeper', 'referee', 'spectator'], 2],
    [4, 'mcq', '', 'The synonym of the word "amateur" is .......', ['professional', 'expert', 'beginner', 'champion'], 2],
    [5, 'mcq', '', 'To form an adjective from the verb "compete", we add the suffix .......', ['-ment', '-ive', '-ion', '-ness'], 1],
    [6, 'mcq', '', 'Tennis is usually played on a hard or grass .......', ['pitch', 'pool', 'court', 'track'], 2],
    [7, 'mcq', '', 'A running ....... is specially designed for athletes to run races on.', ['pitch', 'court', 'ring', 'track'], 3],
    [8, 'mcq', '', 'My brother ....... tennis since he was eight years old.', ['played', 'has been playing', 'is playing', 'plays'], 1],
    [9, 'mcq', '', 'They have ....... finished their training session. They are resting now.', ['yet', 'ever', 'just', 'never'], 2],
    [10, 'mcq', '', 'Have you ....... participated in an international competition?', ['ever', 'never', 'since', 'for'], 0],
    [11, 'mcq', '', 'A ....... is a person who watches a sports event without taking part.', ['player', 'coach', 'spectator', 'referee'], 2],
    [12, 'mcq', '', 'The antonym of "victory" is .......', ['success', 'defeat', 'medal', 'goal'], 1],
    [13, 'mcq', '', 'Gymnastics ....... a sport that requires a lot of flexibility and strength.', ['are', 'is', 'were', 'have been'], 1], // Gymnastics is singular
    [14, 'mcq', '', 'I have known my best friend ....... five years.', ['since', 'for', 'ago', 'yet'], 1],
    [15, 'mcq', '', 'She hasn\'t won a gold medal .......', ['already', 'just', 'yet', 'ever'], 2],
    [16, 'mcq', '', 'The manager ....... the team on how to play better in the second half.', ['coached', 'played', 'watched', 'cheered'], 0],
    [17, 'mcq', '', 'Which piece of equipment is used to protect your head in cycling?', ['goggles', 'gloves', 'helmet', 'knee pads'], 2],
    [18, 'mcq', '', 'We have been waiting for the match to start ....... 3 o\'clock.', ['for', 'in', 'on', 'since'], 3],
    [19, 'mcq', '', 'He ....... 10 goals so far this season.', ['scores', 'is scoring', 'has scored', 'scored'], 2],
    [20, 'mcq', '', 'To win a race, an athlete must be completely ....... to their training routine.', ['lazy', 'dedicated', 'careless', 'bored'], 1],
    [21, 'mcq', '', 'A piece of gold, silver, or bronze given to a winner is called a .......', ['coin', 'medal', 'model', 'statue'], 1],
    [22, 'mcq', '', 'The word "champion" can be replaced by .......', ['loser', 'winner', 'trainer', 'viewer'], 1],
    [23, 'mcq', '', 'He is very tired because he ....... football all morning.', ['played', 'is playing', 'has been playing', 'plays'], 2],
    [24, 'mcq', '', 'A ....... is someone who prepares and trains a person or team for a sport.', ['coach', 'fan', 'referee', 'sponsor'], 0],
    [25, 'mcq', '', 'The prefix "dis-" in the word "disqualify" means .......', ['again', 'before', 'not / opposite of', 'too much'], 2],
    [26, 'mcq', '', 'You cannot play basketball without a ....... and a ball.', ['bat', 'racket', 'stick', 'glove'], 1],
    [27, 'mcq', '', 'It ....... heavily since we arrived at the stadium.', ['rained', 'is raining', 'has been raining', 'rains'], 2],
    [28, 'mcq', '', 'Sports help us to keep ....... and healthy.', ['fat', 'fit', 'lazy', 'weak'], 1],
    [29, 'mcq', '', 'Ali hasn\'t played squash ....... he broke his arm.', ['for', 'when', 'since', 'after'], 2],
    [30, 'mcq', '', 'A sports ....... is a large building with rows of seats around a playing field.', ['museum', 'theater', 'stadium', 'laboratory'], 2],

    // --- 10 True/False ---
    [31, 'tf', '', 'A professional athlete gets paid to play their sport.', true],
    [32, 'tf', '', 'The present perfect continuous is used for actions that started in the past and have stopped a long time ago.', false], // Actions that are still continuing
    [33, 'tf', '', 'We use a racket to play football.', false],
    [34, 'tf', '', 'The synonym of the word "defeat" is "loss".', true],
    [35, 'tf', '', 'The word "gymnastics" takes a plural verb because it ends in "s".', false],
    [36, 'tf', '', '"Since" is usually followed by a specific point in time.', true],
    [37, 'tf', '', 'A spectator is the person who controls the rules of the game.', false], // Referee
    [38, 'tf', '', 'We add the suffix "-er" to the verb "train" to refer to the person giving the training.', true],
    [39, 'tf', '', 'We use the word "yet" at the end of negative sentences and questions in the present perfect.', true],
    [40, 'tf', '', 'A running track is where swimming competitions are held.', false],

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: She has been a champion (since) three years.', ['for']],
    [42, 'essay', '', 'Correct the mistake: I have (never) watched a live match before? (In a question)', ['ever']],
    [43, 'essay', '', 'Correct the mistake: The team has (play) very well this season.', ['played']],
    [44, 'essay', '', 'Correct the mistake: A football (court) is covered with green grass.', ['pitch']],
    [45, 'essay', '', 'Correct the mistake: He hasn\'t finished the race (already).', ['yet']],
    [46, 'essay', '', 'Correct the mistake: They have been (run) for two hours.', ['running']],
    [47, 'essay', '', 'Correct the mistake: The (spectator) gave a red card to the player.', ['referee']],
    [48, 'essay', '', 'Correct the mistake: I haven\'t seen him (for) last Monday.', ['since']],
    [49, 'essay', '', 'Correct the mistake: Gymnastics (are) my favorite sport.', ['is']],
    [50, 'essay', '', 'Correct the mistake: He is an (professional) because he plays for fun, not for money.', ['amateur']]
]);

// ---------------------------------------------------------
// Unit 8: Cultures and Traditions
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u8_new', 'english', 'Unit 8: Cultures and Traditions', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'Our national ....... includes the historical buildings, traditions, and art of our country.', ['heritage', 'factory', 'climate', 'pollution'], 0],
    [2, 'mcq', '', 'A ....... is a belief or way of doing something that has existed for a long time.', ['habit', 'tradition', 'recipe', 'festival'], 1],
    [3, 'mcq', '', 'During the festival, people wear colourful .......', ['costumes', 'customs', 'customers', 'consumers'], 0],
    [4, 'mcq', '', 'The synonym of the word "traditional" is .......', ['modern', 'new', 'classic', 'recent'], 2],
    [5, 'mcq', '', 'We can form the adjective from the word "culture" by adding the suffix .......', ['-ly', '-al', '-ment', '-ness'], 1], // cultural
    [6, 'mcq', '', 'Millions of people ....... the internet every day. (Active)', ['are used', 'use', 'using', 'used'], 1],
    [7, 'mcq', '', 'Beautiful lanterns ....... in the streets during Ramadan. (Passive)', ['are hung', 'hang', 'hung', 'are hanging'], 0],
    [8, 'mcq', '', 'This delicious traditional food ....... by my grandmother yesterday.', ['cooks', 'cooked', 'was cooked', 'is cooked'], 2],
    [9, 'mcq', '', 'Many festivals ....... to celebrate the harvest season in the past.', ['are held', 'were held', 'held', 'hold'], 1],
    [10, 'mcq', '', 'The antonym of the word "similar" is .......', ['different', 'same', 'alike', 'equal'], 0],
    [11, 'mcq', '', 'A ....... is a large public procession, usually with music and decorated vehicles.', ['parade', 'meeting', 'class', 'seminar'], 0],
    [12, 'mcq', '', 'In some Asian countries, people use ....... to eat their food instead of spoons and forks.', ['swords', 'chopsticks', 'sticks', 'glasses'], 1],
    [13, 'mcq', '', 'To ....... means to make something look more attractive by putting things on it.', ['destroy', 'ruin', 'decorate', 'break'], 2],
    [14, 'mcq', '', 'English ....... as a first language in Australia.', ['speaks', 'is spoken', 'spoke', 'is speaking'], 1],
    [15, 'mcq', '', 'A large meal, especially to celebrate something, is called a .......', ['snack', 'feast', 'fast', 'diet'], 1],
    [16, 'mcq', '', 'A lot of cotton ....... in Egypt because of its good climate.', ['grown', 'grows', 'are grown', 'is grown'], 3], // Cotton is uncountable
    [17, 'mcq', '', 'The word "multicultural" means containing .......', ['no cultures', 'one culture only', 'many different cultures', 'ancient things'], 2],
    [18, 'mcq', '', 'The Pyramids of Giza ....... by ancient Egyptians.', ['built', 'build', 'were built', 'are built'], 2],
    [19, 'mcq', '', 'A ....... is something that you wear over your face to hide it or protect it.', ['mask', 'glove', 'sock', 'belt'], 0],
    [20, 'mcq', '', 'When people ......., they do something to show that a day or an event is important.', ['ignore', 'celebrate', 'forget', 'cry'], 1],
    [21, 'mcq', '', 'These old photos ....... in 1990.', ['take', 'took', 'were taken', 'are taken'], 2],
    [22, 'mcq', '', 'To pass something down from one ....... to the next means from parents to children.', ['station', 'generation', 'nation', 'location'], 1],
    [23, 'mcq', '', 'Fireworks ....... at midnight to celebrate the New Year.', ['are lit', 'light', 'were lit', 'lighting'], 0], // generally speaking (Present Passive)
    [24, 'mcq', '', 'It is a common ....... in Egypt to eat Feseekh on Sham El-Nessim.', ['costume', 'custom', 'customer', 'cast'], 1],
    [25, 'mcq', '', 'The prefix "inter-" in "international" means .......', ['between or among', 'inside', 'not', 'again'], 0],
    [26, 'mcq', '', 'Traditional music ....... at the local festival last night.', ['is played', 'played', 'was played', 'plays'], 2],
    [27, 'mcq', '', 'A ....... is a story from ancient times, especially one that was told to explain natural events.', ['myth', 'fact', 'news', 'report'], 0],
    [28, 'mcq', '', 'My bike ....... last week, so I had to walk to school.', ['stole', 'steals', 'was stolen', 'is stolen'], 2],
    [29, 'mcq', '', 'Different countries have different ....... when greeting people, such as bowing or shaking hands.', ['foods', 'greetings', 'colors', 'sports'], 1],
    [30, 'mcq', '', 'These beautiful carpets ....... by hand in a small village.', ['make', 'made', 'are made', 'making'], 2],

    // --- 10 True/False ---
    [31, 'tf', '', 'A "custom" is a type of clothing worn by actors.', false], // That's a costume
    [32, 'tf', '', 'The passive voice focuses on the action and the receiver of the action.', true],
    [33, 'tf', '', '"Were built" is an example of the present simple passive.', false], // Past simple passive
    [34, 'tf', '', 'A "feast" is a small meal you eat when you are not very hungry.', false],
    [35, 'tf', '', 'The prefix "multi-" in multicultural means "many".', true],
    [36, 'tf', '', 'A generation refers to all the people born and living at about the same time.', true],
    [37, 'tf', '', 'The antonym of "modern" is "traditional" or "ancient".', true],
    [38, 'tf', '', 'Chopsticks are used for writing in China.', false], // For eating
    [39, 'tf', '', '"Is spoken" is an example of the present simple passive.', true],
    [40, 'tf', '', 'A parade is a private meeting inside a closed room.', false],

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: The festival (celebrate) in spring every year.', ['is celebrated']],
    [42, 'essay', '', 'Correct the mistake: The Pyramids (build) thousands of years ago.', ['were built']],
    [43, 'essay', '', 'Correct the mistake: A (custom) is a set of clothes worn to look like someone else.', ['costume']],
    [44, 'essay', '', 'Correct the mistake: Traditional food (are) eaten during the feast.', ['is']],
    [45, 'essay', '', 'Correct the mistake: The windows (clean) by the maid yesterday.', ['were cleaned']],
    [46, 'essay', '', 'Correct the mistake: English (speaks) all over the world.', ['is spoken']],
    [47, 'essay', '', 'Correct the mistake: Many photos (was) taken during the parade.', ['were']],
    [48, 'essay', '', 'Correct the mistake: My car (repair) tomorrow. (Hint: Present continuous passive or will be repaired)', ['will be repaired']], // Or is being repaired
    [49, 'essay', '', 'Correct the mistake: I bought a very (tradition) dress for the party.', ['traditional']],
    [50, 'essay', '', 'Correct the mistake: The letter (deliver) by the postman this morning.', ['was delivered']]
]);

// ---------------------------------------------------------
// Unit 9: Courage and Survival
// ---------------------------------------------------------
window.addBankLesson('bank_eng_u9_new', 'english', 'Unit 9: Courage and Survival', [
    // --- 30 MCQ (Vocab & Grammar) ---
    [1, 'mcq', '', 'To ....... means to manage to stay alive in a difficult or dangerous situation.', ['survive', 'die', 'sink', 'fall'], 0],
    [2, 'mcq', '', '....... is the quality of being brave when you are facing danger.', ['Fear', 'Weakness', 'Courage', 'Laziness'], 2],
    [3, 'mcq', '', 'An ....... is a sudden, unexpected, and dangerous situation that needs immediate action.', ['emergency', 'event', 'exhibition', 'environment'], 0],
    [4, 'mcq', '', 'The brave firefighter managed to ....... the child from the burning building.', ['destroy', 'damage', 'rescue', 'lose'], 2],
    [5, 'mcq', '', 'The synonym of the word "brave" is .......', ['cowardly', 'fearful', 'courageous', 'weak'], 2],
    [6, 'mcq', '', 'We add the suffix ....... to the verb "survive" to mean the person who stays alive.', ['-or', '-er', '-ist', '-ian'], 0], // survivor
    [7, 'mcq', '', 'A ....... is something difficult that tests your ability and determination.', ['challenge', 'joke', 'gift', 'prize'], 0],
    [8, 'mcq', '', 'If you see an accident, you ....... call the ambulance immediately. (Advice)', ['might', 'should', 'would', 'could'], 1],
    [9, 'mcq', '', 'If I ....... a lot of money, I would travel around the world. (Second Conditional)', ['have', 'had', 'has', 'will have'], 1],
    [10, 'mcq', '', 'What would you do if you ....... a wild bear in the forest?', ['meet', 'met', 'meeting', 'will meet'], 1],
    [11, 'mcq', '', 'He couldn\'t call for help because he ....... his mobile phone. (Past Perfect)', ['had lost', 'lost', 'loses', 'has lost'], 0], // happened first
    [12, 'mcq', '', 'By the time the police arrived, the thief .......', ['escaped', 'escapes', 'had escaped', 'has escaped'], 2],
    [13, 'mcq', '', '....... weather conditions, like freezing storms, make it hard to survive.', ['Extreme', 'Mild', 'Pleasant', 'Warm'], 0],
    [14, 'mcq', '', 'If I ....... you, I wouldn\'t go out in this heavy rain.', ['am', 'was', 'were', 'been'], 2], // If I were you
    [15, 'mcq', '', 'First ....... is the basic medical help given to a sick or injured person until a doctor arrives.', ['aid', 'add', 'aim', 'art'], 0],
    [16, 'mcq', '', 'A ....... is a small device used to show direction (North, South, East, West).', ['compass', 'clock', 'thermometer', 'camera'], 0],
    [17, 'mcq', '', 'After they ....... their tent, it started to rain heavily.', ['build', 'built', 'had built', 'building'], 2], // Past perfect after "After"
    [18, 'mcq', '', 'The antonym of the word "heroic" is .......', ['brave', 'cowardly', 'courageous', 'strong'], 1],
    [19, 'mcq', '', 'If she studied harder, she ....... get higher marks.', ['will', 'would', 'can', 'may'], 1],
    [20, 'mcq', '', 'We use a/an ....... to keep ourselves warm when sleeping in a tent.', ['umbrella', 'compass', 'sleeping bag', 'torch'], 2],
    [21, 'mcq', '', 'I didn\'t start eating until my father .......', ['had arrived', 'arrives', 'arrived', 'will arrive'], 0], // until + past perfect
    [22, 'mcq', '', 'They faced a huge ....... when their boat sank in the middle of the ocean.', ['joke', 'party', 'challenge', 'dream'], 2],
    [23, 'mcq', '', 'You should always carry a ....... to see in the dark during a camping trip.', ['torch', 'compass', 'map', 'tent'], 0],
    [24, 'mcq', '', 'If water freezes, it ....... into ice. (Zero Conditional)', ['turns', 'turned', 'would turn', 'will turn'], 0],
    [25, 'mcq', '', 'The word "shelter" means a place that provides ....... from weather or danger.', ['food', 'protection', 'water', 'music'], 1],
    [26, 'mcq', '', 'As soon as he ....... the news, he ran to the hospital.', ['had heard', 'hears', 'hearing', 'has heard'], 0], // As soon as + past perfect
    [27, 'mcq', '', 'A person who behaves with great courage is called a .......', ['coward', 'villain', 'hero', 'thief'], 2],
    [28, 'mcq', '', 'If they ....... a map, they wouldn\'t be lost now.', ['have', 'had', 'has', 'having'], 1],
    [29, 'mcq', '', 'We need some special ....... like strong boots and a rope to climb the mountain.', ['clothes', 'food', 'equipment', 'books'], 2],
    [30, 'mcq', '', 'He felt safe because the rescue team ....... him from the river.', ['saved', 'has saved', 'had saved', 'saves'], 2],

    // --- 10 True/False ---
    [31, 'tf', '', 'A survivor is someone who loses their life in an accident.', false],
    [32, 'tf', '', 'The word "courageous" is the synonym of "brave".', true],
    [33, 'tf', '', 'We use the Second Conditional for imaginary or unlikely situations in the present or future.', true],
    [34, 'tf', '', 'First aid is the final treatment given by a doctor in a hospital.', false], // It's the basic initial help
    [35, 'tf', '', 'A compass is used to measure the temperature of the air.', false], // Thermometer
    [36, 'tf', '', '"If I were you" is an expression used to give advice.', true],
    [37, 'tf', '', 'The Past Perfect is used to show that one action happened before another action in the past.', true],
    [38, 'tf', '', 'An emergency is a normal, everyday situation.', false],
    [39, 'tf', '', 'Extreme weather means very bad and severe weather conditions.', true],
    [40, 'tf', '', 'After "until" in the past, we usually use the Past Simple tense.', false], // Past Perfect

    // --- 10 Essay (Read and Correct) ---
    [41, 'essay', '', 'Correct the mistake: If I (have) a rope, I would climb the tree safely.', ['had']],
    [42, 'essay', '', 'Correct the mistake: Before the ambulance arrived, the brave man (save) the child.', ['had saved']],
    [43, 'essay', '', 'Correct the mistake: He is a very (cowardly) boy; he jumped into the fire to rescue his sister.', ['brave', 'courageous']],
    [44, 'essay', '', 'Correct the mistake: What would you do if you (see) a dangerous animal?', ['saw']],
    [45, 'essay', '', 'Correct the mistake: They couldn\'t enter the house because they (lose) the keys.', ['had lost']],
    [46, 'essay', '', 'Correct the mistake: If I (was) you, I would take a compass on the trip.', ['were']],
    [47, 'essay', '', 'Correct the mistake: She didn\'t sleep until she (finish) her homework.', ['had finished']],
    [48, 'essay', '', 'Correct the mistake: A (compass) is used to see in the dark.', ['torch', 'flashlight']],
    [49, 'essay', '', 'Correct the mistake: After they (eat) dinner, they went out for a walk.', ['had eaten']],
    [50, 'essay', '', 'Correct the mistake: A (survivor) is a person who died in an accident.', ['victim']] // The correction of survivor meaning is victim or dead person, but let's correct the sentence context: A person who lived is a survivor. A person who died is a victim.
]);