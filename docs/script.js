class Modal {
    constructor(triggerId, modalId, closeId) {
        this.trigger = document.getElementById(triggerId);
        this.modal = document.getElementById(modalId);
        this.close = document.getElementById(closeId);
        this.init();
    }

    init() {
        this.hideModal(); // Ensure modal is hidden initially
        this.trigger.addEventListener('click', () => this.showModal());
        this.close.addEventListener('click', () => this.hideModal());
    }

    showModal() {
        this.modal.style.display = 'block';
    }

    hideModal() {
        this.modal.style.display = 'none';
    }
}

class Carousel {
    constructor(carouselSelector, prevBtnSelector, nextBtnSelector) {
        this.carousel = document.querySelector(carouselSelector);
        this.carouselItems = Array.from(this.carousel.children);
        this.prevBtn = document.querySelector(prevBtnSelector);
        this.nextBtn = document.querySelector(nextBtnSelector);
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.carouselItems.forEach(item => {
            item.addEventListener('click', () => this.toggleDetails(item));
        });
        this.prevBtn.addEventListener('click', () => this.move('prev'));
        this.nextBtn.addEventListener('click', () => this.move('next'));
        this.enableDragging();
    }

    toggleDetails(item) {
        const details = item.querySelector('.package-details');
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    }

    move(direction) {
        const itemWidth = this.carouselItems[0].offsetLeft + 20; // width + gap
        if (direction === 'next') {
            this.currentIndex = Math.min(this.currentIndex + 1, this.carouselItems.length - 1);
        } else {
            this.currentIndex = Math.max(this.currentIndex - 1, 0);
        }
        this.carousel.style.transform = `translateX(-${this.currentIndex * itemWidth}px)`;
    }

    enableDragging() {
        let isDragging = false;
        let startX, scrollLeft;

        this.carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - this.carousel.offsetLeft;
            scrollLeft = this.carousel.scrollLeft;
        });

        this.carousel.addEventListener('mouseleave', () => isDragging = false);
        this.carousel.addEventListener('mouseup', () => isDragging = false);
        this.carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - this.carousel.offsetLeft;
            const walk = (x - startX) * 2; // Multiply by 2 to increase drag sensitivity
            this.carousel.scrollLeft = scrollLeft - walk;
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Modal('disparador', 'modal', 'cerrar');
    new Carousel('.carousel', '.prev-btn', '.next-btn');
});
