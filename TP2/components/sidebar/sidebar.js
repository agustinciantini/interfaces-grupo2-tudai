"use strict";

// function initSidebar(container){
    // container.addEventListener('DOMContentLoaded', () => {
    
    const sidebarIndex = document.querySelector(".sidebar-index");

    fetch("components/sidebar/sidebar.html")
        .then(res => res.text())
        .then(html => {
            sidebarIndex.innerHTML = html;
        });
    
    const menuButton = document.querySelector('.header-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    if(menuButton){
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }
    // });

// }