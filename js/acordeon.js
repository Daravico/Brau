document.addEventListener('DOMContentLoaded', () => {
    const acordeonItems = document.querySelectorAll('.acordeon-item');

    acordeonItems.forEach(item => {
        const button = item.querySelector('.accordion-button');

        button.addEventListener('click', () => {
            // Cierra todos los otros acordeones
            acordeonItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna la clase 'active' en el acordeón clickeado
            item.classList.toggle('active');
        });
    });
});