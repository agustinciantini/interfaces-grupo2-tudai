// Jugar 
const playGameBtn = document.querySelector(".button-game-running");
playGameBtn.addEventListener("click", function() {
        document.getElementById("game-preview").style.display = "none";
        document.getElementById("game-playing").style.display = "block";
    });

// Salir del juego
const exitGameBtn = document.getElementById("exit-game");
exitGameBtn.addEventListener("click", () => {
        document.getElementById("game-preview").style.display = "block";
        document.getElementById("game-playing").style.display = "none";
    });

//--------------------------------- Interacciones relacionadas al juego ------------------------------ 

// Like or Dislike
const likeBtn = document.querySelector(".likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");     //le doy la clase active al boton
        if (dislikeBtn.classList.contains("active")) {
            dislikeBtn.classList.remove("active"); // desactiva dislike 
        }
    });

dislikeBtn.addEventListener("click", () => {
        dislikeBtn.classList.toggle("active");   //le doy la clase active al boton
        if (likeBtn.classList.contains("active")) {
            likeBtn.classList.remove("active");    // desactiva like 
        }
    });

// Favoritos
const favBtn = document.getElementById("favBtn");

favBtn.addEventListener("click", () => {
        favBtn.classList.toggle("active");
    });

// Controles
const controlsBtn = document.getElementById("controlsBtn");
const controlsSection = document.querySelector(".controls");

controlsBtn.addEventListener("click", () => {
  controlsSection.scrollIntoView({ behavior: "smooth" });
});

// Compartir
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
        if (navigator.share) {
            try {
            await navigator.share({
                title: "Mira este contenido",
                url: window.location.href
            });
            } catch (err) {
            console.error("Error al compartir:", err);
            }
        } else {
            alert("La función de compartir no está disponible en este navegador.");
        }
    });

// Pantalla completa
// const fullscreenBtn = document.getElementById("fullscreenBtn");
// const gameContainer = document.getElementById("game-preview");

// fullscreenBtn.addEventListener("click", () => {
//         if (!document.fullscreenElement) {
//             gameContainer.requestFullscreen();
//         } else {
//             document.exitFullscreen();
//         }
//     });



// Pantalla completa dinámica
// const fullscreenBtn = document.getElementById("fullscreenBtn");

// fullscreenBtn.addEventListener("click", () => {
//     const preview = document.getElementById("game-preview");
//     const playing = document.getElementById("game-playing");

//     if (!document.fullscreenElement) {
//         if(window.getComputedStyle(preview).display !== "none"){
//             preview.requestFullscreen();
//         }else{
//             if(window.getComputedStyle(playing).display !== "none"){
//                 playing.requestFullscreen();
//             }
//         }
//     } else {
//         document.exitFullscreen();
//     }
// });



const fullscreenBtn = document.getElementById("fullscreenBtn");
const gameSection = document.querySelector(".game-running");

fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        gameSection.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});





