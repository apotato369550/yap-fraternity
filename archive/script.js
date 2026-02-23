// ===== NAVIGATION HIGHLIGHTING =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== SMOOTH SCROLL HELPER =====
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== FUTURE: CAROUSEL INITIALIZATION =====
// Placeholder for carousel functionality when community.html is built
function initCarousel(carouselId) {
    // Will be implemented with event galleries
}
