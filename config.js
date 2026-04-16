// config.js
const CONFIG = {
    appVersion: "2.0.0",
    
    // إعدادات الأقسام الرئيسية
    modules: {
        home:      { id: 'home', title: 'الرئيسية', icon: 'fa-home' },
        questions: { id: 'questions', title: 'بنك الأسئلة', icon: 'fa-question-circle', color: 'green', isLocked: false, msg: "تحديثات جارية." },
        exams:     { id: 'exams', title: 'الاختبارات', icon: 'fa-pen-to-square', color: 'red', isLocked: false, msg: "مغلق للصيانة." },
        library:   { id: 'library', title: 'المكتبة الرقمية', icon: 'fa-book', color: 'blue', isLocked: false, msg: "قريباً." },
        capsule:   { id: 'capsule', title: 'الكبسولة', icon: 'fa-flask', color: 'yellow', isLocked: false, msg: "قريباً." }
    },

    // إعدادات المواد والمسارات (حسب طلبك)
    subjects: [
        { 
            id: 'arabic', 
            name: 'لغة عربية', 
            icon: 'fa-book', 
            color: 'green',
            paths: {
                bank: 'data/bank/arabic/',   // مسار بنك الأسئلة
                exams: 'data/exams/arabic/'  // مسار الاختبارات
            },
            locked: { questions: false, exams: false, capsule: true } 
        },
        { 
            id: 'science', 
            name: 'علوم', 
            icon: 'fa-flask', 
            color: 'purple',
            paths: { bank: 'data/bank/science/', exams: 'data/exams/science/' },
            locked: { questions: false, exams: true, capsule: true } 
        },
        { 
            id: 'social', 
            name: 'دراسات', 
            icon: 'fa-globe', 
            color: 'yellow',
            paths: { bank: 'data/bank/social/', exams: 'data/exams/social/' },
            locked: { questions: false, exams: false, capsule: false } 
        },
        { 
            id: 'math', 
            name: 'رياضيات', 
            icon: 'fa-calculator', 
            color: 'blue',
            paths: { bank: 'data/bank/math/', exams: 'data/exams/math/' },
            locked: { questions: false, exams: false, capsule: true } 
        },
        { 
            id: 'english', 
            name: 'إنجليزي', 
            icon: 'fa-language', 
            color: 'red',
            paths: { bank: 'data/bank/english/', exams: 'data/exams/english/' },
            locked: { questions: false, exams: false, capsule: true } 
        }
    ]
};