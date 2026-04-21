/**
 * منصة الطالب - مادة اللغة الإنجليزية (الصف الثالث الإعدادي - الترم الثاني)
 * ملف قطع الفهم (Reading Comprehension Passages) - معدل
 * 5 قطع × 15 سؤال (5 اختياري، 5 صح وخطأ، 5 مقالي) = 75 سؤال
 */

// =========================================================================
// Passage 1: Climate Change & The Environment
// =========================================================================
window.addExam(
    { id: 'eng_passage_1', subject: 'انجليزي', title: 'Comprehension 1: Climate Change', order: 13 },
    [
        ['passage', 'Climate change is one of the most serious problems our planet faces today. The Earth\'s temperature is rising due to greenhouse gases produced by human activities, such as burning fossil fuels and cutting down forests. This global warming causes polar ice caps to melt, which leads to rising sea levels. As a result, coastal cities are in danger of flooding. To stop this, people must use <u>renewable</u> energy sources like solar and wind power. We should also plant more trees to absorb carbon dioxide. Everyone must work together to protect the environment for future generations.', 
            [
                // 5 MCQ (30 seconds)
                ['mcq', 30, 'What is the main idea of this reading passage?', ['The benefits of traveling around the world', 'The serious problem of global climate change', 'The importance of learning a foreign language', 'The dangers of playing sports in bad weather'], 1],
                ['mcq', 30, 'According to the text, what causes the Earth\'s temperature to rise?', ['Planting too many trees in the forests', 'Using renewable energy like solar power', 'Greenhouse gases from human activities', 'Cleaning the oceans and the coastal cities'], 2],
                ['mcq', 30, 'What happens when the polar ice caps completely melt?', ['The sea levels rise and cause dangerous floods', 'The world becomes much colder than before', 'People start using more wind and solar power', 'Animals migrate to the hot desert environments'], 0],
                ['mcq', 30, 'Why does the writer advise people to plant more trees?', ['To provide more wood for building modern ships', 'To absorb harmful carbon dioxide from the air', 'To create beautiful parks for children to play in', 'To protect the cities from strong ocean winds'], 1],
                ['mcq', 30, 'The underlined word "renewable" in the text means energy that is...', ['Very expensive and extremely difficult to find', 'Highly dangerous and pollutes the environment', 'Natural and can be replaced or used endlessly', 'Used only once and cannot be replaced at all'], 2],
                // 5 T/F (20 seconds)
                ['tf', 20, 'Climate change is a very small problem that does not affect our planet.', false],
                ['tf', 20, 'Burning fossil fuels is one of the human activities causing global warming.', true],
                ['tf', 20, 'Coastal cities are completely safe from the rising sea levels.', false],
                ['tf', 30, 'Solar and wind power are examples of renewable energy sources.', true],
                ['tf', 20, 'We must protect the environment for the people living in the future.', true],
                // 5 Essay (60 seconds)
                ['essay', 60, 'What is rising due to greenhouse gases?', ['The Earth\'s temperature', 'Earth temperature', 'temperature']],
                ['essay', 60, 'What human activity, besides burning fossil fuels, causes global warming? (Mentioned in the text)', ['Cutting down forests', 'cutting down forests']],
                ['essay', 60, 'What are coastal cities in danger of?', ['Flooding', 'flooding', 'floods']],
                ['essay', 60, 'Name one renewable energy source mentioned in the passage.', ['Solar power', 'wind power', 'solar and wind power']],
                ['essay', 60, 'Who must work together to protect the environment?', ['Everyone', 'all people', 'everyone']]
            ]
        ]
    ]
);

// =========================================================================
// Passage 2: Alexander Graham Bell
// =========================================================================
window.addExam(
    { id: 'eng_passage_2', subject: 'انجليزي', title: 'Comprehension 2: Alexander G. Bell', order: 14 },
    [
        ['passage', 'Alexander Graham Bell was a famous scientist and inventor who changed the world. He was born in Scotland in 1847. Both his mother and his wife were deaf, which inspired him to study sound and communication. He wanted to find a way to help people hear and speak better. In 1876, Bell made the first successful telephone call to his assistant, Thomas Watson, saying: "Mr. Watson, come here, I want to see you." This great <u>invention</u> completely changed how people communicate across long distances. Today, we use smart mobile phones, but it all started with Bell\'s brilliant idea.', 
            [
                // 5 MCQ
                ['mcq', 30, 'What is Alexander Graham Bell most famous for inventing?', ['The first electric light bulb', 'The first successful telephone', 'The modern computer system', 'The fast passenger airplane'], 1],
                ['mcq', 30, 'Where was the famous inventor Alexander Graham Bell born?', ['In the United States of America', 'In the United Kingdom of London', 'In a small village in Scotland', 'In a large modern city in France'], 2],
                ['mcq', 30, 'Who inspired Bell to study the science of sound and communication?', ['His intelligent father and his brother', 'His deaf mother and his deaf wife', 'His brilliant assistant Thomas Watson', 'His close friends in the university'], 1],
                ['mcq', 30, 'What were the very first words spoken on the telephone?', ['Hello, can you hear my voice clearly?', 'Mr. Watson, come here, I want to see you.', 'Please answer the phone as soon as possible.', 'This is the greatest invention in human history.'], 1],
                ['mcq', 30, 'The underlined word "invention" refers to...', ['The electric light bulb', 'The smart mobile phone', 'The successful telephone', 'The modern computer'], 2],
                // 5 T/F
                ['tf', 20, 'Alexander Graham Bell was born in the twentieth century.', false],
                ['tf', 20, 'Bell\'s mother and wife could not hear any sounds at all.', true],
                ['tf', 20, 'Thomas Watson was the brilliant scientist who taught Bell.', false],
                ['tf', 20, 'The first successful telephone call was made in the year 1876.', true],
                ['tf', 20, 'Modern smart mobile phones are based on Bell\'s original idea.', true],
                // 5 Essay
                ['essay', 60, 'What was Alexander Graham Bell\'s profession?', ['A scientist and inventor', 'scientist and inventor', 'inventor']],
                ['essay', 60, 'In what year was Alexander Graham Bell born?', ['1847', 'In 1847']],
                ['essay', 60, 'What physical disability did Bell\'s mother and wife have?', ['They were deaf', 'deaf', 'deafness']],
                ['essay', 60, 'Who received the first successful telephone call?', ['Thomas Watson', 'his assistant Thomas Watson', 'Watson']],
                ['essay', 60, 'What do we use today to communicate that started with Bell\'s idea?', ['Smart mobile phones', 'mobile phones', 'mobile phone']]
            ]
        ]
    ]
);

// =========================================================================
// Passage 3: The Amazing Camel (Animal Adaptations)
// =========================================================================
window.addExam(
    { id: 'eng_passage_3', subject: 'انجليزي', title: 'Comprehension 3: The Amazing Camel', order: 15 },
    [
        ['passage', 'The camel is famously known as the "ship of the desert" because it can travel across hot, dry deserts with ease. Camels have special natural adaptations to survive in extreme conditions. They have large, flat feet that prevent them from sinking into the soft sand. Their long, thick eyelashes protect <u>their</u> eyes from blowing sand during fierce storms. A common myth is that camels store water in their humps. In fact, the hump stores fat, which the camel uses for energy when food is very scarce. A thirsty camel can drink up to 100 liters of water in just ten minutes!', 
            [
                // 5 MCQ
                ['mcq', 30, 'What is the camel commonly called by people who live in the desert?', ['The king of the hot jungle', 'The fast train of the sands', 'The ship of the dry desert', 'The brave horse of the heat'], 2],
                ['mcq', 30, 'Why do camels have large, flat feet according to the reading passage?', ['To run incredibly fast during animal races', 'To stop them from sinking into the soft sand', 'To kick fierce predators that try to attack them', 'To crush hard rocks and stones while walking'], 1],
                ['mcq', 30, 'The underlined word "their" refers to...', ['Fierce storms', 'Large flat feet', 'The camels', 'Extreme conditions'], 2],
                ['mcq', 30, 'What does the camel actually store inside its large hump?', ['Large amounts of drinking water', 'Fat to be used for future energy', 'Bones to protect its sensitive back', 'Special muscles to help it carry loads'], 1],
                ['mcq', 30, 'How much water can a very thirsty camel drink in just ten minutes?', ['About ten liters of water', 'Up to fifty liters of water', 'Up to one hundred liters of water', 'More than two hundred liters of water'], 2],
                // 5 T/F
                ['tf', 20, 'Camels find it very difficult to travel across the hot, dry desert.', false],
                ['tf', 20, 'Camels sink deeply into the sand because their feet are very small.', false],
                ['tf', 20, 'It is a scientific fact that camels store water directly in their humps.', false],
                ['tf', 20, 'The fat stored in the hump gives the camel energy when food is scarce.', true],
                ['tf', 20, 'Camels can drink massive amounts of water in a very short period of time.', true],
                // 5 Essay
                ['essay', 60, 'What natural adaptation helps camels avoid sinking into the sand?', ['Large flat feet', 'large flat feet', 'flat feet']],
                ['essay', 60, 'What protects the camel\'s eyes during fierce desert storms?', ['Long thick eyelashes', 'long eyelashes', 'eyelashes']],
                ['essay', 60, 'What does the camel use the fat in its hump for?', ['For energy when food is scarce', 'for energy', 'energy']],
                ['essay', 60, 'What is the false myth about what camels store in their humps?', ['That they store water', 'they store water', 'storing water']],
                ['essay', 60, 'How long does it take a camel to drink 100 liters of water?', ['Ten minutes', '10 minutes', 'just ten minutes']]
            ]
        ]
    ]
);

// =========================================================================
// Passage 4: The Importance of Reading
// =========================================================================
window.addExam(
    { id: 'eng_passage_4', subject: 'انجليزي', title: 'Comprehension 4: The Importance of Reading', order: 16 },
    [
        ['passage', 'Reading is a very useful habit that helps people expand their knowledge and understand the world better. When you read a good book, you can travel to different countries and times without even leaving your room. Reading also significantly improves your memory and increases your vocabulary. Moreover, <u>it</u> is a great way to relax and reduce stress after a long, tiring day of work or study. There are many types of interesting books, such as science fiction, history, and biographies. Experts advise parents to encourage their children to read from a very young age to build a successful society.', 
            [
                // 5 MCQ
                ['mcq', 30, 'What is the main benefit of reading mentioned at the beginning of the text?', ['It helps people expand their knowledge and understand the world', 'It allows people to sleep much better and longer during the night', 'It helps people earn a lot of money and become very wealthy quickly', 'It improves people\'s physical strength and builds larger muscles'], 0],
                ['mcq', 30, 'How can you "travel to different countries" without leaving your room?', ['By watching long documentaries on television', 'By reading a good and highly descriptive book', 'By browsing various social media applications', 'By talking to foreign friends on the telephone'], 1],
                ['mcq', 30, 'According to the passage, what does reading improve and increase?', ['It improves physical fitness and increases daily energy', 'It improves writing speed and increases mathematical skills', 'It improves personal memory and increases spoken vocabulary', 'It improves speaking volume and increases breathing capacity'], 2],
                ['mcq', 30, 'The underlined word "it" in the passage refers to...', ['Your memory', 'Your vocabulary', 'The world', 'Reading'], 3],
                ['mcq', 30, 'What do educational experts strongly advise parents to do?', ['To buy their children expensive modern electronic gaming devices', 'To force their children to work hard and earn money from a young age', 'To encourage their children to start reading from a very young age', 'To prevent their children from reading science fiction and history books'], 2],
                // 5 T/F
                ['tf', 20, 'Reading makes it difficult for people to understand the world around them.', false],
                ['tf', 20, 'A reader\'s vocabulary and memory can be improved by reading books.', true],
                ['tf', 20, 'Reading is known to increase stress and anxiety after a hard day of work.', false],
                ['tf', 20, 'Science fiction, history, and biographies are all types of interesting books.', true],
                ['tf', 20, 'A society that reads regularly is considered a successful and developed society.', true],
                // 5 Essay
                ['essay', 60, 'What does reading help people expand?', ['Their knowledge', 'knowledge']],
                ['essay', 60, 'What is one psychological benefit of reading after a long day?', ['It reduces stress', 'it relaxes you', 'reduce stress', 'relax']],
                ['essay', 60, 'Name two types of books mentioned in the passage.', ['Science fiction and history', 'History and biographies', 'Science fiction and biographies']],
                ['essay', 60, 'At what age should parents encourage their children to read?', ['From a very young age', 'a young age', 'young age']],
                ['essay', 60, 'What kind of society does reading help build?', ['A successful society', 'successful and developed society', 'successful']]
            ]
        ]
    ]
);

// =========================================================================
// Passage 5: Healthy Lifestyle
// =========================================================================
window.addExam(
    { id: 'eng_passage_5', subject: 'انجليزي', title: 'Comprehension 5: A Healthy Lifestyle', order: 17 },
    [
        ['passage', 'Living a healthy lifestyle is extremely important to avoid dangerous illnesses and stay physically active. A truly healthy lifestyle includes eating the right kinds of food, exercising regularly, and getting enough sleep. You should eat plenty of fresh fruits and green vegetables while avoiding too much sugar or <u>greasy</u> fast food. Furthermore, drinking at least eight glasses of clean water a day helps your body work properly. Exercise is also essential; walking or playing sports for just thirty minutes daily strengthens your heart and muscles. Finally, sleeping for about eight hours every night gives your brain and body the rest they need.', 
            [
                // 5 MCQ
                ['mcq', 30, 'Why is living a healthy lifestyle extremely important for people?', ['To easily win international sports competitions and get famous', 'To successfully avoid dangerous illnesses and stay physically active', 'To look much younger and attract the attention of other people', 'To save a large amount of money spent on buying delicious food'], 1],
                ['mcq', 30, 'The underlined word "greasy" in the text means food that is...', ['Very healthy and fresh', 'Full of oil and unhealthy fat', 'Cooked without any salt', 'Completely natural and organic'], 1],
                ['mcq', 30, 'How much clean water should a person try to drink every single day?', ['About two or three very small cups of water', 'Exactly five liters of freezing cold water', 'At least eight glasses of clean water a day', 'No more than four medium glasses of water'], 2],
                ['mcq', 30, 'What are the main benefits of walking or playing sports for thirty minutes?', ['It completely stops the body from feeling any signs of hunger', 'It dramatically strengthens the human heart and the body muscles', 'It makes the person incredibly intelligent and mentally focused', 'It helps the body quickly absorb high amounts of processed sugar'], 1],
                ['mcq', 30, 'How many hours of sleep are recommended to give the brain enough rest?', ['Around four hours of light sleep every night', 'Exactly ten hours of continuous deep sleep', 'About eight hours of good sleep every night', 'No more than six hours of sleep per day'], 2],
                // 5 T/F
                ['tf', 20, 'Eating fresh fruits and green vegetables is bad for a healthy lifestyle.', false],
                ['tf', 20, 'Drinking enough clean water helps the human body to work properly.', true],
                ['tf', 20, 'Exercising regularly can make your heart and body muscles much weaker.', false],
                ['tf', 20, 'You should try to walk or do some sports for thirty minutes daily.', true],
                ['tf', 20, 'Sleeping well allows your brain and body to function well the next day.', true],
                // 5 Essay
                ['essay', 60, 'What does a healthy lifestyle help you avoid?', ['Dangerous illnesses', 'illnesses', 'dangerous illness']],
                ['essay', 60, 'What kind of food should you eat plenty of?', ['Fresh fruits and green vegetables', 'fruits and vegetables', 'fresh fruits']],
                ['essay', 60, 'How many glasses of water should you drink a day?', ['At least eight glasses', 'eight glasses', '8 glasses']],
                ['essay', 60, 'How many minutes of exercise are recommended daily?', ['Thirty minutes', '30 minutes', 'thirty']],
                ['essay', 60, 'Why is sleeping for about eight hours important?', ['It gives the brain and body the rest they need', 'to rest the brain and body', 'rest']]
            ]
        ]
    ]
);