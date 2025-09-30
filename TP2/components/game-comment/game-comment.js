"use strict";

// // Comentarios antiguos:
// const comments = [
//     { nameUser: "Mario1233", publicationDay: "23 de septiembre a las 17:40 p.m", likes: 881, description: "Muy divertido, aunque no me guste Minecraft." },
//     { nameUser: "PaulitaPiola5", publicationDay: "2 de Julio a las 23:02 p.m", likes: 5000, description: "Que gran juego!! Se lo recomende a mi madre que es fanatica del Peg Solitaire y me dijo que no entendio nada pero que se veia muy lindo igualmente." },
//     { nameUser: "ElChulo232", publicationDay: "10 de Junio a las 11:32 a.m", likes: 267, description: "Muy pasado de moda." }
// ];


// // Referencias al DOM:
// const container = document.getElementById("comments-others");


// // Traigo el template desde game-comment.html:
// fetch("components/game-comment/game-comment.html")
//     .then(res => res.text())
//     .then(html => {
//         document.querySelector("#comments-others").innerHTML = html;

//         const template = document.getElementById("comment-template");

//         comments.forEach(comment => {
//             let clone = template.content.cloneNode(true);
//             clone.querySelector(".name-user").textContent = comment.nameUser;
//             clone.querySelector(".publication-day").textContent = comment.publicationDay;
//             clone.querySelector(".number-of-likes").textContent = comment.likes;
//             clone.querySelector(".comment-description").textContent = comment.description;
//             container.appendChild(clone); 
//         });
//     });





// Comentarios antiguos:
const comments = [
    { nameUser: "Mario1233", publicationDay: "23 de Septiembre", likes: 881, description: "Muy divertido, aunque no me guste Minecraft." },
    { nameUser: "PaulitaPiola5", publicationDay: "2 de Julio", likes: 5000, description: "Que gran juego!! Se lo recomende a mi madre que es fanatica del Peg Solitaire y me dijo que no entendio nada pero que se veia muy lindo igualmente." },
    { nameUser: "ElChulo232", publicationDay: "10 de Junio", likes: 267, description: "Muy pasado de moda." }
];


// Referencias al DOM:
const container = document.getElementById("comments-others");
const input = document.querySelector(".input-opinion");
const postBtn = document.querySelector(".post-button");


// Cargo el template desde game-comment.html
fetch("components/game-comment/game-comment.html")
    .then(res => res.text())
    .then(html => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        document.body.appendChild(temp.firstElementChild); // añade el <template> al body

        const template = document.getElementById("comment-template");

        // Render inicial de comentarios
        comments.forEach(c => renderComment(c, template));

        // Evento para Postear
        postBtn.addEventListener("click", () => {
            const text = input.value.trim();
            if (text !== "") {
                const newComment = {
                    nameUser: "UsuarioRandom", 
                    publicationDay: getCurrentDate(),
                    likes: 0,
                    description: text
                };
                renderComment(newComment, template);
                input.value = ""; // vacio el input luego de postear
            }
        });
    });

// Funcion que devuelve el dia actual
function getCurrentDate() {
  const date = new Date();

  const day = date.getDate();
  const month = date.toLocaleDateString("es-AR", { month: "long" });
  
  const uppercaseMonth = month.charAt(0).toUpperCase() + month.slice(1);    // que el mes comience en mayuscula
  
  return `${day} de ${uppercaseMonth}`;
}

// Función para clonar el template y rellenarlo
function renderComment(comment, template) {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".name-user").textContent = comment.nameUser;
    clone.querySelector(".publication-day").textContent = comment.publicationDay;
    clone.querySelector(".number-of-likes").textContent = comment.likes;
    clone.querySelector(".comment-description").textContent = comment.description;

    container.appendChild(clone);
}


// const likesBtns = document.querySelectorAll(".likeBtn");
// likesBtns.forEach((btnLike) => {
//     btnLike.addEventListener('click', (e) => {
//         const btn = e.target.closest('.likeBtn');
//         if (!btn) return; // clic fuera de un botón
//         // buscamos el número dentro del mismo <article>
//         const article = btn.closest('.comment');
//         console.log("AVERRR", article);
//         const numberSpan = article.querySelector('.number-of-likes');

//         // si está vacío, lo tratamos como 0
//         const current = parseInt(numberSpan.textContent || '0', 10);
//         numberSpan.textContent = current + 1;

//         btn.classList.toggle("active");     //le doy la clase active al boton
//     })
// });


// let btnsEditar = document.querySelectorAll(".btnEditar");
// btnsEditar.forEach((btnE) => {
//     btnE.addEventListener('click',(e)=>{recuperarInfoFila(e,paquete_a_editar)} );
// });


// function renderComment(comment, template) {
//     const clone = template.content.cloneNode(true);
//     const nameEl = clone.querySelector(".name-user");
//     const dateEl = clone.querySelector(".publication-day");
//     const likesEl = clone.querySelector(".number-of-likes");
//     const descEl = clone.querySelector(".comment-description");
//     const likeBtn = clone.querySelector(".likeBtn");

//     // Rellenar datos
//     nameEl.textContent = comment.nameUser;
//     dateEl.textContent = comment.publicationDay;
//     likesEl.textContent = comment.likes;
//     descEl.textContent = comment.description;

//     // Funcionalidad de Like
//     likeBtn.addEventListener("click", () => {
//         let currentLikes = parseInt(likesEl.textContent, 10);
//         likesEl.textContent = currentLikes + 1;
//     });

//     container.appendChild(clone);
// }