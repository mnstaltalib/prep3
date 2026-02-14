document.addEventListener('DOMContentLoaded', () => {
    
    // 1. بناء النافبار والفوتر
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html"; 

    const navLinks = [
        { name: 'الرئيسية', url: 'index.html', icon: 'fa-home' },
        { name: 'المكتبة الرقمية', url: 'library.html', icon: 'fa-book' },
        { name: 'بنك الأسئلة', url: 'questions.html', icon: 'fa-question-circle' },
        { name: 'كبسولة المنهج', url: 'capsule.html', icon: 'fa-flask' },
        { name: 'الاختبارات', url: 'quizzes.html', icon: 'fa-pen-to-square' }
    ];

    const navbarHTML = `
    <nav class="bg-white dark:bg-neutral-800 shadow-md sticky top-0 z-50 transition-colors duration-300 border-b dark:border-neutral-700">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                
                <div class="flex-shrink-0 flex items-center w-48">
                    <a href="index.html" class="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap"></i>
                        منصة الطالب
                    </a>
                </div>

                <div class="hidden md:flex flex-1 justify-center items-center space-x-reverse space-x-2">
                    ${navLinks.map(link => {
                        let isActive = (page === link.url) || (path.includes('summaries') && link.url === 'capsule.html');
                        
                        const activeClasses = isActive 
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-bold shadow-sm transform scale-105' 
                            : 'text-gray-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-neutral-700';

                        return `
                        <a href="${link.url}" class="px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${activeClasses}">
                            <i class="fa-solid ${link.icon}"></i> ${link.name}
                        </a>
                        `;
                    }).join('')}
                </div>

                <div class="flex items-center justify-end gap-2 md:gap-4 w-48">
                    <button id="theme-toggle" class="p-2 rounded-full text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none transition-colors">
                        <i id="theme-icon" class="fa-solid fa-moon text-lg"></i>
                    </button>
                    
                    <button id="mobile-menu-btn" class="md:hidden p-2 rounded-md text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none transition-all duration-300">
                        <i id="menu-icon" class="fa-solid fa-bars text-xl transition-transform duration-300"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="md:hidden bg-gray-50 dark:bg-neutral-900 border-t dark:border-neutral-700 shadow-inner overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                ${navLinks.map(link => {
                    let isActive = page === link.url;
                    const activeMobile = isActive ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold' : 'text-gray-700 dark:text-neutral-200';
                    return `
                    <a href="${link.url}" class="block px-3 py-2 rounded-md text-base ${activeMobile} hover:bg-blue-50 dark:hover:bg-neutral-800 transition-colors">
                        <i class="fa-solid ${link.icon} ml-2 w-6 text-center"></i> ${link.name}
                    </a>
                    `;
                }).join('')}
            </div>
        </div>
    </nav>
    `;

    const footerHTML = `
    <footer class="bg-gray-800 dark:bg-neutral-950 text-white py-6 mt-auto transition-colors duration-300">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-400 text-xs md:text-sm">جميع الحقوق محفوظة &copy; ${new Date().getFullYear()} منصة الطالب</p>
        </div>
    </footer>
    `;

    const navContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');
    if(navContainer) navContainer.innerHTML = navbarHTML;
    if(footerContainer) footerContainer.innerHTML = footerHTML;

    // --- منطق الوضع الليلي ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    if (htmlElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeIcon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
        });
    }

    // --- قائمة الجوال ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('max-h-0', 'opacity-0');
                mobileMenu.classList.add('max-h-96', 'opacity-100');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark', 'rotate-90');
            } else {
                mobileMenu.classList.remove('max-h-96', 'opacity-100');
                mobileMenu.classList.add('max-h-0', 'opacity-0');
                menuIcon.classList.remove('fa-xmark', 'rotate-90');
                menuIcon.classList.add('fa-bars');
            }
        });
    }
});