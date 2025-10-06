"use strict";
// Categorias:
const categorias = [
    { icon: "🏈", name: "sport", game:[] },
    { icon: "⚔️", name: "action", game:[] },
    { icon: "🏁", name: "adventure", game:[] },
    { icon: "🃏", name: "cards", game:[] },
    { icon: "🚗", name: "cars", game:[] },
    { icon: "🎯", name: "shots", game:[] },
    { icon: "🏍️", name: "motorcycles", game:[] },
    { icon: "🧩", name: "puzzle", game:["PegSolitaire"] },
    { icon: "👗", name: "fashion", game:[] },
    { icon: "🍔", name: "cook", game:[] },
    { icon: "👻", name: "terrifying", game:[] },
    { icon: "🚪", name: "exhaust", game:[] },
    { icon: "🪖", name: "war", game:[] },
    { icon: "🔫", name: "arms", game:[] },
    { icon: "🎨", name: "paint", game:[] },
    { icon: "💡", name: "strategy", game:["PegSolitaire"] },
    { icon: "⚽", name: "soccer", game:[] }
];

function initCategoriesGameplay(container){
    // Referencias al DOM:
    const categoriesContainer = container.querySelector("#categories");
    
    // Traigo el template desde game-category.html:
    fetch("components/game-category/game-category.html")
        .then(res => res.text())
        .then(html => {
            container.querySelector("#categories").innerHTML = html;
    
            const template = container.querySelector("#game-category-template");
    
            categorias.forEach(cat => {
                if(cat.game.includes("PegSolitaire")){
                    let clone = template.content.cloneNode(true);
                    clone.querySelector(".icon").textContent = cat.icon;
                    clone.querySelector(".index-user").textContent = cat.name;
                    categoriesContainer.appendChild(clone);
                }
            });
        });
}

function initCategoriesSidebar(container) {
    const categoriesContainer = container.querySelector("#categories-sidebar");

    fetch("components/game-category/game-category.html")
        .then(res => res.text())
        .then(html => {
            container.querySelector("#categories-sidebar").innerHTML = html;
            const template = container.querySelector("#game-category-template");
            const categoriesList = contenedor.querySelector("#categories-sidebar");
            const categoryTemplate = contenedor.querySelector("#category-item");
    
            if (categoriesList && categoryTemplate) {
                categorias.forEach(cat => {
                    // const cloneCat = categoryTemplate.content.cloneNode(true);
                    let clone = template.content.cloneNode(true);
                    clone.querySelector(".icon").textContent = cat.icon;
                    clone.querySelector(".index-user").textContent = cat.name;

                    categoriesContainer.appendChild(clone);

                    // ----------------------

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
        });
}
    





 
