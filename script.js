document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menu.style.maxHeight = menu.scrollHeight + "px";
            menu.style.transition = "max-height 0.4s ease";
        } else {
            menu.style.maxHeight = "0";
            menu.style.transition = "max-height 0.4s ease";
        }
    });

    // Inicializa o menu fechado
    menu.style.overflow = "hidden";
    menu.style.maxHeight = "0";
});