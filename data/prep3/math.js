export const mathData = {
    id: "math",
    name: "الرياضيات",
    icon: "📐", 

    isLocked: true,        // هل المادة كلها مغلقة؟
        isPdfLocked: true,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟ 
    pdfs: [
        { title: "ملخص المعاصر", link: "https://drive.usercontent.google.com/u/0/uc?id=1Qf_-Q2e7ROLbgUlX3W5mvTw7REUn_KJb&export=download", size: "68MB" },
        { title: "ملخص الأضواء", link: "https://drive.usercontent.google.com/u/0/uc?id=1Fv3CmPjwCaqUVBSpuhL-dDm5i4AUVH6U&export=download", size: "28MB" },
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