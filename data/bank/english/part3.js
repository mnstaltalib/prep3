/**
 * منصة الطالب - بنك أسئلة اللغة الإنجليزية (القصة كاملة)
 * The Reader: Twenty Thousand Leagues Under the Sea
 * بناءً على المصدر الرسمي - الترم الثاني 
 */

window.DB = window.DB || { bank: [], exams: [], library: [], files: {}, capsule: {} };

// =========================================================
// Chapter 1: The Mystery of the Sea Monster
// =========================================================
window.addBankLesson('bank_eng_story_ch1', 'english', 'Story Ch 1: The Sea Monster', [
    // 15 MCQ
    [1, 'mcq', '', 'In which century did sailors report seeing a strange creature?', ['In the mid-eighteenth century', 'In the mid-nineteenth century', 'In the early twentieth century', 'In the late seventeenth century'], 1],
    [2, 'mcq', '', 'What did the ships claim the mysterious sea monster was doing?', ['Helping lost sailors to navigate', 'Moving slowly near the islands', 'Smashing ships with terrible force', 'Hiding deep inside the sea caves'], 2],
    [3, 'mcq', '', 'How did the newspapers describe the mysterious sea creature?', ['As both marvelous and terrifying', 'As a small and peaceful animal', 'As an ancient wooden submarine', 'As a friendly and helpful whale'], 0],
    [4, 'mcq', '', 'Why was a special voyage launched across the Pacific Ocean?', ['To discover a new trade route', 'To capture or kill the beast', 'To test modern naval weapons', 'To rescue a lost sailing ship'], 1],
    [5, 'mcq', '', 'Who was Professor Pierre Aronnax in the context of the story?', ['A highly skilled Canadian harpooner', 'A loyal servant to the commander', 'A French marine biology scientist', 'A brave captain of the warship'], 2],
    [6, 'mcq', '', 'What was the specific role of the character named Conseil?', ['He was the captain of the ship', 'He was a professional harpooner', 'He was Professor Aronnax\'s loyal servant', 'He was a journalist for a newspaper'], 2],
    [7, 'mcq', '', 'Who was Ned Land and what was his role on the voyage?', ['A French scientist studying the ocean', 'A Canadian harpooner hunting the beast', 'A wealthy businessman funding the trip', 'An English doctor treating the sailors'], 1],
    [8, 'mcq', '', 'What type of vessel did the crew board to search for the beast?', ['A large luxury passenger ship', 'A small wooden fishing boat', 'A fast and armed naval warship', 'A modern underwater submarine'], 2],
    [9, 'mcq', '', 'How long did the crew search the ocean without any success?', ['For a few short days', 'For several long months', 'For exactly two weeks', 'For nearly five years'], 1],
    [10, 'mcq', '', 'What appeared in the waves one evening after months of searching?', ['A massive, long, glowing shape', 'A hidden underwater volcano', 'A sunken ancient pirate ship', 'A huge flock of flying birds'], 0],
    [11, 'mcq', '', 'How did the crew try to attack the glowing monster?', ['By throwing heavy fishing nets', 'By launching cannon fire and harpoons', 'By ramming it with their ship', 'By using advanced electrical lasers'], 1],
    [12, 'mcq', '', 'What did the "monster" use to hit the ship during the chase?', ['Its enormous heavy tail', 'Its sharp and massive teeth', 'Its steel-like metallic body', 'Its glowing electrical arms'], 2],
    [13, 'mcq', '', 'What happened to Aronnax and his companions after the impact?', ['They were thrown into the sea', 'They captured the sea beast', 'They hid below the ship deck', 'They escaped in a small boat'], 0],
    [14, 'mcq', '', 'What did the struggling men discover about the mysterious creature?', ['It was a rare species of whale', 'It was a man-made submarine', 'It was a magical sea monster', 'It was a floating wooden island'], 1],
    [15, 'mcq', '', 'What does the word "voyage" accurately mean in this story?', ['A short walk along the beach', 'A deep sleep after hard work', 'A long journey across the sea', 'A quick flight over the ocean'], 2],
    // 5 T/F
    [16, 'tf', '', 'The sailors reported the strange creature in the mid-twentieth century.', false],
    [17, 'tf', '', 'Conseil was a Canadian harpooner who joined the crew.', false],
    [18, 'tf', '', 'The crew searched the Pacific Ocean for months without success.', true],
    [19, 'tf', '', 'The monster hit the warship with its steel-like body.', true],
    [20, 'tf', '', 'The companions discovered that the creature was an actual animal.', false],
    // 5 Essay
    [21, 'essay', '', 'What did the ships claim the monster was doing with terrible force?', ['Smashing ships', 'smashing ships']],
    [22, 'essay', '', 'What was Professor Aronnax\'s nationality and profession?', ['French marine scientist', 'french marine scientist']],
    [23, 'essay', '', 'Who was Professor Aronnax\'s loyal servant?', ['Conseil', 'conseil']],
    [24, 'essay', '', 'What weapons did the crew use to attack the glowing shape?', ['Cannon fire and harpoons', 'cannon fire and harpoons', 'cannons and harpoons']],
    [25, 'essay', '', 'What did the men discover the "monster" actually was?', ['A man-made submarine', 'a submarine', 'submarine']]
]);

// =========================================================
// Chapter 2: Captives of Captain Nemo
// =========================================================
window.addBankLesson('bank_eng_story_ch2', 'english', 'Story Ch 2: Captives of Captain Nemo', [
    // 15 MCQ
    [1, 'mcq', '', 'How were Aronnax and his companions brought inside the submarine?', ['Through a large glass window', 'Through a heavy iron door', 'Through a hidden wooden gate', 'Through an open upper deck'], 1],
    [2, 'mcq', '', 'Who was the mysterious commander of the advanced submarine?', ['Professor Aronnax', 'Captain Ahab', 'Captain Nemo', 'Ned Land'], 2],
    [3, 'mcq', '', 'What was Captain Nemo\'s incredible submarine completely built for?', ['Life entirely beneath the sea', 'Sailing on the ocean surface', 'Fighting massive land wars', 'Transporting goods to Europe'], 0],
    [4, 'mcq', '', 'What specific energy source powered the Nautilus?', ['Steam engines', 'Coal burners', 'Solar energy', 'Electricity'], 3],
    [5, 'mcq', '', 'What strict rule did Captain Nemo make clear to his new guests?', ['They must work as his servants', 'They could never return to land', 'They had to pay for their food', 'They could leave after a month'], 1],
    [6, 'mcq', '', 'Why did Professor Aronnax accept remaining on the submarine?', ['He wanted to find hidden gold', 'He was afraid of Captain Nemo', 'He was filled with scientific curiosity', 'He hated living in his home country'], 2],
    [7, 'mcq', '', 'How did Ned Land react to being kept aboard the Nautilus?', ['He was very happy and excited', 'He was angry and valued freedom', 'He was completely calm and loyal', 'He was curious to learn science'], 1],
    [8, 'mcq', '', 'What did the inside of the Nautilus look like to the companions?', ['A dark and terrifying prison cell', 'A simple and poor wooden boat', 'A floating palace under the water', 'A crowded and noisy city street'], 2],
    [9, 'mcq', '', 'What special rooms did the Nautilus contain inside?', ['A library and a massive museum', 'A large cinema and a restaurant', 'A swimming pool and a hospital', 'A shopping mall and a post office'], 0],
    [10, 'mcq', '', 'What did Nemo show his guests that he had gathered from the sea?', ['Only ancient wooden ship parts', 'Pearls, gold, and ancient artifacts', 'Rare and colorful tropical birds', 'Various types of advanced weapons'], 1],
    [11, 'mcq', '', 'What did Captain Nemo insist was his one and only homeland?', ['The sea', 'The land', 'The island', 'The sky'], 0],
    [12, 'mcq', '', 'How did the three companions begin to feel about their situation?', ['Half kings and half servants', 'Half prisoners and half-guests', 'Completely free and extremely happy', 'Totally enslaved and severely beaten'], 1],
    [13, 'mcq', '', 'What did the Nautilus have that allowed them to see the deep ocean?', ['High-tech cameras', 'Big clear windows', 'Large wooden doors', 'Powerful telescopes'], 1],
    [14, 'mcq', '', 'What did Ned Land immediately begin making a plan to do?', ['To escape from the Nautilus', 'To become the new commander', 'To explore the ocean floor', 'To read books in the library'], 0],
    [15, 'mcq', '', 'What describes Nemo\'s character as introduced in this chapter?', ['A weak man with no knowledge', 'A mysterious man of strong will', 'A cruel pirate seeking revenge', 'A funny sailor loving the land'], 1],
    // 5 T/F
    [16, 'tf', '', 'The Nautilus was powered by advanced steam engines.', false],
    [17, 'tf', '', 'Captain Nemo allowed the men to return to land after one year.', false],
    [18, 'tf', '', 'Professor Aronnax accepted his fate because he wanted to learn about the ocean.', true],
    [19, 'tf', '', 'Ned Land was very happy to live in the underwater floating palace.', false],
    [20, 'tf', '', 'Captain Nemo considered the sea to be his only homeland.', true],
    // 5 Essay
    [21, 'essay', '', 'What was the name of Captain Nemo\'s submarine?', ['Nautilus', 'nautilus', 'The Nautilus']],
    [22, 'essay', '', 'What did the Nautilus use to travel long distances without surfacing?', ['Electricity', 'electricity']],
    [23, 'essay', '', 'Who remained calm and loyal to his master?', ['Conseil', 'conseil']],
    [24, 'essay', '', 'What did Ned Land value above all?', ['Freedom', 'freedom']],
    [25, 'essay', '', 'What treasures did Nemo gather from the sea? (Name two)', ['Pearls, gold, and ancient artifacts', 'Pearls and gold', 'Gold and artifacts']]
]);

// =========================================================
// Chapter 3: Wonders of the Deep
// =========================================================
window.addBankLesson('bank_eng_story_ch3', 'english', 'Story Ch 3: Wonders of the Deep', [
    // 15 MCQ
    [1, 'mcq', '', 'What did Aronnax see glowing with color through the big windows?', ['Rare seaweed', 'Coral reefs', 'Sunken gold', 'Giant squids'], 1],
    [2, 'mcq', '', 'What allowed the guests to walk over the sea bed during voyages?', ['Small wooden boats', 'Heavy metal chains', 'Special diving suits', 'Glass submarines'], 2],
    [3, 'mcq', '', 'Where did Nemo take his guests to hunt and collect samples?', ['An underwater forest of strange plants', 'A dangerous and dark underwater cave', 'A modern scientific laboratory on land', 'An island filled with wild dangerous animals'], 0],
    [4, 'mcq', '', 'What did Nemo hint at when they visited the remains of a sunken city?', ['Hidden pirate treasure chests', 'Forgotten civilizations swallowed by waves', 'Advanced alien technology bases', 'Modern submarines destroyed in wars'], 1],
    [5, 'mcq', '', 'How did Professor Aronnax make use of the incredible journey?', ['He slept most of the time to rest', 'He planned a violent mutiny against Nemo', 'He recorded everything carefully for science', 'He collected gold to become very rich'], 2],
    [6, 'mcq', '', 'How did Conseil support Professor Aronnax during the journey?', ['He fought against the ship\'s crew', 'He named each creature accurately', 'He cooked meals for the scientists', 'He secretly communicated with land'], 1],
    [7, 'mcq', '', 'Why did Ned Land grow increasingly impatient despite the wonders?', ['He hated the food provided on the ship', 'He missed his absolute freedom and fresh air', 'He was afraid of the giant marine creatures', 'He wanted to steal Nemo\'s gathered treasures'], 1],
    [8, 'mcq', '', 'To Ned Land, what could NOT replace the freedom of land?', ['The delicious meals', 'The wealth of the ship', 'The beauty of the sea', 'The scientific knowledge'], 2],
    [9, 'mcq', '', 'Despite their differences, what did the companions agree on regarding Nemo?', ['He was a very poor and uneducated sailor', 'He was both highly brilliant and mysterious', 'He was a coward who feared the deep ocean', 'He was planning to destroy their home countries'], 1],
    [10, 'mcq', '', 'What aspect of Captain Nemo was completely clear to everyone?', ['His deep love for the land', 'His mastery of advanced science', 'His exact age and nationality', 'His true name and background'], 1],
    [11, 'mcq', '', 'What filled the companions with intense curiosity and worry?', ['Nemo\'s silence about his past and motives', 'The lack of good food and clean drinking water', 'The continuous attacks by giant sea monsters', 'The fragile and weak structure of the submarine'], 0],
    [12, 'mcq', '', 'Where did the Nautilus keep moving as the chapter ended?', ['Towards a familiar European shore', 'Deeper into the blue mystery of the ocean', 'Up to the surface to get some fresh air', 'Back to the dangerous freezing South Pole'], 1],
    [13, 'mcq', '', 'What does the word "shipwrecks" mean in this context?', ['Ships that are currently sailing fast', 'The destroyed remains of sunken ships', 'Boats used for rescuing drowning people', 'Huge naval vessels designed for battles'], 1],
    [14, 'mcq', '', 'What did the companions see resting silently on the ocean floor?', ['Shipwrecks', 'Flying birds', 'Modern cities', 'Wooden cars'], 0],
    [15, 'mcq', '', 'How did Conseil name each marine creature?', ['Incorrectly', 'Randomly', 'Accurately', 'Silently'], 2],
    // 5 T/F
    [16, 'tf', '', 'The guests used special suits to fly over the ocean surface.', false],
    [17, 'tf', '', 'Nemo hinted at forgotten civilizations swallowed by the waves.', true],
    [18, 'tf', '', 'Professor Aronnax ignored the marine life and did not record anything.', false],
    [19, 'tf', '', 'Ned Land felt that the beauty of the sea replaced the freedom of land.', false],
    [20, 'tf', '', 'Captain Nemo\'s mastery of science was clear to the companions.', true],
    // 5 Essay
    [21, 'essay', '', 'What did Aronnax see glowing with color through the windows?', ['Coral reefs', 'coral reefs']],
    [22, 'essay', '', 'What did Nemo provide to let them walk over the sea bed?', ['Special suits', 'special suits', 'diving suits']],
    [23, 'essay', '', 'Who named each marine creature accurately?', ['Conseil', 'conseil']],
    [24, 'essay', '', 'What did Ned Land miss the most?', ['Freedom and fresh air', 'freedom and fresh air', 'freedom']],
    [25, 'essay', '', 'What two adjectives did the companions agree described Captain Nemo?', ['Brilliant and mysterious', 'brilliant and mysterious']]
]);

// =========================================================
// Chapter 4: Battles & Dangers
// =========================================================
window.addBankLesson('bank_eng_story_ch4', 'english', 'Story Ch 4: Battles & Dangers', [
    // 15 MCQ
    [1, 'mcq', '', 'What dangerous creature attacked the Nautilus in a desperate struggle on deck?', ['A giant furious whale', 'A massive white shark', 'A giant deadly squid', 'A poisonous sea snake'], 2],
    [2, 'mcq', '', 'What weapons did Nemo and his brave crew use to fight the monster?', ['Guns and heavy cannons', 'Axes and sharp harpoons', 'Swords and metal shields', 'Electric nets and lasers'], 1],
    [3, 'mcq', '', 'Who fearlessly killed the giant monster during the desperate struggle?', ['Professor Aronnax', 'The loyal Conseil', 'The Canadian Ned Land', 'Captain Nemo himself'], 2],
    [4, 'mcq', '', 'Where did the submarine become dangerously trapped beneath thick ice?', ['At the frozen North Pole', 'In the cold Atlantic Ocean', 'At the freezing South Pole', 'In the deep Mediterranean Sea'], 2],
    [5, 'mcq', '', 'What critical life-saving resource was running low when they were trapped in the ice?', ['Fresh drinking water', 'Breathable oxygen', 'Electrical power', 'Nutritious food'], 1],
    [6, 'mcq', '', 'How did the crew work to escape the thick ice trap at the South Pole?', ['They waited for the summer sun', 'They used explosives to blast it', 'They worked hard to break a path', 'They called another ship for help'], 2],
    [7, 'mcq', '', 'What did the Nautilus do at the very last moment to escape the ice?', ['It sank deeper into the ocean', 'It forced its way free to the surface', 'It broke into small metal pieces', 'It reversed its powerful engines'], 1],
    [8, 'mcq', '', 'How did Captain Nemo react when foreign warships appeared on the surface?', ['He immediately surrendered to them', 'He attacked them without any mercy', 'He tried to communicate peacefully', 'He hid the submarine deep underwater'], 1],
    [9, 'mcq', '', 'Where did Nemo violently send the attacked warships?', ['Back to their home ports', 'To the depths of the ocean', 'To a deserted rocky island', 'To the nearby sandy shore'], 1],
    [10, 'mcq', '', 'What did the passengers learn about Nemo through these violent dangers?', ['He was a very weak and cowardly man', 'More about his complex and dark character', 'That he secretly worked for the government', 'That he planned to sell the submarine'], 1],
    [11, 'mcq', '', 'What positive qualities did Captain Nemo clearly show during crises?', ['Calm courage and remarkable leadership', 'Extreme panic and constant hesitation', 'Great physical weakness and laziness', 'Joy and happiness when people suffered'], 0],
    [12, 'mcq', '', 'What negative quality did Nemo show when he attacked the warships?', ['A deep love and respect for human life', 'A cold indifference to human life', 'A strong desire to save drowning sailors', 'A fear of destroying wooden ships'], 1],
    [13, 'mcq', '', 'How did Professor Aronnax\'s feelings toward Nemo change?', ['He began to admire but at the same time fear him', 'He felt only pure hatred and disgust toward him', 'He considered him his best and most trusted friend', 'He thought Nemo was just a normal, boring sailor'], 0],
    [14, 'mcq', '', 'What did the vast ocean represent to Professor Aronnax?', ['A dark and inescapable prison', 'A violent and bloody battlefield', 'A fascinating school of wonder', 'A boring and empty wasteland'], 2],
    [15, 'mcq', '', 'What did the ocean represent to Nemo and Ned Land respectively?', ['Wonder for Nemo, prison for Ned', 'Battlefield for Nemo, prison for Ned', 'Prison for Nemo, battlefield for Ned', 'School for Nemo, wonder for Ned'], 1],
    // 5 T/F
    [16, 'tf', '', 'The Nautilus was attacked by a giant squid on its deck.', true],
    [17, 'tf', '', 'Captain Nemo fearlessly killed the giant squid all by himself.', false],
    [18, 'tf', '', 'The submarine became trapped beneath thick ice at the North Pole.', false],
    [19, 'tf', '', 'Nemo showed a cold indifference to human life when he attacked warships.', true],
    [20, 'tf', '', 'To Ned Land, the ocean was a fascinating school of wonder.', false],
    // 5 Essay
    [21, 'essay', '', 'What giant creature attacked the Nautilus on its deck?', ['A giant squid', 'giant squid', 'squid']],
    [22, 'essay', '', 'Who killed the monster during the struggle?', ['Ned Land', 'ned land', 'Ned']],
    [23, 'essay', '', 'Where was the submarine trapped beneath thick ice?', ['The South Pole', 'South Pole', 'south pole']],
    [24, 'essay', '', 'What was running low while they were trapped in the ice?', ['Oxygen', 'oxygen']],
    [25, 'essay', '', 'What did Nemo do to the warships that appeared on the surface?', ['Attacked them without mercy', 'attacked them', 'sank them']]
]);

// =========================================================
// Chapter 5: Secrets of Captain Nemo
// =========================================================
window.addBankLesson('bank_eng_story_ch5', 'english', 'Story Ch 5: Secrets of Captain Nemo', [
    // 15 MCQ
    [1, 'mcq', '', 'As the Nautilus traveled, what did Aronnax become more determined to learn?', ['The exact route to the hidden island', 'The truth about Captain Nemo\'s past', 'The scientific names of all the fish', 'The secret code to control the ship'], 1],
    [2, 'mcq', '', 'Captain Nemo was clearly a man of wealth, education, and what else?', ['Uncontrollable anger', 'Extreme happiness', 'Deep hidden sorrow', 'Constant physical pain'], 2],
    [3, 'mcq', '', 'What did Captain Nemo keep completely hidden from everyone?', ['His vast collection of gold', 'The powerful submarine engine', 'His personal past and story', 'The location of the library'], 2],
    [4, 'mcq', '', 'What did Nemo claim he was fighting against when he attacked warships?', ['Human poverty', 'Scientific ignorance', 'Global cruelty', 'Ocean pollution'], 2],
    [5, 'mcq', '', 'Did Captain Nemo ever reveal the details of his personal story to Aronnax?', ['Yes, he told him everything', 'No, he never told the details', 'Yes, but only in a written letter', 'He only told the loyal Conseil'], 1],
    [6, 'mcq', '', 'To Professor Aronnax, Captain Nemo appeared to be both brave and...', ['Extremely weak', 'Very talkative', 'Highly mysterious', 'Completely normal'], 2],
    [7, 'mcq', '', 'Meanwhile, what was the Canadian harpooner Ned Land actively planning?', ['A way to escape from the ship', 'A mutiny to kill the captain', 'A map to find underwater gold', 'A new design for the harpoon'], 0],
    [8, 'mcq', '', 'What was Ned Land\'s main argument regarding their situation?', ['The food on the submarine was terrible', 'No man had the right to keep them prisoners', 'The ocean was too dangerous for humans', 'They should join Nemo\'s crew permanently'], 1],
    [9, 'mcq', '', 'Why did Professor Aronnax hesitate to join Ned Land\'s escape plan?', ['He was too scared of the ocean waves', 'He was torn between scientific discovery and freedom', 'He was physically too weak to swim away', 'He believed Nemo would eventually release them'], 1],
    [10, 'mcq', '', 'How did Conseil react during these tense discussions about escape?', ['He panicked and cried constantly', 'He fought aggressively with Ned Land', 'He remained calm and loyal to his master', 'He betrayed them to Captain Nemo'], 2],
    [11, 'mcq', '', 'One evening, where did Nemo guide the submarine?', ['Through a beautiful coral reef', 'Through a graveyard of sunken ships', 'Into a massive underwater volcano', 'Directly into a busy European port'], 1],
    [12, 'mcq', '', 'What did Aronnax realize about Nemo when they visited the sunken ships?', ['Nemo wanted to steal all the gold', 'Nemo was afraid of dead sailors', 'Nemo saw himself as part of the dead world', 'Nemo was looking for his lost family'], 2],
    [13, 'mcq', '', 'What happened to the mystery of Captain Nemo as the voyage continued?', ['It was finally solved', 'It completely disappeared', 'It deepened significantly', 'It was explained by Conseil'], 2],
    [14, 'mcq', '', 'What grew stronger among the companions as the mystery deepened?', ['Their hatred for each other', 'Their determination to find a way home', 'Their desire to destroy the Nautilus', 'Their love for the underwater life'], 1],
    [15, 'mcq', '', 'What does the word "sorrow" mean in the description of Nemo?', ['Great wealth and power', 'Deep sadness and grief', 'High intelligence and skill', 'Extreme bravery and courage'], 1],
    // 5 T/F
    [16, 'tf', '', 'Aronnax became determined to learn the truth about Nemo.', true],
    [17, 'tf', '', 'Nemo shared all the details of his personal story with Aronnax.', false],
    [18, 'tf', '', 'Nemo claimed that he attacked warships to fight against cruelty.', true],
    [19, 'tf', '', 'Ned Land believed that Nemo had the right to keep them as prisoners.', false],
    [20, 'tf', '', 'Aronnax realized that Nemo saw himself as part of the living world on land.', false],
    // 5 Essay
    [21, 'essay', '', 'What did Captain Nemo keep hidden from his guests?', ['His past', 'his past', 'his personal story']],
    [22, 'essay', '', 'What did Nemo claim he was fighting against?', ['Cruelty', 'cruelty']],
    [23, 'essay', '', 'What was Ned Land planning to do?', ['Escape', 'escape']],
    [24, 'essay', '', 'Between what two things was Aronnax torn?', ['Scientific discovery and freedom', 'Discovery and freedom']],
    [25, 'essay', '', 'Where did Nemo guide the submarine one evening?', ['A graveyard of sunken ships', 'graveyard of sunken ships']]
]);

// =========================================================
// Chapter 6: Escape to Freedom
// =========================================================
window.addBankLesson('bank_eng_story_ch6', 'english', 'Story Ch 6: Escape to Freedom', [
    // 15 MCQ
    [1, 'mcq', '', 'After many months, which coasts did the Nautilus finally near?', ['The coasts of America', 'The coasts of Europe', 'The coasts of Africa', 'The coasts of Australia'], 1],
    [2, 'mcq', '', 'What did Ned Land immediately see this arrival as?', ['A chance to hunt whales', 'A chance to escape', 'A chance to buy fresh food', 'A chance to meet his family'], 1],
    [3, 'mcq', '', 'Under what specific weather condition did the companions decide to escape?', ['During a completely calm and clear night', 'During a beautiful and sunny morning', 'During a very strong and violent storm', 'During a thick and blinding sea fog'], 2],
    [4, 'mcq', '', 'How did the three companions manage to leave the submarine?', ['They swam out through a broken window', 'They secretly lowered a small boat into the sea', 'They stole Nemo\'s personal diving suits', 'They forced Nemo to open the main door'], 1],
    [5, 'mcq', '', 'What primarily drove the companions as they drifted away in the storm?', ['The fear of Captain Nemo', 'The desire for ocean treasures', 'The intense hope of freedom', 'The need to catch fresh fish'], 2],
    [6, 'mcq', '', 'How was the night of their escape described?', ['Short and highly entertaining', 'Long and extremely dangerous', 'Warm, quiet, and very peaceful', 'Bright, clear, and perfectly safe'], 1],
    [7, 'mcq', '', 'What threatened to damage their weak craft during the night?', ['The firing of cannons from the Nautilus', 'The massive tentacles of a giant squid', 'The crashing waves and the fierce wind', 'The sharp rocks of a hidden coral reef'], 2],
    [8, 'mcq', '', 'At what time of day did they finally reach the safety of a shore?', ['Exactly at midnight', 'In the late afternoon', 'At the break of dawn', 'During the sunset'], 2],
    [9, 'mcq', '', 'In what physical condition were the men when they reached the shore?', ['Full of energy and very hungry', 'Exhausted and half-conscious', 'Perfectly healthy and awake', 'Severely injured and bleeding'], 1],
    [10, 'mcq', '', 'What did the men feel under their feet for the first time in months?', ['The cold metal of the ship', 'The soft underwater sand', 'Solid ground and earth', 'The slippery wooden deck'], 2],
    [11, 'mcq', '', 'What did Professor Aronnax do later regarding their experiences?', ['He kept it a total secret', 'He wrote down their incredible adventures', 'He forgot everything that happened', 'He built his own advanced submarine'], 1],
    [12, 'mcq', '', 'What important fact did Aronnax never truly discover?', ['The scientific names of the fish', 'How the submarine generated electricity', 'The full truth about Nemo\'s past', 'The real name of his servant Conseil'], 2],
    [13, 'mcq', '', 'What ultimate fate of the Nautilus remained unknown to Aronnax?', ['Whether it exploded or was sold', 'Whether it still explored or crashed in the storm', 'Whether it was captured by the British navy', 'Whether it sailed to the planet Mars'], 1],
    [14, 'mcq', '', 'What is the final lesson the story teaches about human curiosity and knowledge?', ['They are weak and completely useless', 'They are powerful and can achieve wonders', 'They are dangerous and should be avoided', 'They always lead to terrible destruction'], 1],
    [15, 'mcq', '', 'According to the story\'s conclusion, what may ambition mixed with sorrow lead to?', ['Great wealth and fame', 'Complete global dominance', 'Profound and deep isolation', 'Everlasting joy and peace'], 2],
    // 5 T/F
    [16, 'tf', '', 'The companions escaped during a calm and peaceful night.', false],
    [17, 'tf', '', 'They secretly lowered a small boat into the sea to escape.', true],
    [18, 'tf', '', 'The companions reached the safety of a shore fully energized.', false],
    [19, 'tf', '', 'Aronnax never discovered what finally became of the Nautilus.', true],
    [20, 'tf', '', 'The story concludes that human curiosity and knowledge are powerful.', true],
    // 5 Essay
    [21, 'essay', '', 'Which coasts did the Nautilus near before the escape?', ['The coasts of Europe', 'coasts of Europe', 'Europe']],
    [22, 'essay', '', 'What did the companions secretly lower into the sea to escape?', ['A small boat', 'small boat', 'boat']],
    [23, 'essay', '', 'In what condition did the companions reach the shore?', ['Exhausted and half-conscious', 'exhausted']],
    [24, 'essay', '', 'What did Aronnax do with his experiences later?', ['Wrote down their adventures', 'wrote a book']],
    [25, 'essay', '', 'What may ambition mixed with sorrow lead to?', ['Isolation', 'isolation']]
]);