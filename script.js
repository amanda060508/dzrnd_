```javascript
// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Tutup menu mobile setelah memilih navigasi
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// Menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}


// Tahun otomatis di footer
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Dark mode
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function applyTheme(theme) {
    body.classList.toggle('dark-mode', theme === 'dark-mode');

    if (themeIcon) {
        themeIcon.classList.toggle('fa-moon', theme !== 'dark-mode');
        themeIcon.classList.toggle('fa-sun', theme === 'dark-mode');
    }
}

// Gunakan tema yang tersimpan, atau tema terang sebagai default
let currentTheme = 'light-mode';

try {
    currentTheme = localStorage.getItem('theme') || 'light-mode';
} catch (error) {
    currentTheme = 'light-mode';
}

applyTheme(currentTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        const nextTheme = isDark ? 'light-mode' : 'dark-mode';

        applyTheme(nextTheme);

        try {
            localStorage.setItem('theme', nextTheme);
        } catch (error) {
            // Website tetap berfungsi jika penyimpanan tidak tersedia
        }
    });
}


// Tombol kembali ke atas
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
```