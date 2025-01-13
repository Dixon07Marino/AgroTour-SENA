
const dmenu = document.getElementById('dmenu');

function openSidebar() {
    dmenu.classList.add("on");
}

function closeSidebar() {
    dmenu.classList.remove("on");
}


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    const changeSlide = () => {

      slides.forEach((slide, index) => {
        slide.classList.remove("active");
      });
  
      slides[currentIndex].classList.add("active");
  
      currentIndex = (currentIndex + 1) % slides.length;
    };
  
    changeSlide(); 
    setInterval(changeSlide, 3000);
  });

  
  const cardContainer = document.querySelector('.cardContainer');
const scrollDistance = 200; 

document.querySelector('#arrow-ab-r').addEventListener('click', () => {
  nextItem(cardContainer, scrollDistance);
});

document.querySelector('#arrow-ab-l').addEventListener('click', () => {
  previousItem(cardContainer, scrollDistance);
});

function nextItem(cardContainer, scrollDistance) {
  cardContainer.scrollBy({ left: scrollDistance, behavior: "smooth" });
}

function previousItem(cardContainer, scrollDistance) {
  cardContainer.scrollBy({ left: -scrollDistance, behavior: "smooth" });
}



const cardContainer2 = document.querySelector('.cardContainer2');
const scrollDistance2 = 200; 

document.querySelector('#arrow-ab-r2').addEventListener('click', () => {
  nextItem(cardContainer2, scrollDistance2);
});

document.querySelector('#arrow-ab-l2').addEventListener('click', () => {
  previousItem(cardContainer2, scrollDistance2);
});

function nextItem(cardContainer2, scrollDistance2) {
  cardContainer2.scrollBy({ left: scrollDistance2, behavior: "smooth" });
}

function previousItem(cardContainer2, scrollDistance2) {
  cardContainer2.scrollBy({ left: -scrollDistance2, behavior: "smooth" });
}

const showModalBtn = document.getElementById('showModalBtn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    // Mostrar el modal
    showModalBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    // Ocultar el modal
    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  