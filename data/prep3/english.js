export const englishData = {
    id: "english",
    name: "English",
    icon: "🅰️", 

    isLocked: true,        // هل المادة كلها مغلقة؟
        isPdfLocked: true,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟

    pdfs: [
        { title: "مذكرة النحو - أ/ إبراهيم صالح", link: "#", size: "5MB" }
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