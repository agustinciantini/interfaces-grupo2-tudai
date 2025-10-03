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
    { icon: "♛", name: "strategy", game:["PegSolitaire"] },
    { icon: "⚽", name: "soccer", game:[] }
];


// Referencias al DOM:
const categoriesContainer = document.getElementById("categories");


// Traigo el template desde game-category.html:
fetch("components/game-category/game-category.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("categories").innerHTML = html;

        const template = document.getElementById("game-category-template");

        categorias.forEach(cat => {
            if(cat.game.includes("PegSolitaire")){
                let clone = template.content.cloneNode(true);
                clone.querySelector(".icon").textContent = cat.icon;
                clone.querySelector(".index-user").textContent = cat.name;
                categoriesContainer.appendChild(clone);
            }
        });
    });





 
