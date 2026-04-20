// =========================================================
// ملف: data/library.js
// قسم: المكتبة الرقمية (تحديث شامل)
// =========================================================

// التأكد من تهيئة قاعدة البيانات
window.DB = window.DB || { bank: [], exams: [], library: [], files: {}, capsule: {} };

// إضافة الملفات إلى المكتبة بتنسيقها الجديد
window.DB.library.push(
    { 
        id: 'lib_ar_01', 
        subject: 'arabic', 
        title: 'ملخص الاضواء - لغة عربية - الترم الثاني', 
        url: 'https://drive.google.com/file/d/1z_NPKvcIK7XXUBXgWnLQUygHEqyKB12a/view' 
    },
    { 
        id: 'lib_sc_01', 
        subject: 'science', 
        title: 'ملخص الاضواء - علوم - الترم الثاني', 
        url: 'https://drive.google.com/file/d/1ipgQmiIW6xL7ev0UASalIzcos64IWMbd/view' 
    },
    { 
        id: 'lib_ma_01', 
        subject: 'math', 
        title: 'ملخص الاضواء - رياضيات - الترم الثاني', 
        url: 'https://drive.google.com/file/d/1g9AsrKId36EickrMLCQa_vU2NXoxhZAC/view' 
    },
    { 
        id: 'lib_so_01', 
        subject: 'social', 
        title: 'ملخص الاضواء - دراسات - الترم الثاني', 
        url: 'https://drive.google.com/file/d/1oqacpCTnYvH_q9nmtW8iT0QFrk5AILdU/view' 
    },
    { 
        id: 'lib_en_01', 
        subject: 'english', 
        title: 'ملخص GEM - إنجليزي - الترم الثاني', 
        url: 'https://drive.google.com/file/d/15fLyhjH2mso2vtzA1Z2zUPz8LZTAqPbm/view' 
    }
);