const siteRouter = {
    pages: {
        "home": "/",
        "about": "/about",
        "news": "/news",
        "news-single": "/news-single",
        "the-team": "/team",
        "contact": "/contact",
        "receive-tutoring": "/receive-tutoring",
        "become-a-tutor": "/become-a-tutor",
        "become-a-volunteer": "/become-a-volunteer",
        "support": "/support",
        "articles": "/articles",
        "article-single": "/article-single",
        "lessons": "/lessons",
        "lesson-single": "/lesson-single",
        "course-unit": "/course-unit",
        "member": "/members",
        "report-time": "/report-time"
    },
    members: {},
    async loadMembers() {
        if (Object.keys(this.members).length > 0) return;

        const { getFirestore, collection, getDocs, query } = await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js");
        const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js");

        const firebaseConfig = {
            apiKey: "AIzaSyD0qVihpuLI0cF0PZ32o8tFBLfTgjlqB6A",
            authDomain: "literary-speaking.firebaseapp.com",
            projectId: "literary-speaking",
            storageBucket: "literary-speaking.appspot.com",
            messagingSenderId: "699059463612",
            appId: "1:699059463612:web:ecb2e784d627c6b93937b9",
            measurementId: "G-0L1V3XXGGR"
        };

        if (!getApps().length) {
            initializeApp(firebaseConfig);
        }
        const db = getFirestore();

        try {
            const membersQuery = query(collection(db, "members"));
            const querySnapshot = await getDocs(membersQuery);
            const membersMap = {};
            querySnapshot.forEach(doc => {
                membersMap[doc.id] = doc.data();
            });
            this.members = membersMap;
        } catch (error) {
            console.error("Could not load members data from Firestore:", error);
        }
    },
    navigateTo(pageId, params = null) {
        let url = this.pages[pageId];
        if (url) {
            if ((pageId === 'member' || pageId === 'article-single' || pageId === 'news-single' || pageId === 'lesson-single' || pageId === 'course-unit') && params) {
                url += `?id=${params}`;
            }
            window.location.href = url;
        } else {
            window.location.href = this.pages['home'];
        }
    },
    applyLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-en], [data-es]').forEach(el => {
            const text = el.dataset[lang];
            if (text !== undefined) {
                 el.innerHTML = text;
            }
        });
        const isEn = lang === 'en';
        document.querySelectorAll('#lang-en-btn, #lang-en-btn-mobile').forEach(btn => btn.classList.toggle('active', isEn));
        document.querySelectorAll('#lang-es-btn, #lang-es-btn-mobile').forEach(btn => btn.classList.toggle('active', !isEn));
    },
    init() {
        const headerContainer = document.getElementById('header');
        const footerContainer = document.querySelector('.site-footer');

        const headerHTML = `
            <div class="container">
                <div class="lang-switcher-mobile-wrapper"><div class="lang-switcher"><button id="lang-en-btn-mobile">EN</button><button id="lang-es-btn-mobile">ES</button></div></div>
                <a data-page-id="home" class="logo nav-link"><img src="https://i.imgur.com/vyE0G43.png" alt="Literary Speaking Logo" class="logo-unscrolled"><img src="https://i.imgur.com/UnpZvgZ.png" alt="Literary Speaking Logo" class="logo-scrolled"></a>
                <nav class="desktop-nav">
                    <div class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle lang-switch" data-page-group="get-to-know-us" data-en="Get to Know Us" data-es="Conócenos"></div>
                        <div class="dropdown-menu">
                            <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                            <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                            <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                            <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle lang-switch" data-page-group="get-involved" data-en="Get Involved" data-es="Involúcrate"></div>
                        <div class="dropdown-menu">
                            <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                            <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                            <a data-page-id="become-a-volunteer" class="lang-switch nav-link" data-en="Become a Volunteer" data-es="Conviértete en Voluntario"></a>
                            <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                         <div class="nav-link dropdown-toggle lang-switch" data-page-group="resources" data-en="Resources" data-es="Recursos"></div>
                        <div class="dropdown-menu">
                            <a data-page-id="articles" class="lang-switch nav-link" data-en="Articles" data-es="Artículos"></a>
                            <a data-page-id="lessons" class="lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                            <a data-page-id="report-time" class="lang-switch nav-link" data-en="Report Time" data-es="Reportar Horas"></a>
                        </div>
                    </div>
                    <div class="lang-switcher"><button id="lang-en-btn">EN</button><button id="lang-es-btn">ES</button></div>
                </nav>
                <button class="menu-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
            </div>
            <nav class="mobile-nav">
                <h3 class="lang-switch mobile-nav-title" data-en="Get to Know Us" data-es="Conócenos"></h3>
                <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>

                <h3 class="lang-switch mobile-nav-title" data-en="Get Involved" data-es="Involúcrate"></h3>
                <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                <a data-page-id="become-a-volunteer" class="lang-switch nav-link" data-en="Become a Volunteer" data-es="Conviértete en Voluntario"></a>
                <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>

                <h3 class="lang-switch mobile-nav-title" data-en="Resources" data-es="Recursos"></h3>
                <a data-page-id="articles" class="lang-switch nav-link" data-en="Articles" data-es="Artículos"></a>
                <a data-page-id="lessons" class="lang-switch nav-link" data-en="Lessons" data-es="Lecciones"></a>
                <a data-page-id="report-time" class="lang-switch nav-link" data-en="Report Time" data-es="Reportar Horas"></a>
            </nav>
        `;

        const footerHTML = `
            <div class="container">
                <a data-page-id="home" class="nav-link"><img src="https://i.imgur.com/vyE0G43.png" alt="Literary Speaking Footer Logo" class="scroll-animated"></a>
                <div class="footer-grid">
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Get to Know Us" data-es="Conócenos"></h3>
                        <a data-page-id="about" class="lang-switch nav-link" data-en="About Us" data-es="Sobre Nosotros"></a>
                        <a data-page-id="the-team" class="lang-switch nav-link" data-en="The Team" data-es="El Equipo"></a>
                        <a data-page-id="news" class="lang-switch nav-link" data-en="News" data-es="Noticias"></a>
                        <a data-page-id="contact" class="lang-switch nav-link" data-en="Contact" data-es="Contacto"></a>
                    </div>
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Get Involved" data-es="Involúcrate"></h3>
                        <a data-page-id="receive-tutoring" class="lang-switch nav-link" data-en="Receive Tutoring" data-es="Recibir Tutoría"></a>
                        <a data-page-id="become-a-tutor" class="lang-switch nav-link" data-en="Become a Tutor" data-es="Conviértete en Tutor"></a>
                        <a data-page-id="become-a-volunteer" class="lang-switch nav-link" data-en="Become a Volunteer" data-es="Conviértete en Voluntario"></a>
                        <a data-page-id="support" class="lang-switch nav-link" data-en="Support Us" data-es="Apóyanos"></a>
                    </div>
                    <div class="footer-col">
                        <h3 class="lang-switch" data-en="Follow Us" data-es="Síguenos"></h3>
                        <div class="social-icons">
                           <a href="https://www.linkedin.com/company/literary-speaking/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                           </a>
                           <a href="https://www.instagram.com/literaryspeakingtutoring/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                           </a>
                           <a href="https://www.facebook.com/people/Literary-Speaking-Tutoring-Mentorship/61578261005769/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                           </a>
                           <a href="https://www.youtube.com/@LiterarySpeakingTutoringMentor" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                           </a>
                        </div>
                    </div>
                </div>
                <p class="copyright lang-switch scroll-animated" data-en="Copyright © 2025 Literary Speaking Tutoring | Privacy Policy" data-es="Copyright © 2025 Tutoría de Literary Speaking | Política de Privacidad"></p>
            </div>
        `;

        if (headerContainer) headerContainer.innerHTML = headerHTML;
        if (footerContainer) footerContainer.innerHTML = footerHTML;

        const header = document.getElementById('header');
        const menuToggle = document.querySelector('.menu-toggle');
        const body = document.body;
        
        const currentPage = body.dataset.currentPage;
        const singlePages = ['article-single', 'news-single', 'members', 'lesson-single', 'course-unit'];
        const isSinglePage = singlePages.includes(currentPage);

        if (isSinglePage) {
            header?.classList.add('scrolled');
        } else {
            const handleScroll = () => {
                header?.classList.toggle('scrolled', window.pageYOffset > 50);
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        const closeMenu = () => {
            body.classList.remove('menu-open');
            if (menuToggle) menuToggle.classList.remove('active');
            if (header) header.classList.remove('menu-active-state');
        };

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                const isOpen = body.classList.toggle('menu-open');
                menuToggle.classList.toggle('active', isOpen);
                if (header) header.classList.toggle('menu-active-state', isOpen);
            });
        }
        
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.pageId) {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const pageId = link.dataset.pageId;
                    const id = link.dataset.id;
                    this.navigateTo(pageId, id);
                    closeMenu();
                });
            }
        });

        document.querySelectorAll('.desktop-nav .dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
            });
        });

        const setLanguage = (lang) => {
            this.applyLanguage(lang);
            localStorage.setItem('language', lang);
            document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        };

        const toggleLanguage = () => {
            const currentLang = localStorage.getItem('language') || 'en';
            setLanguage(currentLang === 'en' ? 'es' : 'en');
        };

        document.querySelectorAll('.lang-switcher').forEach(el => el.addEventListener('click', toggleLanguage));

        const pageGroups = {
            'about': 'get-to-know-us', 'the-team': 'get-to-know-us', 'news': 'get-to-know-us', 'contact': 'get-to-know-us',
            'receive-tutoring': 'get-involved', 'become-a-tutor': 'get-involved', 'become-a-volunteer': 'get-involved', 'support': 'get-involved',
            'articles': 'resources', 'lessons': 'resources', 'report-time': 'resources', 'lesson-single': 'resources', 'course-unit': 'resources'
        };
        
        if (currentPage) {
            document.querySelectorAll(`.nav-link[data-page-id="${currentPage}"]`).forEach(link => link.classList.add('active-page-link'));
            const currentGroup = pageGroups[currentPage];
            if (currentGroup) {
                document.querySelectorAll(`.dropdown-toggle[data-page-group="${currentGroup}"]`).forEach(link => link.classList.add('active-page-link'));
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.site-footer .scroll-animated').forEach(el => observer.observe(el));
        
        setLanguage(localStorage.getItem('language') || 'en');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    siteRouter.init();
});
