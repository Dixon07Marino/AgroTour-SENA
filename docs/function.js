// ============= function.js =============
const imagesArea = document.querySelector('.imagesarea');
const imagesArea2 = document.querySelector('.imagesarea2');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

const scrollAmount = 310;
const animationDuration = 400;

let isCooldown = false;

// Función de animación suave
function smoothScroll(element, direction) {
    if (isCooldown) return;
    isCooldown = true;

    const startPosition = element.scrollLeft;
    const targetPosition = startPosition + direction * scrollAmount;
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        const ease = easeOutCubic(progress);

        element.scrollLeft = startPosition + (targetPosition - startPosition) * ease;

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            setTimeout(() => {
                isCooldown = false;
            }, 400);
        }
    }

    requestAnimationFrame(animateScroll);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Función para desplazar con corrección para centrado
function desplazar(imagesArea, direccion) {
    if (isCooldown) return;
    isCooldown = true;

    const elementoWidth = imagesArea.querySelector('.imagebg').offsetWidth;
    const cantidadDesplazar = elementoWidth + parseInt(getComputedStyle(imagesArea).gap || 0);
    
    imagesArea.scrollBy({
        left: direccion * cantidadDesplazar,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isCooldown = false;
    }, 600);
}

// Eventos de navegación
leftArrow.addEventListener('click', () => desplazar(imagesArea, -1));
rightArrow.addEventListener('click', () => desplazar(imagesArea, 1));
leftArrow2.addEventListener('click', () => desplazar(imagesArea2, -1));
rightArrow2.addEventListener('click', () => desplazar(imagesArea2, 1));

// Funciones para el sidebar
const dmenu = document.getElementById('dmenu');

function openSidebar() {
    dmenu.classList.add("on");
}

function closeSidebar() {
    dmenu.classList.remove("on");
}

// Nueva función para renderizar productos
function renderizarProductos() {
    const areasImagenes = {
        destacados: document.querySelector('.imagesarea'),
        ofertas: document.querySelector('.imagesarea2')
    };

    // Limpiar contenido existente
    for (const area in areasImagenes) {
        areasImagenes[area].innerHTML = '';
    }

    // Renderizar productos
    for (const categoria in productosHome) {
        productosHome[categoria].forEach(producto => {
            const productoHTML = crearElementoProducto(producto);
            areasImagenes[categoria].appendChild(productoHTML);
        });
    }
}

function crearElementoProducto(producto) {
    const imagebg = document.createElement('div');
    imagebg.className = 'imagebg';

    imagebg.innerHTML = `
        <div class="info">
            <div class="tipo" id="${producto.tipo.toLowerCase()}"><strong><span>${producto.tipo}</span></strong></div>
            <div class="precio${producto.oferta ? ' oferta' : ''}">
                <i class="fa-solid fa-dollar-sign"></i><strong><span> ${producto.precio.toLocaleString()}</span></strong>
            </div>
        </div>
        <img src="${producto.imagen}" class="image" alt="${producto.titulo}">
        <div class="h3bg"><h3>${producto.titulo}</h3></div>
        <div class="info2">
            <div class="stars" style="cursor: pointer;">
                <a href=" ">
                    ${generarEstrellas(producto.estrellas)}
                    <strong><span class="reseña">RESEÑAS</span></strong>
                </a>
            </div>
            <a href=" "><div class="mas"><strong><h3 style="cursor: pointer; color:white;">SABER MÁS</h3></strong></div></a>
            <a href=" "><div class="dots" style="cursor: pointer; color:white;"><i class="fa-solid fa-share-nodes"></i></div></a>
        </div>
    `;

    return imagebg;
}

function generarEstrellas(cantidad) {
    return Array(5).fill('').map((_, index) => 
        `<span>${index < cantidad ? '★' : '☆'}</span>`
    ).join('');
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', renderizarProductos);