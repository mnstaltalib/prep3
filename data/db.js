/* data/db.js */

// استيراد ملفات المواد (تأكد من المسارات الصحيحة)
import { arabicData } from './prep3/arabic.js';
import { scienceData } from './prep3/science.js';
import { studiesData } from './prep3/studies.js';
import { mathData } from './prep3/math.js';
import { englishData } from './prep3/english.js';
// قم بإنشاء ملفات فارغة لباقي المواد واستوردها بنفس الطريقة
// import { mathData } from './prep3/math.js';
// import { scienceData } from './prep3/science.js';

export const db = [
  {
    id: "3prep",
    name: "الصف الثالث الإعدادي",
    description: "الترم الأول - 2025",
    subjects: [
        arabicData,
        scienceData,
        studiesData,
        mathData,
        englishData,
        // scienceData,
        // ... ضع باقي المتغيرات هنا
        
    ]
  }
];