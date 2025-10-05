document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.querySelector('.header-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
});