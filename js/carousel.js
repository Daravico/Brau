// js/carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const carouselDotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    // La línea siguiente puede dar error si las imágenes no han cargado aún,
    // por lo que es mejor obtener el ancho después de la carga
    let slideWidth = carouselImages.length > 0 ? carouselImages[0].clientWidth : 0;
    const totalImages = carouselImages.length;
    const intervalTime = 3000; // Cambia de imagen cada 3 segundos

    // Crear los puntos indicadores
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        carouselDotsContainer.appendChild(dot);
    }
    const carouselDots = document.querySelectorAll('.carousel-dot');

    // Función para ir a una diapositiva específica
    function goToSlide(index) {
        if (slideWidth === 0 && carouselImages.length > 0) {
            slideWidth = carouselImages[0].clientWidth; // Recalcula si el ancho es 0
        }
        carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
        currentIndex = index;
        updateDots();
    }

    // Actualizar los puntos indicadores
    function updateDots() {
        carouselDots.forEach(dot => dot.classList.remove('active'));
        if (carouselDots[currentIndex]) {
            carouselDots[currentIndex].classList.add('active');
        }
    }

    // Función para avanzar a la siguiente diapositiva
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        goToSlide(currentIndex);
    }

    // Iniciar el carrusel automático
    let carouselInterval = setInterval(nextSlide, intervalTime);

    // Ajustar el carrusel si se redimensiona la ventana
    window.addEventListener('resize', () => {
        slideWidth = carouselImages.length > 0 ? carouselImages[0].clientWidth : 0;
        goToSlide(currentIndex);
    });

    // Detener el carrusel al pasar el mouse por encima
    carouselSlide.addEventListener('mouseover', () => clearInterval(carouselInterval));
    // Reanudar el carrusel al quitar el mouse
    carouselSlide.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, intervalTime);
    });
}); 