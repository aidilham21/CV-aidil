// Efek highlight pada section saat di-hover
const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}

const sections = document.querySelectorAll('main section');
sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.boxShadow = '0 4px 16px rgba(13,71,161,0.10)';
        section.style.transform = 'scale(1.01)';
        section.style.transition = 'all 0.2s';
    });
    section.addEventListener('mouseleave', () => {
        section.style.boxShadow = 'none';
        section.style.transform = 'scale(1)';
    });
});

// Animasi smooth saat scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('main section');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 80;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.opacity = 1;
            reveals[i].style.transform = 'translateY(0)';
            reveals[i].style.transition = 'all 0.6s';
        } else {
            reveals[i].style.opacity = 0.5;
            reveals[i].style.transform = 'translateY(40px)';
        }
    }
});

// Inisialisasi animasi section
window.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('main section');
    reveals.forEach(section => {
        section.style.opacity = 0.5;
        section.style.transform = 'translateY(40px)';
    });
});

// Scrollspy: update active nav-link and highlight section on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // offset for navbar
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
    sections.forEach(section => {
        section.classList.remove('active-section');
        if (section.getAttribute('id') === current) {
            section.classList.add('active-section');
        }
    });
});

// Smooth scroll and offset for navbar
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Close mobile menu if open
                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                }
                const nav = document.querySelector('.navbar');
                const navHeight = nav ? nav.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8; // 8px extra offset
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Tombol auto scroll ke atas
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Tombol auto scroll ke bawah
const scrollDownBtn = document.getElementById('scrollDown');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}
