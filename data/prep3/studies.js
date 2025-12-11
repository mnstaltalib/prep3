export const studiesData = {
    id: "studies",
    name: "الدراسات",
    icon: "🌍", 

    isLocked: true,        // هل المادة كلها مغلقة؟
        isPdfLocked: true,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟ 
    pdfs: [
        { title: "اسم المذكرة", link: "#", size: "5MB" }
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