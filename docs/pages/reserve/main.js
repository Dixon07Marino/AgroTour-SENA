
const dmenu = document.getElementById('dmenu');

function openSidebar() {
    dmenu.classList.add("on");
}

function closeSidebar() {
    dmenu.classList.remove("on");
}

const cardContainerS = document.createElement('div');
cardContainerS.classList.add('cardContainer');

const cardItemsData = [
    {
        price: '$22.000',
        title: 'Cuartos Dobles',
        imageUrl: 'https://finca-el-sueno-de-mi-abuelo-guest-house.hotelesejecafetero.net/data/Photos/300x300w/7791/779188/779188920.JPEG'
    },
    {
        price: '$6.000',
        title: 'Wifi',
        imageUrl: 'https://i.pinimg.com/736x/c7/8f/aa/c78faa35509bda84f1507d5a1fb93489.jpg'
    },
    {
        price: '$15.000 - $40.000',
        title: 'Desayuno',
        imageUrl: 'https://i.pinimg.com/736x/24/70/09/247009b93607aacad74b50b625b36319.jpg'
    },
    {
        price: '$4.000 - $65.000',
        title: 'Comida/Bebida',
        imageUrl: 'https://i.pinimg.com/736x/27/76/40/277640df7455fb6a142eb105b9b8ebe3.jpg'
    },
    {
        price: '$8.000',
        title: 'Salas de reuniones',
        imageUrl: 'https://finca-el-sueno-de-mi-abuelo-guest-house.hotelesejecafetero.net/data/Images/1920x1080w/15846/1584645/1584645712/image-pereira-finca-el-sueno-de-mi-abuelo-guest-house-10.JPEG'
    },
    {
        price: 'GRATIS',
        title: 'Acceso para sillas de ruedas',
        imageUrl: 'https://i.pinimg.com/736x/23/24/cb/2324cb948b6acb2cd78b1913ec67c362.jpg'
    }
];

cardItemsData.forEach(item => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = `<span>${item.price}</span>`;

    const title = document.createElement('h2');
    title.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imageUrl;

    const button = document.createElement('button');
    button.classList.add('show-more');
    button.id = 'show-more';
    button.textContent = 'VER MÁS';

    cardItem.appendChild(price);
    cardItem.appendChild(title);
    cardItem.appendChild(img);
    cardItem.appendChild(button);

    cardContainerS.appendChild(cardItem);
});

// Buscar el div con id "services"
const servicesDiv = document.getElementById('services');

// Asegurarse de que el div "services" existe y agregar el cardContainer como antepenúltimo hijo
if (servicesDiv) {
    const children = servicesDiv.children;
    const antepenultimateChild = children[children.length - 2]; // Obtiene el antepenúltimo hijo
    servicesDiv.insertBefore(cardContainerS, antepenultimateChild);
}

const cardContainerA = document.createElement('div');
cardContainerA.classList.add('cardContainer2');

const cardItemsDataA = [
    {
        price: '$8.000',
        title: 'Pesca',
        imageUrl: 'https://i.pinimg.com/736x/8a/77/c6/8a77c6e8835fad40f7dd6aaff8426d0a.jpg'
    },
    {
        price: '$13.000',
        title: 'Excursionismo',
        imageUrl: 'https://i.pinimg.com/736x/96/9f/76/969f76c21bbee1930174a12ed24f6f62.jpg'
    },
    {
        price: '$8.000',
        title: 'Billar Americano',
        imageUrl: 'https://i.pinimg.com/736x/f1/12/0b/f1120bee976657b03fe61f7c1a371ece.jpg'
    },
    {
        price: '$6.000',
        title: 'Ping pong',
        imageUrl: 'https://i.pinimg.com/736x/bc/f6/53/bcf6539cc49aa79e07c0583e3fd84ba0.jpg'
    },
    {
        price: '$6.000',
        title: 'Piscina',
        imageUrl: 'https://finca-el-sueno-de-mi-abuelo-guest-house.hotelesejecafetero.net/data/Images/1920x1080w/15846/1584645/1584645754/image-pereira-finca-el-sueno-de-mi-abuelo-guest-house-70.JPEG'
    }
];

cardItemsDataA.forEach(item => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');

    const price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = `<span>${item.price}</span>`;

    const title = document.createElement('h2');
    title.textContent = item.title;

    const img = document.createElement('img');
    img.src = item.imageUrl;

    const button = document.createElement('button');
    button.classList.add('show-more');
    button.id = 'show-more';
    button.textContent = 'VER MÁS';

    cardItem.appendChild(price);
    cardItem.appendChild(title);
    cardItem.appendChild(img);
    cardItem.appendChild(button);

    cardContainerA.appendChild(cardItem);
});

// Buscar el div con id "activities"
const activitiesDiv = document.getElementById('activities');

// Asegurarse de que el div "activities" existe y agregar el cardContainerA como antepenúltimo hijo
if (activitiesDiv) {
    const childrenA = activitiesDiv.children;
    const antepenultimateChildA = childrenA[childrenA.length - 2]; // Obtiene el antepenúltimo hijo
    activitiesDiv.insertBefore(cardContainerA, antepenultimateChildA);
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

/*
// Ejemplo de imágenes y texto aleatorio
const imagenes = [
  'https://finca-el-sueno-de-mi-abuelo-guest-house.hotelesejecafetero.net/data/Photos/300x300w/7791/779188/779188293.JPEG',
  'https://via.placeholder.com/150?text=Imagen+2',
  'https://via.placeholder.com/150?text=Imagen+3'
];

const textos = [
  'Texto aleatorio 1',
  'Texto aleatorio 2',
  'Texto aleatorio 3'
];

// Función para agregar un modal y un botón a cada card-item
function agregarModalesYBotones() {
  // Seleccionamos todos los divs con la clase 'card-item'
  const cardItems = document.querySelectorAll('.card-item');

  cardItems.forEach((cardItem, index) => {
      // Crear el botón para abrir el modal
      const botonModal = document.createElement('button');
      botonModal.className = 'boton-modal';
      botonModal.textContent = 'Ver más';
      
      // Crear el modal
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.style.display = 'none'; // Modal inicialmente oculto

      // Modal contenido
      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';

      // Crear una imagen aleatoria
      const imagenAleatoria = document.createElement('img');
      imagenAleatoria.src = imagenes[Math.floor(Math.random() * imagenes.length)];
      imagenAleatoria.alt = 'Imagen aleatoria';

      // Crear un texto aleatorio
      const textoAleatorio = document.createElement('p');
      textoAleatorio.textContent = textos[Math.floor(Math.random() * textos.length)];

      // Agregar imagen y texto al modal
      modalContent.appendChild(imagenAleatoria);
      modalContent.appendChild(textoAleatorio);
      modal.appendChild(modalContent);

      // Agregar el botón y el modal al card-item
      cardItem.appendChild(botonModal);
      cardItem.appendChild(modal);

      // Función para abrir el modal
      botonModal.addEventListener('click', () => {
          modal.style.display = 'block';
      });

      // Crear el botón de cerrar dentro del modal
      const cerrarModal = document.createElement('span');
      cerrarModal.className = 'close';
      cerrarModal.textContent = 'X';

      // Agregar el botón de cerrar al modal
      modalContent.appendChild(cerrarModal);

      // Función para cerrar el modal cuando se hace clic en 'X'
      cerrarModal.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      // Detectar cuando el mouse sale del área del modal para cerrarlo
      modal.addEventListener('mouseleave', () => {
          modal.style.display = 'none';
      });

      // No cerramos el modal si se hace clic dentro del contenido (en modalContent)
      modalContent.addEventListener('click', (event) => {
          event.stopPropagation();  // Evitar que el evento se propague al modal (y lo cierre)
      });

      // Si se hace clic fuera del modal (en el fondo), se cierra
      window.addEventListener('click', (event) => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  });
}

// Llamar a la función para agregar botones y modales cuando la página se carga
window.onload = agregarModalesYBotones; */

