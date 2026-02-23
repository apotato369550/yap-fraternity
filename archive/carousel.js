// ===== CAROUSEL STATE =====
const carouselState = {};

// ===== INITIALIZE CAROUSELS =====
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        const images = carousel.querySelectorAll('.carousel-image');
        const dotsContainer = document.getElementById(`dots-${carouselId.split('-')[1]}`);

        carouselState[carouselId] = {
            currentIndex: 0,
            total: images.length,
            element: carousel,
            dotsContainer: dotsContainer
        };

        // Initialize dots
        createDots(carouselId);

        // Show first image
        showSlide(carouselId, 0);
    });
});

// ===== CREATE CAROUSEL DOTS =====
function createDots(carouselId) {
    const state = carouselState[carouselId];
    const dotsContainer = state.dotsContainer;

    dotsContainer.innerHTML = '';

    for (let i = 0; i < state.total; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            showSlide(carouselId, i);
        });

        dotsContainer.appendChild(dot);
    }
}

// ===== SHOW SPECIFIC SLIDE =====
function showSlide(carouselId, index) {
    const state = carouselState[carouselId];
    const images = state.element.querySelectorAll('.carousel-image');
    const dots = state.dotsContainer.querySelectorAll('.dot');

    // Normalize index
    if (index >= state.total) {
        state.currentIndex = 0;
    } else if (index < 0) {
        state.currentIndex = state.total - 1;
    } else {
        state.currentIndex = index;
    }

    // Update images
    images.forEach((img, idx) => {
        if (idx === state.currentIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });

    // Update dots
    dots.forEach((dot, idx) => {
        if (idx === state.currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ===== MOVE SLIDE (NEXT/PREV) =====
function moveSlide(direction, carouselId) {
    const state = carouselState[carouselId];
    const newIndex = state.currentIndex + direction;
    showSlide(carouselId, newIndex);
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        const carouselIds = Object.keys(carouselState);
        if (carouselIds.length > 0) {
            moveSlide(-1, carouselIds[0]); // Move first carousel
        }
    } else if (event.key === 'ArrowRight') {
        const carouselIds = Object.keys(carouselState);
        if (carouselIds.length > 0) {
            moveSlide(1, carouselIds[0]); // Move first carousel
        }
    }
});
