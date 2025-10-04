"use strict";

const categorias = [
    { icon: "🏈", name: "Sport", game:[] },
    { icon: "⚔️", name: "Action", game:[] },
    { icon: "🏁", name: "Adventure", game:[] },
    { icon: "🃏", name: "Cards", game:[] },
    { icon: "🚗", name: "Cars", game:[] },
    { icon: "🎯", name: "Shots", game:[] },
    { icon: "🏍️", name: "Motorcycles", game:[] },
    { icon: "🧩", name: "Puzzle", game:[] },
    { icon: "👗", name: "Fashion", game:[] },
    { icon: "🍔", name: "Cook", game:[] },
    { icon: "👻", name: "Terrifying", game:[] },
    { icon: "🚪", name: "Exhaust", game:[] },
    { icon: "💥", name: "War", game:[] },
    { icon: "🔫", name: "Arms", game:[] },
    { icon: "🎨", name: "Paint", game:[] },
    { icon: "💡", name: "Strategy", game:[] }, 
    { icon: "⚽", name: "Soccer", game:[] }
];

document.addEventListener('DOMContentLoaded', () => {

    const contenedor = document.getElementById("sidebar-container"); // donde lo coloca.

    if (!contenedor) {
        console.error("Error: El contenedor con id 'sidebar-container' no se encontró en el DOM.");
        return;
    }

    fetch("/TP2/components/sidebar/sidebar-template.html")
        .then(res => {
            if (!res.ok) throw new Error(`Error al cargar el template: ${res.statusText} (${res.status})`);
            return res.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const template = doc.getElementById("sidebar-template");

            if (!template) {
                console.error("Error: No se encontró el <template> con id 'sidebar-template'.");
                return;
            }

            // Clona el sidebar
            const clone = template.content.cloneNode(true);
            contenedor.appendChild(clone);

            // Insertar categorías dinámicamente
            const categoriesList = contenedor.querySelector("#categories");
            const categoryTemplate = contenedor.querySelector("#category-item");

            if (categoriesList && categoryTemplate) {
                categorias.forEach(cat => {
                    const cloneCat = categoryTemplate.content.cloneNode(true);
                    const iconElement = cloneCat.querySelector(".icon");
                    const nameElement = cloneCat.querySelector(".category-name");

                    if (iconElement) iconElement.textContent = cat.icon || '❓';
                    if (nameElement) nameElement.textContent = cat.name;

                    const listItem = cloneCat.querySelector("li");
                    if (listItem) {
                        listItem.classList.add('sidebar-list-item');
                        listItem.dataset.category = cat.name;
                    }

                    categoriesList.appendChild(cloneCat);
                });
            }

            // Funcionalidad del botón desplegable
            const menuButton = document.querySelector('.header-menu-btn');
            const sidebar = contenedor.querySelector('.sidebar');
            const body = document.body;

            if (menuButton && sidebar) {
                menuButton.addEventListener('click', () => {
                    sidebar.classList.toggle('active');
                    body.classList.toggle('menu-open');
                });
            }

        })
        .catch(err => console.error("Error cargando el template:", err));
});
