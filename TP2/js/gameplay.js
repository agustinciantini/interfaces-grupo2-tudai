
function initGameplay(container) {
    // Jugar 
    const playGameBtn = container.querySelector(".button-game-running");
    playGameBtn.addEventListener("click", function() {
            container.getElementById("game-preview").style.display = "none";
            container.getElementById("game-playing").style.display = "block";
        });
    
    // Salir del juego
    const exitGameBtn = container.getElementById("exit-game");
    exitGameBtn.addEventListener("click", () => {
            container.getElementById("game-preview").style.display = "block";
            container.getElementById("game-playing").style.display = "none";
        });
    
    //--------------------------------- Interacciones relacionadas al juego ------------------------------ 
    
    // Like or Dislike
    const likeBtn = container.querySelector(".likeBtn");
    const dislikeBtn = container.getElementById("dislikeBtn");
    
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
    const favBtn = container.getElementById("favBtn");
    
    favBtn.addEventListener("click", () => {
            favBtn.classList.toggle("active");
        });
    
    
    // Controles
    const controlsBtn = container.getElementById("controlsBtn");
    const controlsSection = container.querySelector(".controls");
    
    controlsBtn.addEventListener("click", () => {
      controlsSection.scrollIntoView({ behavior: "smooth" });
    });
    
    
    // Compartir
    const shareBtn = container.getElementById("shareBtn");
    
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
    const fullscreenBtn = container.getElementById("fullscreenBtn");
    const gameSection = container.querySelector(".game-running");
    
    fullscreenBtn.addEventListener("click", () => {
        if (!container.fullscreenElement) {
            gameSection.requestFullscreen();
        } else {
            container.exitFullscreen();
        }
    });

    initCategories(container);
    initComments(container);
    initTweets(container);
}






