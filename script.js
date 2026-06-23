// YAHA SE LOGIN OR SIGN UP PAGE KA JS SURU HUAA HA 

document.addEventListener("DOMContentLoaded", () => {
    // === 1. UNIQUE ELEMENTS SELECTORS ===
    const loginBox = document.getElementById("ghLoginBox");
    const signUpBox = document.getElementById("ghSignUpBox");
    const toSignUp = document.getElementById("ghToSignUp");
    const toLogin = document.getElementById("ghToLogin");
    const portalCard = document.querySelector(".gh-portal-card");

    const signUpName = document.getElementById("ghSignUpName");
    const signUpPhone = document.getElementById("ghSignUpPhone");
    const signUpPass = document.getElementById("ghSignUpPass");
    const strengthBar = document.getElementById("ghStrengthBar");

    const mainAppContent = document.getElementById("mainAppContent");
    const gamingPortalWrapper = document.querySelector(".gh-portal-wrapper");

    /* === 2. STRICT REAL-TIME VALIDATION (Text/Number Filters) === */

    // Name field me number block karne ke liye
    if (signUpName) {
        signUpName.addEventListener("input", function() {
            const cleanValue = this.value.replace(/[^a-zA-Z\s]/g, "");
            if (this.value !== cleanValue) {
                this.value = cleanValue;
                showToast("Numbers & symbols are blocked in Name field!", "warning");
                triggerShake();
            }
        });
    }

    // Phone field me alphabets block karne ke liye
    if (signUpPhone) {
        signUpPhone.addEventListener("input", function() {
            const cleanValue = this.value.replace(/[^0-9]/g, "");
            if (this.value !== cleanValue) {
                this.value = cleanValue;
                showToast("Only digits are allowed in this field!", "warning");
                triggerShake();
            }
        });
    }

    // Password Strength Check karne ke liye
    if (signUpPass && strengthBar) {
        signUpPass.addEventListener("input", function() {
            const val = this.value;
            let score = 0;
            if (val.length >= 6) score++;
            if (val.length >= 10) score++;
            if (/[A-Z]/.test(val)) score++;
            if (/[0-9]/.test(val)) score++;
            if (/[^A-Za-z0-9]/.test(val)) score++;

            if (score === 0) {
                strengthBar.style.width = "0%";
            } else if (score <= 2) {
                strengthBar.style.width = "35%";
                strengthBar.style.backgroundColor = "#ff3333";
            } else if (score <= 4) {
                strengthBar.style.width = "70%";
                strengthBar.style.backgroundColor = "#ffaa00";
            } else {
                strengthBar.style.width = "100%";
                strengthBar.style.backgroundColor = "#00ff66";
            }
        });
    }

    /* === 3. PORTAL SCREEN SWITCHING ANIMATION === */
    if (toSignUp && loginBox && signUpBox) {
        toSignUp.addEventListener("click", (e) => {
            e.preventDefault();
            loginBox.classList.add("gh-hidden");
            setTimeout(() => {
                signUpBox.classList.remove("gh-hidden");
            }, 200);
        });
    }

    if (toLogin && loginBox && signUpBox) {
        toLogin.addEventListener("click", (e) => {
            e.preventDefault();
            signUpBox.classList.add("gh-hidden");
            setTimeout(() => {
                loginBox.classList.remove("gh-hidden");
            }, 200);
        });
    }

    /* === 4. CUSTOM TOAST & SHAKE SYSTEM === */
    function showToast(message, type = "info") {
        const container = document.getElementById("ghToastContainer");
        if(!container) return;
        const toast = document.createElement("div");
        toast.className = `gh-toast ${type}`;
        toast.innerText = message;
        
        if (type === "warning") {
            toast.style.borderLeftColor = "#ffaa00";
        }
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateX(30px)";
            toast.style.transition = "all 0.4s ease";
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    function triggerShake() {
        if (portalCard) {
            portalCard.classList.add("gh-shake");
            setTimeout(() => portalCard.classList.remove("gh-shake"), 400);
        }
    }

    /* === 5. FORM SUBMISSION & CONTENT UNLOCK === */
    
    // Login Submit Hone Par
    const loginForm = document.getElementById("ghLoginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("ghLoginEmail").value.trim();
            const pass = document.getElementById("ghLoginPass").value.trim();

            if (!email || !pass) {
                showToast("Access Denied: Please enter all credentials.", "warning");
                triggerShake();
                return;
            }
            
            showToast("Authentication Successful! Syncing profile...", "success");

            // Login hote hi portal wrapper ko hide karo aur main content ko show karo
            setTimeout(() => {
                if (gamingPortalWrapper) gamingPortalWrapper.style.display = "none"; 
                if (mainAppContent) mainAppContent.classList.remove("hidden");  
            }, 1500); 
        });
    }

    // Sign Up Submit Hone Par
    const signUpForm = document.getElementById("ghSignUpForm");
    if (signUpForm) {
        signUpForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("ghSignUpName").value.trim();
            const email = document.getElementById("ghSignUpEmail").value.trim();
            const phone = document.getElementById("ghSignUpPhone").value.trim();
            const pass = document.getElementById("ghSignUpPass").value;
            const confirmPass = document.getElementById("ghSignUpConfirmPass").value;

            if (!name || !email || !phone || !pass || !confirmPass) {
                showToast("Registration Error: Fill all required fields.", "warning");
                triggerShake();
                return;
            }

            if (pass !== confirmPass) {
                showToast("Security Exception: Passwords do not match!", "warning");
                triggerShake();
                return;
            }

            showToast("Account Enlisted! Launching Game...", "success");
            
            // Sign up hote hi direct andar bhej do
            setTimeout(() => {
                if (gamingPortalWrapper) gamingPortalWrapper.style.display = "none"; 
                if (mainAppContent) mainAppContent.classList.remove("hidden");  
            }, 2000);
        });
    }
});


// YAHA SE LOGIN OR SIGN UO KA PAGE KA JS KHATAM HO GAYA


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

// YAHA PAAS LOUNCH GAME OR REGISTER HERO BUTTON PAR VIBRATION KA CODE HA 
 
// ==========================================
// LAUNCH GAME & REGISTER HERO VIBRATION (FINAL FIX)
// ==========================================

// 1. LAUNCH GAME Button (Login Form)
const ghLoginForm = document.getElementById('ghLoginForm');
if (ghLoginForm) {
    ghLoginForm.addEventListener('submit', function() {
        if (navigator.vibrate) {
            navigator.vibrate(80); // Quick haptic feel
        }
    });
}

// 2. REGISTER HERO Button (Universal Fix)
// Yeh pure page par dhoondega ki kis element ke andar "REGISTER HERO" likha hai
document.addEventListener('click', function(e) {
    // Check karega ki jahan click hua hai usme "REGISTER HERO" likha hai ya nahi
    if (e.target && (e.target.textContent.includes('REGISTER HERO') || e.target.value === 'REGISTER HERO')) {
        if (navigator.vibrate) {
            navigator.vibrate([60, 40, 60]); // Gaming double vibration pattern
        }
    }
});

// YAHA SE VIBRATION CODE KHATAM

// ======================================
// PASSWORD HIDE/UNHIDE WITH EYE BUTTON CODE
// ======================================

document.querySelectorAll('.toggle-password').forEach(function(eyeIcon) {
    eyeIcon.addEventListener('click', function() {
        // Mobile ko chota sa haptic vibration feedback dega (40ms)
        if (navigator.vibrate) {
            navigator.vibrate(40); 
        }

        // Icon ke theek upar wale input field ko select karega
        const passwordInput = this.parentElement.querySelector('input');
        
        if (passwordInput.type === 'password') {
            // Password dikhane ke liye
            passwordInput.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash'); // Aankh par cut lag jayega
            this.style.color = 'var(--gh-neon-red)'; // Glower look ke liye red color
        } else {
            // Password chhupane ke liye
            passwordInput.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
            this.style.color = 'var(--gh-text-gray)'; // Wapas normal color
        }
    });
});

// SIGN UP PAGE SERCUL FUNCTIONS

{
    const signUpCircle = document.getElementById('ghAvatarPreview');
    const signUpFileInput = document.getElementById('ghImageInput');
    const signUpForm = document.getElementById('ghSignUpForm');
    const signUpNameField = document.getElementById('ghSignUpName');
    
    let tempUploadedImageBase64 = "";

    if (signUpCircle && signUpFileInput) {
        // Circle click karne par gallery kholna
        signUpCircle.addEventListener('click', () => {
            signUpFileInput.click();
        });

        // Photo select hone par preview dikhana
        signUpFileInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    signUpCircle.style.backgroundImage = `url(${e.target.result})`;
                    const plusIcon = document.getElementById('ghUploadIcon');
                    if (plusIcon) plusIcon.style.display = 'none';
                    tempUploadedImageBase64 = e.target.result; // Data save kiya variable me
                }
                reader.readAsDataURL(file);
            }
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Default form reloading roko

            const typedGamerName = signUpNameField ? signUpNameField.value.trim() : "";
            const targetNames = document.querySelectorAll('.appGamerName');
            const targetPics = document.querySelectorAll('.appGamerPic');

            // 1. Temporary name shift karna
            if (typedGamerName !== "") {
                targetNames.forEach(nameText => {
                    nameText.textContent = typedGamerName;
                });
            }

            // 2. Temporary picture shift karna
            if (tempUploadedImageBase64 !== "") {
                targetPics.forEach(imgElement => {
                    if (imgElement.tagName === 'IMG') {
                        imgElement.src = tempUploadedImageBase64;
                    } else {
                        imgElement.style.backgroundImage = `url(${tempUploadedImageBase64})`;
                    }
                });
            }

            // Yahan par aapka sign-up box hide karne aur main app content show karne ka custom function automatically hit hoga!
        });
    }
        }
        
