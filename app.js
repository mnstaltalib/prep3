// app.js

const App = {
    currentModule: 'home',

    init: function() {
        // تحديث أيقونة الوضع الليلي عند التحميل
        this.updateThemeIcons();
    },

    toggleTheme: function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.updateThemeIcons();
    },

    updateThemeIcons: function() {
        const isDark = document.documentElement.classList.contains('dark');
        const deskIcon = document.getElementById('theme-icon-desktop');
        const mobIcon = document.getElementById('theme-icon-mobile');
        
        if (deskIcon) deskIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (mobIcon) mobIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    },

    navigate: function(moduleId) {
        this.currentModule = moduleId;
        
        // 1. تلوين الأزرار في الديسكتوب (Top Nav)
        document.querySelectorAll('.desktop-nav-btn').forEach(btn => {
            btn.className = "desktop-nav-btn px-5 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all";
        });
        const activeDesk = document.querySelector(`.desktop-nav-btn[data-target="${moduleId}"]`);
        if (activeDesk) {
            activeDesk.className = "desktop-nav-btn active bg-white dark:bg-neutral-900 shadow-sm px-5 py-2 rounded-xl text-sm font-extrabold text-blue-600 dark:text-blue-400 transition-all";
        }

        // 2. تلوين الأزرار في الموبايل (Bottom Nav)
        document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
            btn.classList.remove('text-blue-600', 'dark:text-blue-400');
            btn.classList.add('text-slate-400');
            btn.querySelector('.nav-icon-wrapper').classList.remove('bg-blue-100', 'dark:bg-blue-900/30');
        });
        const activeMob = document.querySelector(`.mobile-nav-btn[data-target="${moduleId}"]`);
        if (activeMob) {
            activeMob.classList.remove('text-slate-400');
            activeMob.classList.add('text-blue-600', 'dark:text-blue-400');
            activeMob.querySelector('.nav-icon-wrapper').classList.add('bg-blue-100', 'dark:bg-blue-900/30');
        }

        // 3. إخفاء جميع الأقسام (Views)
        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.add('hidden');
            sec.classList.remove('page-enter');
        });

        // 4. معالجة الواجهة المطلوبة
        if (moduleId === 'home') {
            const homeView = document.getElementById('view-home');
            homeView.classList.remove('hidden');
            // Timeout صغير لتفعيل الانميشن
            setTimeout(() => homeView.classList.add('page-enter'), 10);
            return;
        }

        // التعامل مع أقسام المواد (بنك أسئلة، اختبارات، كبسولة)
        const selectorView = document.getElementById('view-module-selector');
        selectorView.classList.remove('hidden');
        setTimeout(() => selectorView.classList.add('page-enter'), 10);
        
        const config = CONFIG.modules[moduleId];
        
        // التحقق من القفل العام للقسم
        if (config.isLocked) {
            document.getElementById('module-subjects-screen').classList.add('hidden');
            document.getElementById('selection-list-screen').classList.add('hidden');
            document.getElementById('module-lock-screen').classList.remove('hidden');
            document.getElementById('module-lock-msg').innerText = config.msg;
        } else {
            document.getElementById('module-lock-screen').classList.add('hidden');
            document.getElementById('selection-list-screen').classList.add('hidden');
            document.getElementById('module-subjects-screen').classList.remove('hidden');
            
            // تهيئة رأس القسم
            const iconBox = document.getElementById('module-icon-box');
            iconBox.className = `w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg shadow-${config.color}-500/40 bg-${config.color}-500`;
            iconBox.innerHTML = `<i class="fa-solid ${config.icon}"></i>`;
            
            document.getElementById('module-title').innerText = config.title;
            document.getElementById('module-desc').innerText = `اختر المادة لعرض ${config.title}`;

            this.renderSubjectsGrid(moduleId);
        }
    },

    renderSubjectsGrid: function(moduleId) {
        const grid = document.getElementById('subjects-grid');
        grid.innerHTML = '';

        CONFIG.subjects.forEach(subject => {
            // التحقق من قفل المادة في هذا القسم تحديداً
            const isLocked = subject.locked[moduleId];
            
            // كلاسات التصميم المتقدمة
            const baseClasses = "relative overflow-hidden p-5 md:p-6 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer h-32 md:h-40";
            
            let stateClasses, iconHtml;

            if (isLocked) {
                stateClasses = "bg-slate-50 dark:bg-neutral-800/50 border-slate-200 dark:border-neutral-800 opacity-60";
                iconHtml = `<i class="fa-solid fa-lock text-3xl text-slate-400 mb-3"></i>`;
            } else {
                stateClasses = `bg-white dark:bg-[#1e1e1e] border-slate-100 dark:border-neutral-800 hover:shadow-xl hover:shadow-${subject.color}-500/10 hover:-translate-y-2 hover:border-${subject.color}-200 dark:hover:border-${subject.color}-900/50`;
                iconHtml = `
                    <div class="absolute inset-0 bg-gradient-to-b from-${subject.color}-50/50 to-transparent dark:from-${subject.color}-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <i class="fa-solid ${subject.icon} text-4xl text-${subject.color}-500 mb-3 group-hover:scale-110 transition-transform relative z-10"></i>
                `;
            }

            const card = document.createElement('div');
            card.className = `${baseClasses} ${stateClasses}`;
            card.innerHTML = `
                ${iconHtml}
                <span class="font-bold text-sm md:text-base text-slate-800 dark:text-gray-200 relative z-10">${subject.name}</span>
            `;

            card.onclick = () => {
                if (isLocked) {
                    alert('🔒 هذه المادة غير متاحة حالياً في هذا القسم.');
                } else {
                    this.showSelectionList(subject);
                }
            };

            grid.appendChild(card);
        });
    },

    showSelectionList: function(subject) {
        document.getElementById('module-subjects-screen').classList.add('hidden');
        document.getElementById('selection-list-screen').classList.remove('hidden');
        
        const moduleTitle = CONFIG.modules[this.currentModule].title;
        document.getElementById('selection-list-title').innerText = `${moduleTitle} - ${subject.name}`;
        
        const listItems = document.getElementById('selection-list-items');
        listItems.innerHTML = '';

        // مسار سحب البيانات حسب إعدادات المادة والقسم
        let dataPath = "";
        if(this.currentModule === 'questions') dataPath = subject.paths.bank;
        if(this.currentModule === 'exams') dataPath = subject.paths.exams;

        // **هنا سيتم سحب الملفات (الدروس أو الاختبارات) من المسار**
        // لأغراض العرض، سنضع بيانات وهمية توضح الشكل:
        const dummyFiles = [
            { id: 1, title: 'الدرس الأول: المنادى', count: 25 },
            { id: 2, title: 'الدرس الثاني: البدل', count: 18 },
            { id: 3, title: 'اختبار الوحدة الأولى', count: 40 }
        ];

        dummyFiles.forEach(file => {
            listItems.innerHTML += `
                <div onclick="alert('سيتم ربط هذا الزر بـ Engine.js لفتح الملف من المسار: ${dataPath}')" 
                     class="group p-4 bg-white dark:bg-neutral-800 border border-slate-100 dark:border-neutral-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer transition-all flex justify-between items-center hover:shadow-md">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-slate-50 dark:bg-neutral-900 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            <i class="fa-solid fa-file-lines"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-sm text-slate-800 dark:text-white">${file.title}</h3>
                            <p class="text-[11px] text-slate-500">${file.count} سؤال</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-chevron-left text-slate-300 group-hover:text-blue-500 transition-colors"></i>
                </div>
            `;
        });
    },

    showSubjectsGrid: function() {
        document.getElementById('selection-list-screen').classList.add('hidden');
        document.getElementById('module-subjects-screen').classList.remove('hidden');
    }
};

// تشغيل التطبيق عند التحميل
document.addEventListener('DOMContentLoaded', () => App.init());