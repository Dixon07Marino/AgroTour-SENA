// V 2.5 
const imagesArea = document.querySelector('.imagesarea');
const imagesArea2 = document.querySelector('.imagesarea2');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');

const scrollAmount = 310;
const animationDuration = 400; // Milisegundos

let isCooldown = false; // Variable para verificar el estado del cooldown

// Función de animación suave
function smoothScroll(element, direction) {
    if (isCooldown) return; // Si está en cooldown, no hacer nada
    isCooldown = true; // Activar cooldown

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
                isCooldown = false; // Desactivar cooldown después de 1 segundo
            }, 400); // Cooldown de 1 segundo
        }
    }

    requestAnimationFrame(animateScroll);
}

// Función de easing
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Eventos de clic
leftArrow.addEventListener('click', () => smoothScroll(imagesArea, -1));
rightArrow.addEventListener('click', () => smoothScroll(imagesArea, 1));
leftArrow2.addEventListener('click', () => smoothScroll(imagesArea2, -1));
rightArrow2.addEventListener('click', () => smoothScroll(imagesArea2, 1));

// Función para desplazar con corrección para centrado
function desplazar(imagesArea, direccion) {
    if (isCooldown) return; // Si está en cooldown, no hacer nada
    isCooldown = true; // Activar cooldown

    const elementoWidth = imagesArea.querySelector('.imagebg').offsetWidth;
    const cantidadDesplazar = elementoWidth + parseInt(getComputedStyle(imagesArea).gap || 0);
    
    // Desplazamiento con corrección para centrado
    imagesArea.scrollBy({
        left: direccion * cantidadDesplazar,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isCooldown = false; // Desactivar cooldown después de 1 segundo
    }, 600); // Cooldown de 1 segundo
}

leftArrow.addEventListener('click', () => desplazar(imagesArea, -1));
rightArrow.addEventListener('click', () => desplazar(imagesArea, 1));
leftArrow2.addEventListener('click', () => desplazar(imagesArea2, -1));
rightArrow2.addEventListener('click', () => desplazar(imagesArea2, 1));

// Función para centrar el contenedor
function centerContainer(container) {
    const containerWidth = container.offsetWidth;
    const totalWidth = container.scrollWidth;
    const scrollPosition = container.scrollLeft;

    // Calcular el nuevo desplazamiento para centrar el contenido
    const centerOffset = (containerWidth - totalWidth) / 2;
    container.scrollLeft = scrollPosition - centerOffset;
}
