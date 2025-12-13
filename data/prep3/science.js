export const scienceData = {
    id: "science",
    name: "العلوم",
    icon: "🧬", 

    isLocked: false,        // هل المادة كلها مغلقة؟
        isPdfLocked: false,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟ 
    pdfs: [
        { title: "ملخص الامتحان", link: "https://drive.usercontent.google.com/u/0/uc?id=1OCgMnc0PeP3xD8efF37ekTueEqI4NVYK&export=download", size: "82MB" },
        { title: "ملخص الأضواء", link: "https://drive.usercontent.google.com/u/0/uc?id=1DrWoevh09QokMdW18kUosciY5YsOce0Q&export=download", size: "51MB" },
    ],
    lessons: [
{
  title: "Unit",
  quizzes: [
    { question: "Question Here", options: ["0", "1", "2", "3"], answer: 1 },
  ]
}
        // ... باقي الدروس ...
    ]
};