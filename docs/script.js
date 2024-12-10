document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Package click to show/hide details
    carouselItems.forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.package-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Carousel navigation
    function moveCarousel(direction) {
        const itemWidth = carouselItems[0].offsetLeft + 20; // width + gap
        currentIndex = direction === 'next' 
            ? Math.min(currentIndex + 1, carouselItems.length - 1)
            : Math.max(currentIndex - 1, 0);
        
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevBtn.addEventListener('click', () => moveCarousel('prev'));
    nextBtn.addEventListener('click', () => moveCarousel('next'));

    // Optional: Mouse drag to scroll
    let isDragging = false;
    let startX, scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 to increase drag sensitivity
        carousel.scrollLeft = scrollLeft - walk;
    });
});