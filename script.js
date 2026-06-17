document.addEventListener("DOMContentLoaded", () => {
    
    /* ================= 1. PAGES & NAVIGATION VARIABLES ================= */
    const navHome = document.getElementById('nav-home');
    const navExplore = document.getElementById('nav-explore');
    const navEsports = document.getElementById('nav-esports');
    const navProfile = document.getElementById('nav-profile');

    const homePage = document.getElementById('home-page');
    const explorePage = document.getElementById('explore-page');
    const esportsPage = document.getElementById('esports-page');
    const profilePage = document.getElementById('profile-page');

    const allNavItems = document.querySelectorAll('.nav-item');
    const allPages = [homePage, explorePage, esportsPage, profilePage];

    /* ================= 2. PAGE SWITCHING LOGIC ================= */
    function switchGamerPage(activePage, activeNav) {
        if (!activePage || !activeNav) return;

        // Saare pages ko chhupao
        allPages.forEach(page => { 
            if (page) page.style.display = 'none'; 
        });

        // Saare buttons se active class hatao
        allNavItems.forEach(nav => {
            if (nav) nav.classList.remove('active');
        });
        
        // Jo page aur nav active karna hai use dikhao
        activePage.style.display = 'block';
        activeNav.classList.add('active');
    }

    // Navigation Click Event Listeners
    if (navHome) navHome.addEventListener('click', (e) => { e.preventDefault(); switchGamerPage(homePage, navHome); });
    if (navExplore) navExplore.addEventListener('click', (e) => { e.preventDefault(); switchGamerPage(explorePage, navExplore); });
    if (navEsports) navEsports.addEventListener('click', (e) => { e.preventDefault(); switchGamerPage(esportsPage, navEsports); });
    if (navProfile) navProfile.addEventListener('click', (e) => { e.preventDefault(); switchGamerPage(profilePage, navProfile); });


    /* ================= 3. CATEGORY SELECTION LOGIC ================= */
    // Home aur Esports dono ki categories ko alag-alag manage karne ke liye generic logic
    const categoryContainers = document.querySelectorAll('.categories');
    categoryContainers.forEach(container => {
        const catBtns = container.querySelectorAll('.cat-btn');
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    });


    /* ================= 4. INTERACTIVE PLAY BUTTON ================= */
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', () => {
            playBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> LOADING...';
            setTimeout(() => {
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i> PLAY NOW';
                alert("Game is launching... 🚀");
            }, 1500);
        });
    }


    /* ================= 5. DESKTOP MOUSE WHEEL SCROLL ================= */
    const gameSlider = document.querySelector('.game-slider');
    if (gameSlider) {
        gameSlider.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            gameSlider.scrollLeft += evt.deltaY;
        });
    }
});

// ================= ALL NAV BUTTONS CLICK VIBRATION ================= //

// 1. Bottom nav ke andar ke saare links/items ko ek sath pakadna
const navItems = document.querySelectorAll('.bottom-nav .nav-item, #nav-play');

// 2. Loop chala kar har ek button par click event lagana
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Check karna ki mobile phone vibration support karta hai ya nahi
        if (navigator.vibrate) {
            // 40 milliseconds ka ek ekdum crisp aur patla vibration shock dega
            navigator.vibrate(45); 
        }
    });
});
