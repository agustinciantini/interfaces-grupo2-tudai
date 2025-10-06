
function initGameplay(container) {
    // Jugar 
    const playGameBtn = container.querySelector(".button-game-running");
    playGameBtn.addEventListener("click", function() {
            container.querySelector("#game-preview").style.display = "none";
            container.querySelector("#game-playing").style.display = "block";
        });
    
    // Salir del juego
    const exitGameBtn = container.querySelector("#exit-game");
    exitGameBtn.addEventListener("click", () => {
            container.querySelector("#game-preview").style.display = "block";
            container.querySelector("#game-playing").style.display = "none";
        });
    
    //--------------------------------- Interacciones relacionadas al juego ------------------------------ 
    
    // Like or Dislike
    const likeBtn = container.querySelector(".likeBtn");
    const dislikeBtn = container.querySelector("#dislikeBtn");
    
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
    const favBtn = container.querySelector("#favBtn");
    
    favBtn.addEventListener("click", () => {
            favBtn.classList.toggle("active");
        });
    
    
    // Controles
    const controlsBtn = container.querySelector("#controlsBtn");
    const controlsSection = container.querySelector(".controls");
    
    controlsBtn.addEventListener("click", () => {
      controlsSection.scrollIntoView({ behavior: "smooth" });
    });
    
    
    // Compartir
    const shareBtn = container.querySelector("#shareBtn");
    
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
    
    
    // Pantalla Completa
    const fullscreenBtn = container.querySelector("#fullscreenBtn");
    const gameSection = container.querySelector(".game-running");
    
    fullscreenBtn.addEventListener("click", () => {
        if (!container.fullscreenElement) {
            gameSection.requestFullscreen();
        } else {
            container.exitFullscreen();
        }
    });

    initCategoriesGameplay(container);
    initComments(container);
    initTweets(container);
}






