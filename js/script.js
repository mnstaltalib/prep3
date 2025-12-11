/* js/script.js */
import { db } from '../data/db.js';

let currentState = {
    gradeId: "3prep", 
    subjectId: null,
    quiz: { currentQuestionIndex: 0, score: 0, answeredCount: 0, questions: [] }
};

const views = {
    welcome: document.getElementById('welcomeScreen'),
    home: document.getElementById('homeView'),
    mode: document.getElementById('modeView'),
    lesson: document.getElementById('lessonView'),
    quiz: document.getElementById('quizView'),
    pdf: document.getElementById('pdfView')
};

window.enterPlatform = () => handleEnterPlatform();
window.goBack = (viewId) => switchView(viewId);
window.goToHome = () => handleGoToHome();
window.checkLockAndStart = (mode) => handleCheckLockAndStart(mode);
window.toggleSelectAll = () => handleToggleSelectAll();
window.startMultiLessonQuiz = () => handleStartMultiLessonQuiz();
window.finishQuizEarly = () => handleFinishQuizEarly();
window.quitQuiz = () => handleGoToHome();

document.addEventListener('DOMContentLoaded', () => {
    renderSubjects();
});

function triggerLockAnimation(element) {
    element.classList.add('shake-lock');
    const toast = document.getElementById('lockToast');
    toast.classList.remove('opacity-0', 'translate-y-[-20px]');
    setTimeout(() => {
        element.classList.remove('shake-lock');
        toast.classList.add('opacity-0', 'translate-y-[-20px]');
    }, 1000);
}

function handleEnterPlatform() {
    const welcome = document.getElementById('welcomeScreen');
    const header = document.getElementById('mainHeader');
    const main = document.getElementById('mainContainer');
    const footer = document.getElementById('mainFooter');

    welcome.classList.add('slide-up-out');
    
    setTimeout(() => {
        welcome.classList.add('hidden');
        header.classList.remove('opacity-0');
        main.classList.remove('opacity-0');
        document.getElementById('homeView').classList.remove('hidden');
    }, 500); 

    setTimeout(() => {
        footer.classList.remove('is-hidden');
    }, 1500);
}

function handleGoToHome() {
    switchView('homeView');
}

function switchView(viewId) {
    const footer = document.getElementById('mainFooter');

    if (viewId === 'homeView' || viewId === 'modeView') {
        footer.classList.remove('is-hidden');
    } else {
        footer.classList.add('is-hidden');
    }

    ['homeView', 'modeView', 'lessonView', 'quizView', 'pdfView'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
        document.getElementById(id).classList.remove('fade-in'); 
        void document.getElementById(id).offsetWidth; 
        document.getElementById(id).classList.add('fade-in');
    });
    
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById('welcomeScreen').classList.add('hidden');
    window.scrollTo(0, 0);
}

function renderSubjects() {
    const gradeData = db[0]; 
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';

    gradeData.subjects.forEach(subject => {
        const card = document.createElement('div');
        const isLocked = subject.isLocked || false;
        
        // --- التعديل هنا: كلاسات لجعل الكرت مربعاً وصغيراً ---
        // aspect-square: يجعل الطول يساوي العرض
        // p-4 md:p-5: حواف صغيرة
        card.className = `bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer active:scale-95 transition-all duration-200 aspect-square group relative hover:border-blue-200 hover:shadow-md hover:-translate-y-1 ${isLocked ? 'opacity-90 bg-gray-50' : ''}`;
        
        let lockBadge = isLocked ? '<div class="lock-badge"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></div>' : '';

        // تم تصغير حجم الأيقونة والخط
        card.innerHTML = `
            ${lockBadge}
            <div class="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">${subject.icon}</div>
            <h3 class="font-bold text-base md:text-xl text-gray-800 leading-tight">${subject.name}</h3>
        `;
        
        card.onclick = () => {
            if (isLocked) {
                triggerLockAnimation(card);
            } else {
                currentState.subjectId = subject.id;
                document.getElementById('selectedSubjectTitle').textContent = subject.name;
                
                let totalQ = 0;
                if(subject.lessons) subject.lessons.forEach(l => totalQ += l.quizzes.length);
                let totalPdf = subject.pdfs ? subject.pdfs.length : 0;

                const pdfBadge = document.getElementById('pdfCountBadge');
                const quizBadge = document.getElementById('quizCountBadge');

                if (subject.isPdfLocked) {
                    pdfBadge.classList.add('hidden');
                } else {
                    pdfBadge.classList.remove('hidden');
                    pdfBadge.textContent = totalPdf + ' ملف';
                }

                if (subject.isQuizLocked) {
                    quizBadge.classList.add('hidden');
                } else {
                    quizBadge.classList.remove('hidden');
                    quizBadge.textContent = totalQ + ' سؤال';
                }

                updateModeCards(subject);
                switchView('modeView');
            }
        };
        grid.appendChild(card);
    });
}

function updateModeCards(subject) {
    const pdfCard = document.getElementById('pdfModeCard');
    const quizCard = document.getElementById('quizModeCard');
    
    applyLockVisuals(pdfCard, subject.isPdfLocked);
    applyLockVisuals(quizCard, subject.isQuizLocked);
}

function applyLockVisuals(element, isLocked) {
    const existingBadge = element.querySelector('.lock-badge');
    if (existingBadge) existingBadge.remove();

    if (isLocked) {
        element.classList.add('opacity-90', 'bg-gray-50');
        const badge = document.createElement('div');
        badge.className = 'lock-badge';
        badge.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>';
        element.appendChild(badge);
    } else {
        element.classList.remove('opacity-90', 'bg-gray-50');
        element.classList.add('hover:shadow-xl', 'hover:-translate-y-1');
        
        if (element.id === 'pdfModeCard') element.classList.add('hover:border-red-100');
        if (element.id === 'quizModeCard') element.classList.add('hover:border-green-100');
    }
}

function handleCheckLockAndStart(mode) {
    const gradeData = db[0];
    const subject = gradeData.subjects.find(s => s.id === currentState.subjectId);
    
    const cardId = mode === 'pdf' ? 'pdfModeCard' : 'quizModeCard';
    const cardElement = document.getElementById(cardId);

    if (mode === 'pdf') {
        if (subject.isPdfLocked) {
            triggerLockAnimation(cardElement);
        } else {
            renderPDFs(subject.pdfs);
            switchView('pdfView');
        }
    } else if (mode === 'quiz') {
        if (subject.isQuizLocked) {
            triggerLockAnimation(cardElement);
        } else {
            renderLessons(subject.lessons);
            switchView('lessonView');
        }
    }
}

function renderPDFs(pdfs) {
    const container = document.getElementById('pdfList');
    container.innerHTML = '';
    if (!pdfs || pdfs.length === 0) {
        container.innerHTML = '<div class="col-span-2 text-center text-gray-400 py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">عفواً، لا توجد ملفات في المكتبة الرقمية حالياً.</div>';
        return;
    }
    pdfs.forEach(pdf => {
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-white p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition group';
        div.innerHTML = `
            <div class="flex items-center gap-4 overflow-hidden">
                <div class="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-xl group-hover:bg-red-100 transition">PDF</div>
                <div class="truncate text-base md:text-lg font-bold text-gray-700">${pdf.title}</div>
            </div>
            <a href="${pdf.link}" class="text-sm bg-blue-50 text-blue-600 px-5 py-2 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition">تحميل</a>
        `;
        container.appendChild(div);
    });
}

function renderLessons(lessons) {
    const container = document.getElementById('lessonsList');
    container.innerHTML = '';
    
    document.getElementById('startQuizContainer').classList.remove('is-visible');
    document.getElementById('startQuizContainer').classList.add('is-hidden');
    
    document.getElementById('selectedCountBadge').textContent = '0';

    if (!lessons || lessons.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-400 py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">لا توجد دروس متاحة حالياً.</div>';
        return;
    }

    lessons.forEach((lesson, index) => {
        const label = document.createElement('label');
        label.className = 'block cursor-pointer relative group';
        label.innerHTML = `
            <input type="checkbox" class="lesson-checkbox hidden" value="${index}">
            <div class="lesson-card bg-white p-5 md:p-6 rounded-2xl border border-gray-200 flex justify-between items-center transition-all hover:border-blue-300">
                <div class="flex items-center gap-4">
                    <span class="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold font-mono">${index + 1}</span>
                    <div>
                        <h4 class="font-bold text-gray-800 text-base md:text-lg mb-1">${lesson.title}</h4>
                        <span class="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded font-medium">${lesson.quizzes.length} سؤال</span>
                    </div>
                </div>
                <div class="check-circle w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-gray-300 transition-colors"></div>
            </div>
        `;
        label.querySelector('input').addEventListener('change', updateStartButton);
        container.appendChild(label);
    });
}

function updateStartButton() {
    const checked = document.querySelectorAll('.lesson-checkbox:checked');
    const badge = document.getElementById('selectedCountBadge');
    const container = document.getElementById('startQuizContainer');
    
    badge.textContent = `${checked.length}`;
    
    if (checked.length > 0) {
        container.classList.remove('is-hidden');
        container.classList.add('is-visible');
    } else {
        container.classList.remove('is-visible');
        container.classList.add('is-hidden');
    }
}

function handleToggleSelectAll() {
    const checkboxes = document.querySelectorAll('.lesson-checkbox');
    const allChecked = Array.from(checkboxes).every(box => box.checked);
    checkboxes.forEach(box => box.checked = !allChecked);
    updateStartButton();
}

function handleStartMultiLessonQuiz() {
    const gradeData = db[0];
    const subjectData = gradeData.subjects.find(s => s.id === currentState.subjectId);
    const checked = document.querySelectorAll('.lesson-checkbox:checked');
    
    let questions = [];
    checked.forEach(box => {
        const l = subjectData.lessons[parseInt(box.value)];
        l.quizzes.forEach(q => {
            questions.push({ ...q, sourceLesson: l.title });
        });
    });

    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }

    currentState.quiz = {
        questions: questions,
        currentQuestionIndex: 0,
        score: 0,
        answeredCount: 0
    };

    switchView('quizView');
    renderQuestion();
}

function renderQuestion() {
    const quiz = currentState.quiz;
    if (quiz.currentQuestionIndex >= quiz.questions.length) {
        showResult();
        return;
    }

    const q = quiz.questions[quiz.currentQuestionIndex];
    
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizProgress').textContent = `${quiz.currentQuestionIndex + 1} / ${quiz.questions.length}`;
    
    document.getElementById('lessonSourceBadge').textContent = q.sourceLesson;
    document.getElementById('questionText').textContent = q.question;
    
    const optsDiv = document.getElementById('optionsContainer');
    optsDiv.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-right p-4 md:p-5 rounded-2xl border-2 border-gray-100 bg-gray-50 font-bold text-base text-gray-700 active:scale-[0.99] hover:bg-white hover:border-blue-200 transition-all duration-200';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx, q.answer, btn);
        optsDiv.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, btn) {
    const btns = document.getElementById('optionsContainer').children;
    for (let b of btns) b.disabled = true;

    currentState.quiz.answeredCount++;

    if (selectedIndex === correctIndex) {
        btn.classList.remove('bg-gray-50', 'border-gray-100');
        btn.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
        currentState.quiz.score++;
    } else {
        btn.classList.remove('bg-gray-50', 'border-gray-100');
        btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800');
        
        const correctBtn = btns[correctIndex];
        correctBtn.classList.remove('bg-gray-50', 'border-gray-100');
        correctBtn.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
    }

    setTimeout(() => {
        currentState.quiz.currentQuestionIndex++;
        renderQuestion();
    }, 1200);
}

function handleFinishQuizEarly() {
    if(confirm("هل أنت متأكد من إنهاء الاختبار الآن؟")) showResult();
}

function showResult() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    
    document.getElementById('startQuizContainer').classList.remove('is-visible');
    document.getElementById('startQuizContainer').classList.add('is-hidden');

    const quiz = currentState.quiz;
    const percentage = quiz.answeredCount > 0 ? Math.round((quiz.score / quiz.answeredCount) * 100) : 0;

    document.getElementById('finalScorePercent').textContent = percentage;
    document.getElementById('resCorrect').textContent = quiz.score;
    document.getElementById('resWrong').textContent = quiz.answeredCount - quiz.score;
}