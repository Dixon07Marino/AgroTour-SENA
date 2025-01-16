
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

// Obtener el modal y sus elementos
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');

// Crear un array con las imágenes y textos que quieres mostrar (puedes ampliarlo)
const modalContent = [
    { image: 'https://i.pinimg.com/736x/a9/dd/1c/a9dd1c9f908aab719b030eeac5260e8e.jpg', text: 'Texto para la primera tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' },
    { image: 'https://i.pinimg.com/736x/cb/7b/36/cb7b36425f76454e12bc47a7eb89781a.jpg', text: 'Texto para la segunda tarjeta.' }
];

// Delegación de eventos: Asignar evento de clic a todos los botones .btn-show-more
document.body.addEventListener('click', function(event) {
    // Verificar si el clic fue en un botón con clase 'btn-show-more'
    if (event.target && event.target.classList.contains('show-more')) {
        // Obtener el índice del botón dentro de su contenedor .card-item
        const index = Array.from(document.querySelectorAll('.card-item')).indexOf(event.target.closest('.card-item'));

        // Verificar si hay contenido para ese índice en el array
        if (modalContent[index]) {
            modalImage.src = modalContent[index].image;
            modalText.textContent = modalContent[index].text;
            modal.style.display = 'block';
        }
    }
});

// Funcionalidad para cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});