export const arabicData = {
    id: "arabic",
    name: "اللغة العربية",
    icon: "📖", 

    isLocked: false,        // هل المادة كلها مغلقة؟
        isPdfLocked: false,     // هل المكتبة الرقمية مغلقة؟
        isQuizLocked: true,     // هل الاختبارات مغلقة؟

    pdfs: [
        { title: "ملخص الامتحان", link: "https://drive.usercontent.google.com/u/0/uc?id=1idRMf5bdN6KmSNgt9jNvULiQNNyPxko5&export=download", size: "61MB" },
        { title: "ملخص الأضواء", link: "https://drive.usercontent.google.com/u/0/uc?id=1Pv2Fymdgf69sRP5lPmZJwGzqt7kZNd0S&export=download", size: "80MB" },
    ],
    lessons: [
{
  title: "نصوص: عباد الرحمن (تحليل شامل - 3 إعدادي)",
  quizzes: [
    { question: "مفرد كلمة (عباد) في قوله تعالى (وعباد الرحمن) هو:", options: ["عابد", "عبد", "عبيد", "معبود"], answer: 1 },
  ]
}
        // ... باقي الدروس ...
    ]
};