document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('video-popup');
    const videoElement = document.getElementById('popup-video');
    const closeBtn = document.getElementById('close-popup-btn');
    const showBtn = document.getElementById('show-popup-btn');

    // Función para mostrar el pop-up
    function showPopup() {
        popupOverlay.style.display = 'flex';
        videoElement.play();
    }

    // Función para ocultar el pop-up
    function hidePopup() {
        popupOverlay.style.display = 'none';
        videoElement.pause();
        videoElement.currentTime = 0; // Reinicia el video al principio
    }

    // Mostrar el pop-up automáticamente al cargar la página
    showPopup();

    // Evento para cerrar el pop-up
    closeBtn.addEventListener('click', hidePopup);

    // Evento para mostrar el pop-up con el botón
    showBtn.addEventListener('click', showPopup);

    // Ocultar el pop-up si se hace clic fuera del contenido
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});