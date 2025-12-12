export const scienceData = {
    id: "science",
    name: "العلوم",
    icon: "🧬", 

    isLocked: false,        // هل المادة كلها مغلقة؟
        isPdfLocked: false,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟ 
    pdfs: [
        { title: "ملخص الأضواء", link: "https://drive.usercontent.google.com/download?id=1DrWoevh09QokMdW18kUosciY5YsOce0Q&export=download&authuser=1&confirm=t&uuid=8a4724cf-691f-4ff9-93ae-fe387d5bd97d&at=ALWLOp6o9unNDJnId3nzKUZRhwQP:1765502036519", size: "51MB" },
        { title: "ملخص الامتحان", link: "https://drive.usercontent.google.com/download?id=1OCgMnc0PeP3xD8efF37ekTueEqI4NVYK&export=download&authuser=1&confirm=t&uuid=ad157fcd-c5c6-41a5-a6c7-981059d3726c&at=ALWLOp5VaVDAZZ4W_jNGKv3vKINS:1765502217989", size: "82MB" },
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