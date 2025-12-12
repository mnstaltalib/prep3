export const studiesData = {
    id: "studies",
    name: "الدراسات",
    icon: "🌍", 

    isLocked: false,        // هل المادة كلها مغلقة؟
        isPdfLocked: false,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟ 
    pdfs: [
        { title: "ملخص الامتحان", link: "https://drive.usercontent.google.com/u/0/uc?id=1XYBYt_N-mkSkP3eIFy9IS3f6x3VdmuOF&export=download", size: "82MB" }
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