// script-sihijau.js
// Scrollspy & smooth scroll untuk sinkronisasi navbar dan konten

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Scrollspy
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    function onScroll() {
        let current = '';
        const scrollPos = window.scrollY + (window.innerHeight * 0.25); // lebih stabil untuk highlight
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // offset navbar
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const nav = document.querySelector('.navbar');
                    // Close mobile menu if open
                    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                    }
                    
                    const navHeight = nav ? nav.offsetHeight : 0;
                    const top = target.offsetTop - navHeight - 8;
                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
