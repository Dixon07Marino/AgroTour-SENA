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
fetch('https://delapazfonseca21.github.io/data/db.json')
.then(response => response.json())

.then(data => renderProductos(data, 'imagesarea-recomendaciones'));

//renderizar productos en ofertas
fetch("https://delapazfonseca21.github.io/data2/ofertas.json")
.then(response => response.json())
.then(data2 => renderProductos(data2, 'imagesarea-ofertas'));

function renderProductos(productos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);

    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.className = "imagebg";

        // Crear los elementos que irán dentro del contenedor de producto

        // Destino y precio
        const info = document.createElement("div");
        info.className = "info";
        const destino = document.createElement("div");
        destino.className = "tipo";
        destino.id = "paquete";

        // Se le agrega contenido
        const tipo = document.createElement("span");
        tipo.textContent = producto.tipo;
        destino.appendChild(tipo);
        info.appendChild(destino);

        // Precio del producto
        const precio = document.createElement("div");
        precio.className = "precio";
        const contenidoPrecio = document.createElement("span");
        contenidoPrecio.textContent = `$${producto.precio}`;
        precio.appendChild(contenidoPrecio);
        info.appendChild(precio);

        // Agregando la imagen del producto
        const imagen = document.createElement("img");
        imagen.className = "image";
        imagen.src = producto.imagen;

        // Título/descripción del producto
        const description = document.createElement("div");
        description.className = "h3bg";
        const contenido = document.createElement("h3");
        contenido.textContent = producto.titulo;
        description.appendChild(contenido);


        productoDiv.appendChild(info);
        productoDiv.appendChild(imagen);
        productoDiv.appendChild(description);

        contenedor.appendChild(productoDiv);
    });
}


