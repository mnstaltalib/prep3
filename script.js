/* script.js - تعديل: خلط الأسئلة فقط، وثبات ترتيب الخيارات */

let currentState = {
    gradeId: "3prep",
    subjectId: null,
    quiz: {
        currentQuestionIndex: 0,
        score: 0,
        answeredCount: 0,
        questions: []
    }
};

// --- DOM Elements ---
const views = {
    hero: document.getElementById('heroSection'),
    subjects: document.getElementById('subjectsSection'),
    mode: document.getElementById('modeSelection'),
    lesson: document.getElementById('lessonSelection'),
    pdf: document.getElementById('pdfSection'),
    quiz: document.getElementById('quizSection')
};

const subjectsGrid = document.getElementById('subjectsGrid');
const startQuizContainer = document.getElementById('startQuizContainer');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderSubjects();
});

// --- Navigation ---
function switchView(viewName) {
    Object.values(views).forEach(el => el.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
    window.scrollTo(0, 0);
    
    if(viewName !== 'lesson') {
        startQuizContainer.classList.add('translate-y-full');
    }
}

function goHome() { switchView('hero'); views.subjects.classList.remove('hidden'); }
function scrollToSubjects() { views.subjects.classList.remove('hidden'); views.subjects.scrollIntoView({ behavior: 'smooth' }); }
function goBackToSubjects() { switchView('subjects'); views.hero.classList.remove('hidden'); }
function goBackToMode() { switchView('mode'); }
function quitQuiz() { switchView('lesson'); }

// --- Subjects Render ---
function renderSubjects() {
    const gradeData = db[0]; 
    subjectsGrid.innerHTML = '';

    gradeData.subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition cursor-pointer flex flex-col items-center text-center';
        card.onclick = () => selectSubject(subject);
        
        let totalQuestions = 0;
        if(subject.lessons) subject.lessons.forEach(l => totalQuestions += l.quizzes.length);

        card.innerHTML = `
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-4">
                ${subject.icon}
            </div>
            <h3 class="font-bold text-lg text-slate-800">${subject.name}</h3>
            <p class="text-xs text-slate-500 mt-2 font-mono">${subject.pdfs.length} ملفات | ${totalQuestions} سؤال</p>
        `;
        subjectsGrid.appendChild(card);
    });
}

function selectSubject(subject) {
    currentState.subjectId = subject.id;
    document.getElementById('selectedSubjectTitle').textContent = subject.name;
    switchView('mode');
}

function startMode(mode) {
    const gradeData = db[0];
    const subjectData = gradeData.subjects.find(s => s.id === currentState.subjectId);

    if (mode === 'pdf') {
        renderPDFs(subjectData.pdfs);
        switchView('pdf');
    } else if (mode === 'quiz') {
        renderLessons(subjectData.lessons);
        switchView('lesson');
    }
}

// --- Multi-Select Lesson Logic ---
function renderLessons(lessons) {
    const container = document.getElementById('lessonsList');
    container.innerHTML = '';
    
    document.getElementById('selectAllBtn').textContent = 'تحديد الكل';
    startQuizContainer.classList.add('translate-y-full');

    if (!lessons || lessons.length === 0) {
        container.innerHTML = '<p class="text-center text-slate-500">لا توجد دروس متاحة حالياً.</p>';
        return;
    }

    lessons.forEach((lesson, index) => {
        const item = document.createElement('label');
        item.className = 'block cursor-pointer select-none';
        item.innerHTML = `
            <input type="checkbox" class="lesson-checkbox custom-checkbox hidden" value="${index}" onchange="updateStartButton()">
            <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 transition hover:bg-slate-50">
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded border border-slate-300 flex items-center justify-center bg-white check-icon opacity-0 transition text-blue-600">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-700">${lesson.title}</h4>
                    </div>
                </div>
                <span class="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded font-mono">${lesson.quizzes.length} سؤال</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function updateStartButton() {
    const checkedBoxes = document.querySelectorAll('.lesson-checkbox:checked');
    const count = checkedBoxes.length;
    document.getElementById('selectedCountBadge').textContent = count;
    
    if (count > 0) {
        startQuizContainer.classList.remove('translate-y-full');
    } else {
        startQuizContainer.classList.add('translate-y-full');
    }
}

function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('.lesson-checkbox');
    const btn = document.getElementById('selectAllBtn');
    const isAllSelected = Array.from(checkboxes).every(box => box.checked);

    checkboxes.forEach(box => box.checked = !isAllSelected);
    btn.textContent = isAllSelected ? 'تحديد الكل' : 'إلغاء التحديد';
    updateStartButton();
}

function startMultiLessonQuiz() {
    const gradeData = db[0];
    const subjectData = gradeData.subjects.find(s => s.id === currentState.subjectId);
    
    const checkedBoxes = document.querySelectorAll('.lesson-checkbox:checked');
    let aggregatedQuestions = [];

    checkedBoxes.forEach(box => {
        const lessonIndex = parseInt(box.value);
        const lesson = subjectData.lessons[lessonIndex];
        
        if(lesson && lesson.quizzes) {
            lesson.quizzes.forEach(q => {
                aggregatedQuestions.push({
                    ...q,
                    sourceLesson: lesson.title
                });
            });
        }
    });

    if (aggregatedQuestions.length === 0) {
        alert('حدث خطأ، لا توجد أسئلة في الدروس المختارة');
        return;
    }

    // خلط الأسئلة فقط (Shuffle Questions)
    for (let i = aggregatedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [aggregatedQuestions[i], aggregatedQuestions[j]] = [aggregatedQuestions[j], aggregatedQuestions[i]];
    }

    initQuiz(aggregatedQuestions);
    switchView('quiz');
}

// --- PDF Logic ---
function renderPDFs(pdfs) {
    const container = document.getElementById('pdfList');
    container.innerHTML = '';
    if (!pdfs || pdfs.length === 0) {
        container.innerHTML = '<p class="text-center text-slate-500">لا توجد مذكرات متاحة حالياً.</p>';
        return;
    }
    pdfs.forEach(pdf => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200';
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-red-500 text-2xl">📄</span>
                <div>
                    <h4 class="font-bold text-slate-700">${pdf.title}</h4>
                    <span class="text-xs text-slate-400">${pdf.size}</span>
                </div>
            </div>
            <a href="${pdf.link}" class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-200 transition">تحميل</a>
        `;
        container.appendChild(item);
    });
}

// --- Quiz Logic (No Option Shuffle) ---
function initQuiz(questions) {
    currentState.quiz.questions = questions;
    currentState.quiz.currentQuestionIndex = 0;
    currentState.quiz.score = 0;
    currentState.quiz.answeredCount = 0;
    
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    renderQuestion();
}

function renderQuestion() {
    const qIndex = currentState.quiz.currentQuestionIndex;
    const question = currentState.quiz.questions[qIndex];
    
    document.getElementById('quizProgress').textContent = `سؤال ${qIndex + 1} من ${currentState.quiz.questions.length}`;
    
    const badge = document.getElementById('lessonSourceBadge');
    if (question.sourceLesson) {
        badge.textContent = question.sourceLesson;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    document.getElementById('questionText').textContent = question.question;
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // عرض الخيارات بنفس ترتيبها في ملف البيانات (بدون خلط)
    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-right p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition font-medium relative';
        btn.textContent = opt;
        
        btn.onclick = () => handleAnswer(index, question.answer, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, btnElement) {
    const allBtns = document.getElementById('optionsContainer').children;
    
    // تعطيل الأزرار لمنع النقر المتكرر
    for (let btn of allBtns) {
        btn.disabled = true;
        if (btn !== btnElement) btn.classList.add('opacity-50');
    }

    currentState.quiz.answeredCount++; 

    if (selectedIndex === correctIndex) {
        // إجابة صحيحة
        btnElement.classList.add('bg-green-100', 'border-green-500', 'text-green-800', 'border-2');
        currentState.quiz.score++;
    } else {
        // إجابة خاطئة
        btnElement.classList.add('bg-red-100', 'border-red-500', 'text-red-800', 'border-2');
        
        // تظليل الإجابة الصحيحة (بما أن الترتيب ثابت، نستخدم الـ index مباشرة)
        if(allBtns[correctIndex]) {
            allBtns[correctIndex].classList.remove('opacity-50');
            allBtns[correctIndex].classList.add('bg-green-100', 'border-green-500', 'text-green-800', 'border-2');
        }
    }

    setTimeout(() => {
        currentState.quiz.currentQuestionIndex++;
        if (currentState.quiz.currentQuestionIndex < currentState.quiz.questions.length) {
            renderQuestion();
        } else {
            showQuizResult();
        }
    }, 1500);
}

function finishQuizEarly() {
    if(confirm("هل أنت متأكد من إنهاء الاختبار؟ سيتم حساب النتيجة بناءً على الأسئلة التي قمت بحلها فقط.")) {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('quizContent').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    
    // حساب النتيجة بناءً على الأسئلة المجابة فقط
    const totalQuestions = currentState.quiz.questions.length;
    const answered = currentState.quiz.answeredCount;
    const correct = currentState.quiz.score;
    const wrong = answered - correct;
    
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    document.getElementById('resAnswered').textContent = answered + " / " + totalQuestions;
    document.getElementById('resCorrect').textContent = correct;
    document.getElementById('resWrong').textContent = wrong;
    document.getElementById('finalScorePercent').textContent = percentage;
}