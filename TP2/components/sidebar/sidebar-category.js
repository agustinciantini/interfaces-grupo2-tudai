"use strict";

// Definición de las Categorías:
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


// Referencia al DOM:
const contenedor = document.getElementById("categories"); 


if (!contenedor) {
    console.error("Error: El contenedor con id 'categories' no se encontró en el DOM. Asegúrate de que el ID es correcto en tu HTML.");
} else {
    fetch("/TP2/components/sidebar/category-item.html") // ó ./components/sidebar/category-item.html
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error al cargar la plantilla: ${res.statusText} (${res.status})`);
            }
            return res.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const template = doc.getElementById("category-item");

            if (!template) {
                console.error("Error: No se encontró el <template> con id 'category-item' dentro del archivo cargado. Revisa que el ID del template sea correcto.");
                return;
            }

            categorias.forEach(cat => {
                
                let clone = template.content.cloneNode(true);
                
                const iconElement = clone.querySelector(".icon");
                const nameElement = clone.querySelector(".category-name");

                if (iconElement) iconElement.textContent = cat.icon || '❓';
                if (nameElement) nameElement.textContent = cat.name;

                const listItem = clone.querySelector("li");
                if (listItem) {
                    listItem.dataset.category = cat.name;
                }
                
                contenedor.appendChild(clone);
            });
        })
        .catch(error => {
            console.error("Error al cargar o procesar la plantilla:", error);
        });
}