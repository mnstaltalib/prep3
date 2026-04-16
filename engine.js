// ============================================================================
// Engine.js - محرك الاختبارات والتدريب الذكي (الإصدار 2.0)
// ============================================================================

const Engine = {
    // حالة المحرك
    state: {
        module: null,       // 'questions' (بنك) أو 'exams' (اختبار)
        subject: null,      // المادة الحالية
        queue: [],          // طابور الأسئلة
        currentIndex: 0,    // رقم السؤال الحالي
        timer: null,        // مؤقت الاختبار
        timeLeft: 0,        // الوقت المتبقي للسؤال
        isAnswered: false,  // لمنع الإجابة مرتين
        stats: { correct: 0, wrong: 0, skipped: 0 },
        history: []         // سجل الإجابات للتقرير النهائي
    },

    // 1. تهيئة المحرك وبناء واجهة المستخدم (HTML Injection)
    init: function() {
        const container = document.getElementById('view-quiz-engine');
        if (!container) return;

        // حقن واجهة الاختبار والنتيجة داخل الحاوية الفارغة
        container.innerHTML = `
            <div id="engine-quiz-view" class="hidden">
                <div class="bg-white dark:bg-[#16181d] rounded-2xl shadow-sm border border-slate-100 dark:border-neutral-800 overflow-hidden mb-4 md:mb-6">
                    <div class="flex justify-between items-center p-4 border-b border-slate-100 dark:border-neutral-800/50">
                        <div class="font-bold text-slate-600 dark:text-slate-300 text-sm md:text-base">
                            سؤال <span id="eng-q-current" class="text-blue-600 dark:text-blue-400">1</span> من <span id="eng-q-total">10</span>
                            <span id="eng-q-badge" class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] md:text-xs px-2 py-1 rounded-md mr-2 border border-blue-200 dark:border-blue-800"></span>
                        </div>
                        <div id="eng-header-action"></div>
                    </div>
                    <div id="eng-timer-container" class="hidden h-1.5 w-full bg-slate-100 dark:bg-neutral-800">
                        <div id="eng-timer-bar" class="h-full bg-green-500 transition-all duration-1000 ease-linear" style="width: 100%;"></div>
                    </div>
                </div>

                <div class="relative bg-white dark:bg-[#16181d] rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800 p-5 md:p-8 min-h-[300px] mb-6">
                    
                    <div id="eng-blur-overlay" class="hidden absolute inset-0 z-20 bg-white/70 dark:bg-[#16181d]/80 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl">
                        <div class="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-xl text-center max-w-[280px] border border-slate-100 dark:border-neutral-800">
                            <i class="fa-solid fa-eye-slash text-4xl text-slate-400 mb-4"></i>
                            <h3 class="text-lg font-black mb-2 dark:text-white">السؤال مخفي</h3>
                            <p class="text-xs text-slate-500 mb-6">العداد سيبدأ فور إظهار السؤال.</p>
                            <button onclick="Engine.revealQuestion()" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-all shadow-md shadow-blue-500/20">إظهار وبدء الوقت</button>
                        </div>
                    </div>

                    <div id="eng-passage-area" class="hidden mb-6 p-4 md:p-6 bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl border border-yellow-200 dark:border-yellow-900/30 text-slate-800 dark:text-slate-200 leading-relaxed text-sm md:text-base font-medium"></div>
                    
                    <h3 id="eng-question-text" class="font-black mb-6 md:mb-8 text-lg md:text-2xl leading-relaxed text-slate-900 dark:text-white"></h3>
                    
                    <div id="eng-interaction-area" class="w-full"></div>
                    
                    <div id="eng-feedback-area" class="hidden overflow-hidden transition-all duration-500 opacity-0 max-h-0 mt-6 border-t border-slate-100 dark:border-neutral-800/50 pt-6"></div>
                </div>

                <div class="text-center">
                    <button id="eng-btn-next" onclick="Engine.nextQuestion()" class="hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 px-10 py-3.5 rounded-xl font-bold shadow-lg transition-all w-full md:w-auto text-sm md:text-base">
                        السؤال التالي <i class="fa-solid fa-arrow-left ml-2"></i>
                    </button>
                </div>
            </div>

            <div id="engine-results-view" class="hidden">
                <div class="bg-white dark:bg-[#16181d] p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800 text-center mb-6">
                    <h2 class="text-3xl md:text-4xl font-black mb-2 dark:text-white">النتيجة النهائية</h2>
                    <p class="text-slate-500 mb-6 text-sm">تم الانتهاء من التدريب بنجاح.</p>
                    
                    <div id="eng-res-badge" class="text-xl md:text-2xl font-black mb-8 py-3 px-8 rounded-2xl inline-block border-2 shadow-sm"></div>
                    
                    <div class="grid grid-cols-3 gap-3 md:gap-6 mb-8 max-w-lg mx-auto">
                        <div class="p-4 bg-slate-50 dark:bg-neutral-800/50 rounded-2xl border border-slate-100 dark:border-neutral-800">
                            <span class="block text-xs md:text-sm text-slate-500 mb-1 font-bold">المجموع</span>
                            <span id="eng-res-total" class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white">0</span>
                        </div>
                        <div class="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/30">
                            <span class="block text-xs md:text-sm text-green-600 mb-1 font-bold">صحيح</span>
                            <span id="eng-res-correct" class="text-2xl md:text-3xl font-black text-green-600">0</span>
                        </div>
                        <div class="p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30">
                            <span class="block text-xs md:text-sm text-red-600 mb-1 font-bold">خطأ</span>
                            <span id="eng-res-wrong" class="text-2xl md:text-3xl font-black text-red-600">0</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col md:flex-row justify-center gap-3 max-w-sm mx-auto">
                        <button onclick="App.navigate('home')" class="w-full bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-700 dark:text-white px-6 py-3 rounded-xl font-bold transition-all border border-slate-200 dark:border-neutral-700">الرئيسية</button>
                    </div>
                </div>

                <div class="bg-white dark:bg-[#16181d] p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-neutral-800">
                    <h3 class="text-xl font-black mb-6 border-b border-slate-100 dark:border-neutral-800/50 pb-4 dark:text-white"><i class="fa-solid fa-list-check text-blue-500 ml-2"></i> تقرير الإجابات</h3>
                    <div id="eng-report-list" class="flex flex-col gap-4"></div>
                </div>
            </div>
        `;
    },

    // 2. تشغيل المحرك وتمرير البيانات
    start: function(module, subject, rawQuestions) {
        this.state.module = module;
        this.state.subject = subject;
        this.state.currentIndex = 0;
        this.state.stats = { correct: 0, wrong: 0, skipped: 0 };
        this.state.history = [];
        
        // **فلترة الأسئلة الذكية:** // إذا كنا في "بنك الأسئلة" نحذف أسئلة القطعة والاستخراج لأنها تتطلب وقتاً وتركيزاً مخصصاً للاختبارات
        if (module === 'questions') {
            this.state.queue = rawQuestions.filter(q => q.type !== 'passage' && q.type !== 'extract');
        } else {
            this.state.queue = rawQuestions;
        }

        if (this.state.queue.length === 0) {
            alert("لا توجد أسئلة متوافقة مع هذا القسم!");
            return;
        }

        // الانتقال لواجهة المحرك
        document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
        const engineView = document.getElementById('view-quiz-engine');
        engineView.classList.remove('hidden');
        
        document.getElementById('engine-results-view').classList.add('hidden');
        document.getElementById('engine-quiz-view').classList.remove('hidden');
        
        // أنيميشن الدخول
        engineView.classList.remove('animate-enter');
        void engineView.offsetWidth;
        engineView.classList.add('animate-enter');

        this.setupHeader();
        this.loadQuestion();
    },

    // 3. تجهيز الهيدر (وقت أو زر إنهاء)
    setupHeader: function() {
        const actionContainer = document.getElementById('eng-header-action');
        const timerContainer = document.getElementById('eng-timer-container');

        if (this.state.module === 'exams') {
            // نظام الاختبارات: مؤقت
            actionContainer.innerHTML = `<div class="text-red-500 font-bold font-mono text-lg bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-lg border border-red-100 dark:border-red-900/30"><i class="fa-regular fa-clock"></i> <span id="eng-timer-val">00</span></div>`;
            timerContainer.classList.remove('hidden');
        } else {
            // بنك الأسئلة: زر إنهاء مبكر
            actionContainer.innerHTML = `<button onclick="Engine.finish()" class="text-xs md:text-sm bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 transition-all border border-slate-200 dark:border-neutral-700"><i class="fa-solid fa-flag-checkered ml-1"></i> إنهاء التدريب</button>`;
            timerContainer.classList.add('hidden');
        }
    },

    // 4. تحميل السؤال الحالي
    loadQuestion: function() {
        this.state.isAnswered = false;
        const q = this.state.queue[this.state.currentIndex];
        
        // تحديث العدادات
        document.getElementById('eng-q-current').innerText = this.state.currentIndex + 1;
        document.getElementById('eng-q-total').innerText = this.state.queue.length;
        
        // تحديد نوع السؤال باللغة العربية
        const badgeMap = { 'mcq': 'اختياري', 'tf': 'صح وخطأ', 'essay': 'مقالي', 'extract': 'استخراج', 'passage': 'قطعة' };
        document.getElementById('eng-q-badge').innerText = badgeMap[q.type] || 'سؤال';

        // إخفاء التغذية الراجعة والزر
        const feedback = document.getElementById('eng-feedback-area');
        feedback.classList.remove('opacity-100', 'max-h-[1000px]');
        feedback.classList.add('opacity-0', 'max-h-0');
        setTimeout(() => feedback.classList.add('hidden'), 500);
        document.getElementById('eng-btn-next').classList.add('hidden');

        // التعامل مع القطعة
        const passageArea = document.getElementById('eng-passage-area');
        if (q.passageText) {
            passageArea.innerHTML = `<i class="fa-solid fa-quote-right text-yellow-500 ml-2 text-xl opacity-50"></i> ${q.passageText}`;
            passageArea.classList.remove('hidden');
        } else {
            passageArea.classList.add('hidden');
        }

        // عرض السؤال
        document.getElementById('eng-question-text').innerText = q.question;

        // رسم منطقة التفاعل بناءً على نوع السؤال
        const intArea = document.getElementById('eng-interaction-area');
        intArea.innerHTML = '';

        if (q.type === 'mcq') {
            // اختياري
            intArea.className = "grid grid-cols-1 md:grid-cols-2 gap-3";
            q.options.forEach((opt, i) => {
                intArea.innerHTML += `
                    <button onclick="Engine.submitAnswer(${i}, this)" class="eng-opt-btn text-right p-4 rounded-2xl border border-slate-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all font-bold text-slate-700 dark:text-slate-200 flex items-center gap-3 group">
                        <span class="eng-opt-letter w-8 h-8 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-900 text-slate-400 group-hover:text-blue-600 shadow-sm border border-slate-100 dark:border-neutral-700 shrink-0 transition-colors">${String.fromCharCode(1601 + i)}</span> 
                        <span class="flex-1 leading-relaxed">${opt}</span>
                    </button>
                `; // 1601 هو ترميز حرف 'أ'
            });
        } 
        else if (q.type === 'tf') {
            // صح وخطأ
            intArea.className = "grid grid-cols-2 gap-4 max-w-md mx-auto";
            const tfOptions = [{ text: 'صح', val: true, icon: 'fa-check', col: 'green' }, { text: 'خطأ', val: false, icon: 'fa-xmark', col: 'red' }];
            tfOptions.forEach(opt => {
                intArea.innerHTML += `
                    <button onclick="Engine.submitAnswer(${opt.val}, this)" class="eng-opt-btn flex flex-col items-center justify-center p-6 rounded-3xl border border-slate-200 dark:border-neutral-700 bg-slate-50 dark:bg-neutral-800/50 hover:border-${opt.col}-300 hover:bg-${opt.col}-50 dark:hover:bg-${opt.col}-900/10 transition-all group">
                        <div class="w-14 h-14 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center text-2xl text-slate-400 group-hover:text-${opt.col}-500 shadow-sm mb-3 border border-slate-100 dark:border-neutral-800 transition-colors"><i class="fa-solid ${opt.icon}"></i></div>
                        <span class="font-black text-lg text-slate-700 dark:text-slate-200">${opt.text}</span>
                    </button>
                `;
            });
        }
        else {
            // مقالي واستخراج
            intArea.className = "w-full";
            intArea.innerHTML = `
                <textarea id="eng-text-input" rows="4" class="w-full p-5 rounded-2xl bg-slate-50 dark:bg-neutral-800/50 border border-slate-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 dark:text-white font-medium resize-none shadow-inner" placeholder="اكتب إجابتك هنا بوضوح..."></textarea>
                <button onclick="Engine.submitAnswer(null, this)" class="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all">تحقق من الإجابة</button>
            `;
        }

        // إدارة التايمر والإخفاء (نظام الاختبارات فقط)
        if (this.state.module === 'exams') {
            document.getElementById('eng-blur-overlay').classList.remove('hidden');
            document.getElementById('eng-timer-val').innerText = q.time || 30; // افتراضي 30 ثانية
            document.getElementById('eng-timer-bar').style.width = '100%';
            document.getElementById('eng-timer-bar').className = 'h-full bg-green-500 transition-all duration-1000 ease-linear';
        } else {
            document.getElementById('eng-blur-overlay').classList.add('hidden');
        }
    },

    // 5. إظهار السؤال وبدء العداد
    revealQuestion: function() {
        const q = this.state.queue[this.state.currentIndex];
        document.getElementById('eng-blur-overlay').classList.add('hidden');
        
        this.state.timeLeft = q.time || 30;
        if (this.state.timer) clearInterval(this.state.timer);
        
        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            document.getElementById('eng-timer-val').innerText = this.state.timeLeft;
            
            const pct = (this.state.timeLeft / (q.time || 30)) * 100;
            const bar = document.getElementById('eng-timer-bar');
            bar.style.width = pct + '%';
            
            if (pct < 25) bar.className = 'h-full bg-red-500 transition-all duration-1000 ease-linear'; 
            else if (pct < 50) bar.className = 'h-full bg-yellow-400 transition-all duration-1000 ease-linear';
            
            // تنبيه صوتي للثواني الأخيرة
            if (this.state.timeLeft <= 5 && this.state.timeLeft > 0) this.playSound('tick');

            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timer);
                this.submitAnswer(-1, null, true); // إرسال إجباري
            }
        }, 1000);
    },

    // 6. التحقق من الإجابة
    submitAnswer: function(selectedValue = null, btnElement = null, isTimeUp = false) {
        if (this.state.isAnswered && !isTimeUp) return;
        this.state.isAnswered = true;
        if (this.state.timer) clearInterval(this.state.timer);

        const q = this.state.queue[this.state.currentIndex];
        let isCorrect = false;
        let statusClass = 'wrong'; // correct, wrong, acceptable, incomplete
        let userAnswerText = '';
        let correctAnswerText = '';

        // تعطيل جميع الأزرار
        document.querySelectorAll('.eng-opt-btn').forEach(b => b.classList.add('opacity-60', 'pointer-events-none'));
        const textInput = document.getElementById('eng-text-input');
        if (textInput) textInput.disabled = true;

        // -- التقييم حسب النوع --
        if (q.type === 'mcq') {
            correctAnswerText = q.options[q.answer];
            if (isTimeUp) {
                userAnswerText = "انتهى الوقت";
                this.highlightOption(q.answer, 'correct'); // إظهار الصح
            } else {
                userAnswerText = q.options[selectedValue];
                if (selectedValue === q.answer) {
                    isCorrect = true; statusClass = 'correct';
                    this.highlightOption(selectedValue, 'correct', btnElement);
                } else {
                    this.highlightOption(selectedValue, 'wrong', btnElement);
                    this.highlightOption(q.answer, 'correct');
                }
            }
        } 
        else if (q.type === 'tf') {
            correctAnswerText = q.answer ? "صح" : "خطأ";
            if (isTimeUp) {
                userAnswerText = "انتهى الوقت";
                this.highlightOptionTF(q.answer, 'correct');
            } else {
                userAnswerText = selectedValue ? "صح" : "خطأ";
                if (selectedValue === q.answer) {
                    isCorrect = true; statusClass = 'correct';
                    this.highlightOptionTF(selectedValue, 'correct', btnElement);
                } else {
                    this.highlightOptionTF(selectedValue, 'wrong', btnElement);
                    this.highlightOptionTF(q.answer, 'correct');
                }
            }
        }
        else if (q.type === 'extract') {
            // الاستخراج (يجب أن يكون من ضمن المصفوفة)
            userAnswerText = textInput.value.trim();
            correctAnswerText = Array.isArray(q.answer) ? q.answer.join(' أو ') : q.answer;
            
            if (!userAnswerText && !isTimeUp) {
                userAnswerText = "لم يكتب شيئاً";
            } else if (isTimeUp) {
                userAnswerText = "انتهى الوقت";
            } else {
                const normalizedUser = this.normalizeText(userAnswerText);
                const validAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
                isCorrect = validAnswers.some(ans => this.normalizeText(ans) === normalizedUser);
                statusClass = isCorrect ? 'correct' : 'wrong';
            }
        }
        else if (q.type === 'essay') {
            // المقالي (نسبة التشابه)
            userAnswerText = textInput.value.trim();
            correctAnswerText = q.answer;
            
            if (!userAnswerText) {
                userAnswerText = isTimeUp ? "انتهى الوقت" : "لم يكتب شيئاً";
            } else {
                const score = this.calcSimilarity(userAnswerText, q.answer);
                if (score >= 0.8) { isCorrect = true; statusClass = 'correct'; }
                else if (score >= 0.5) { isCorrect = true; statusClass = 'acceptable'; }
                else if (score >= 0.3) { statusClass = 'incomplete'; }
                else { statusClass = 'wrong'; }
            }
        }

        // تحديث الإحصائيات
        if (isCorrect) this.state.stats.correct++;
        else if (isTimeUp || userAnswerText === "لم يكتب شيئاً") this.state.stats.skipped++;
        else this.state.stats.wrong++;

        // حفظ السجل
        this.state.history.push({
            question: q.question,
            type: q.type,
            userAns: userAnswerText,
            correctAns: correctAnswerText,
            status: statusClass
        });

        this.playSound(statusClass);
        this.showFeedback(statusClass, correctAnswerText, isTimeUp);
    },

    // 7. تنسيق إظهار التغذية الراجعة
    showFeedback: function(status, correctAns, isTimeUp) {
        const fbArea = document.getElementById('eng-feedback-area');
        let bg, text, icon, msg;

        if (isTimeUp) { bg = 'bg-red-50 border-red-200'; text = 'text-red-600'; icon = 'fa-clock'; msg = 'انتهى الوقت المخصص للسؤال!'; }
        else if (status === 'correct') { bg = 'bg-green-50 border-green-200'; text = 'text-green-600'; icon = 'fa-check-circle'; msg = 'إجابة صحيحة وممتازة!'; }
        else if (status === 'acceptable') { bg = 'bg-blue-50 border-blue-200'; text = 'text-blue-600'; icon = 'fa-check'; msg = 'إجابة مقبولة.'; }
        else if (status === 'incomplete') { bg = 'bg-yellow-50 border-yellow-200'; text = 'text-yellow-600'; icon = 'fa-triangle-exclamation'; msg = 'إجابة ناقصة.'; }
        else { bg = 'bg-red-50 border-red-200'; text = 'text-red-600'; icon = 'fa-xmark-circle'; msg = 'إجابة خاطئة.'; }

        fbArea.innerHTML = `
            <div class="p-5 rounded-2xl border ${bg} dark:bg-opacity-10 dark:border-opacity-20">
                <div class="font-black text-lg ${text} flex items-center gap-2 mb-3">
                    <i class="fa-solid ${icon}"></i> ${msg}
                </div>
                <div class="bg-white dark:bg-neutral-900 p-4 rounded-xl border border-slate-100 dark:border-neutral-800 shadow-sm">
                    <span class="block text-xs font-bold text-slate-400 mb-1">الإجابة النموذجية:</span>
                    <p class="text-sm md:text-base font-bold text-slate-700 dark:text-slate-200">${correctAns}</p>
                </div>
            </div>
        `;

        fbArea.classList.remove('hidden');
        // تفعيل الأنيميشن
        setTimeout(() => {
            fbArea.classList.remove('opacity-0', 'max-h-0');
            fbArea.classList.add('opacity-100', 'max-h-[1000px]');
        }, 10);

        // إظهار زر التالي
        const btnNext = document.getElementById('eng-btn-next');
        btnNext.innerText = (this.state.currentIndex === this.state.queue.length - 1) ? 'إنهاء وعرض النتيجة' : 'السؤال التالي';
        btnNext.classList.remove('hidden');
        btnNext.classList.add('animate-enter');
    },

    // مساعد: تلوين أزرار الاختياري
    highlightOption: function(index, type, element = null) {
        const btn = element || document.querySelectorAll('.eng-opt-btn')[index];
        if (!btn) return;
        btn.classList.remove('opacity-60', 'bg-slate-50', 'dark:bg-neutral-800/50', 'border-slate-200', 'dark:border-neutral-700');
        const letterBox = btn.querySelector('.eng-opt-letter');
        
        if (type === 'correct') {
            btn.classList.add('bg-green-50', 'dark:bg-green-900/20', 'border-green-500', 'shadow-md', 'shadow-green-500/20');
            letterBox.classList.replace('bg-white', 'bg-green-500');
            letterBox.classList.replace('dark:bg-neutral-900', 'dark:bg-green-500');
            letterBox.classList.replace('text-slate-400', 'text-white');
        } else {
            btn.classList.add('bg-red-50', 'dark:bg-red-900/20', 'border-red-500');
            letterBox.classList.replace('bg-white', 'bg-red-500');
            letterBox.classList.replace('dark:bg-neutral-900', 'dark:bg-red-500');
            letterBox.classList.replace('text-slate-400', 'text-white');
        }
    },

    // مساعد: تلوين أزرار صح وخطأ
    highlightOptionTF: function(val, type, element = null) {
        const btns = document.querySelectorAll('.eng-opt-btn');
        let btn = element;
        if (!btn) {
            // البحث عن الزر بناء على القيمة إذا لم يتم تمرير العنصر (في حالة انتهى الوقت ونريد تظليل الصح)
            btn = (val === true) ? btns[0] : btns[1];
        }
        if(!btn) return;

        btn.classList.remove('opacity-60', 'bg-slate-50', 'dark:bg-neutral-800/50', 'border-slate-200', 'dark:border-neutral-700');
        const iconBox = btn.querySelector('div');

        if (type === 'correct') {
            btn.classList.add('bg-green-50', 'dark:bg-green-900/20', 'border-green-500', 'shadow-md');
            iconBox.classList.replace('bg-white', 'bg-green-500');
            iconBox.classList.replace('dark:bg-neutral-900', 'dark:bg-green-500');
            iconBox.classList.replace('text-slate-400', 'text-white');
        } else {
            btn.classList.add('bg-red-50', 'dark:bg-red-900/20', 'border-red-500');
            iconBox.classList.replace('bg-white', 'bg-red-500');
            iconBox.classList.replace('dark:bg-neutral-900', 'dark:bg-red-500');
            iconBox.classList.replace('text-slate-400', 'text-white');
        }
    },

    // 8. الانتقال للسؤال التالي
    nextQuestion: function() {
        if (this.state.currentIndex < this.state.queue.length - 1) {
            this.state.currentIndex++;
            this.loadQuestion();
        } else {
            this.finish();
        }
    },

    // 9. إنهاء التقييم وعرض التقرير
    finish: function() {
        if (this.state.timer) clearInterval(this.state.timer);
        
        document.getElementById('engine-quiz-view').classList.add('hidden');
        const resultsView = document.getElementById('engine-results-view');
        resultsView.classList.remove('hidden');
        
        // حساب النسبة
        const answeredCount = this.state.stats.correct + this.state.stats.wrong;
        const total = this.state.queue.length; // بناء التقييم على كل الأسئلة
        const pct = total > 0 ? (this.state.stats.correct / total) * 100 : 0;

        document.getElementById('eng-res-total').innerText = total;
        document.getElementById('eng-res-correct').innerText = this.state.stats.correct;
        document.getElementById('eng-res-wrong').innerText = this.state.stats.wrong + this.state.stats.skipped;

        const badge = document.getElementById('eng-res-badge');
        if (pct >= 85) { badge.innerHTML = "🏆 ممتاز"; badge.className = "text-2xl font-black mb-8 py-3 px-8 rounded-2xl inline-block border-2 bg-green-50 border-green-500 text-green-600 shadow-sm shadow-green-500/20"; }
        else if (pct >= 50) { badge.innerHTML = "👍 جيد"; badge.className = "text-2xl font-black mb-8 py-3 px-8 rounded-2xl inline-block border-2 bg-blue-50 border-blue-500 text-blue-600 shadow-sm shadow-blue-500/20"; }
        else { badge.innerHTML = "⚠️ بحاجة لمراجعة"; badge.className = "text-2xl font-black mb-8 py-3 px-8 rounded-2xl inline-block border-2 bg-red-50 border-red-500 text-red-600 shadow-sm shadow-red-500/20"; }

        // رسم التقرير المفصل
        const reportList = document.getElementById('eng-report-list');
        reportList.innerHTML = '';
        
        this.state.history.forEach((item, idx) => {
            let icon, border, bg;
            if (item.status === 'correct') { icon = '<i class="fa-solid fa-check-circle text-green-500 text-xl"></i>'; border = 'border-green-200'; bg = 'bg-green-50/50 dark:bg-green-900/5'; }
            else if (item.status === 'acceptable') { icon = '<i class="fa-solid fa-check text-blue-500 text-xl"></i>'; border = 'border-blue-200'; bg = 'bg-blue-50/50 dark:bg-blue-900/5'; }
            else if (item.status === 'incomplete') { icon = '<i class="fa-solid fa-triangle-exclamation text-yellow-500 text-xl"></i>'; border = 'border-yellow-200'; bg = 'bg-yellow-50/50 dark:bg-yellow-900/5'; }
            else { icon = '<i class="fa-solid fa-xmark-circle text-red-500 text-xl"></i>'; border = 'border-red-200'; bg = 'bg-red-50/50 dark:bg-red-900/5'; }

            reportList.innerHTML += `
                <div class="p-4 md:p-5 rounded-2xl border ${border} ${bg} flex gap-4 items-start">
                    <div class="mt-1 shrink-0">${icon}</div>
                    <div class="flex-1">
                        <div class="text-[10px] md:text-xs font-bold text-slate-400 mb-1">سؤال ${idx + 1}</div>
                        <h4 class="font-bold text-sm md:text-base text-slate-800 dark:text-slate-200 mb-2">${item.question}</h4>
                        <div class="text-xs md:text-sm mb-1"><span class="font-bold text-slate-500">إجابتك:</span> <span class="${item.status==='wrong'?'text-red-500 line-through':'text-slate-700 dark:text-slate-300'}">${item.userAns}</span></div>
                        ${item.status !== 'correct' ? `<div class="text-xs md:text-sm"><span class="font-bold text-green-600">الصحيحة:</span> <span class="text-slate-700 dark:text-slate-300">${item.correctAns}</span></div>` : ''}
                    </div>
                </div>
            `;
        });
        
        resultsView.classList.remove('animate-enter');
        void resultsView.offsetWidth;
        resultsView.classList.add('animate-enter');
        
        document.getElementById('main-scroll-area').scrollTop = 0;
    },

    // --------------------------------------------------------
    // أدوات مساعدة (Helpers)
    // --------------------------------------------------------
    
    // تنظيف النص العربي للمقارنة
    normalizeText: function(text) {
        if (!text) return "";
        return text.trim().replace(/^ال/, "").replace(/[أإآ]/g, "ا").replace(/ة\b/g, "ه").replace(/(ون|ين|ات|ها|هم|كما|كم|نا)$/g, "").replace(/[\u064B-\u0652]/g, "").toLowerCase();
    },

    // حساب نسبة التشابه (للمقالي)
    calcSimilarity: function(str1, str2) {
        const s1 = this.normalizeText(str1), s2 = this.normalizeText(str2);
        if (s1 === s2) return 1; if (s1.length < 2 || s2.length < 2) return 0;
        const getBigrams = (str) => {
            const bg = new Map();
            for (let i = 0; i < str.length - 1; i++) { const b = str.substring(i, i + 2); bg.set(b, (bg.get(b) || 0) + 1); }
            return bg;
        };
        const bg1 = getBigrams(s1), bg2 = getBigrams(s2);
        let intersection = 0;
        for (const [key, val] of bg1) { if (bg2.has(key)) intersection += Math.min(val, bg2.get(key)); }
        return (2 * intersection) / ((s1.length - 1) + (s2.length - 1));
    },

    // الأصوات
    playSound: function(type) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        if(ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator(); const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        if(type==='correct'){ osc.frequency.value=600; gain.gain.setValueAtTime(0.1, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.3); }
        else if(type==='tick'){ osc.type='triangle'; osc.frequency.value=800; gain.gain.setValueAtTime(0.05, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.05); }
        else { osc.type='square'; osc.frequency.value=150; gain.gain.setValueAtTime(0.1, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.3); }
        osc.start(); osc.stop(ctx.currentTime+0.3);
    }
};

// تهيئة المحرك فور تحميل الملف
document.addEventListener('DOMContentLoaded', () => Engine.init());