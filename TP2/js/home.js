async function loadTemplates() {
    const [carouselHTML] = await Promise.all([
      fetch("components/carousel/carousel.html").then(r => r.text()),
      
    ]);
    document.body.insertAdjacentHTML("beforeend", carouselHTML);
    
}

// Cargar listado de juegos desde games.json
async function loadGamesData() {
  const data = await fetch("games.json").then(r => r.json());
  return data;
}
  
  
// Transforma archivos en objetos {title,image,link}
function buildGameList(category, files, quantity) {
  if (!Array.isArray(files)) {
    console.warn(`⚠️ No se encontraron archivos para la categoría "${category}"`);
    return [];
  }

  return files.slice(0, quantity).map(filename => {
    const title = filename.substring(0, filename.lastIndexOf(".")) || filename;
    return {
      title,
      image: `images/games/${category}/${filename}`,
      // link: `gameplay.html?game=${title}`,
      link: '#',
      category: [category]
    };
  });
}


function initHome(container){

  // Flujo principal de Home.html
  Promise.all([loadTemplates(), loadGamesData()])
    .then(([_, gamesData]) => {
      // 🎯 featured
      const featuredGames = buildGameList("cars", gamesData["cars"], 32); // ejemplo: tomo 1 de action
      const featuredCarousel = new_FeaturedCarousel({
        games: featuredGames,
        category: "cars",
        type: "featured",
        quantity: 32
      });
      container.querySelector("#carouseles-container-1").prepend(featuredCarousel);
  
      // 🎯 populares
      const popularesGames = buildGameList("adventure", gamesData["adventure"], 50);
      const popularesCarousel = new_Carousel({
        games: popularesGames,
        category: "adventure",
        quantity: 50
      });
      container.querySelector("#popular-carousele").appendChild(popularesCarousel);
  
      // 🎯 nuevos
      const newGames = buildGameList("motorcycles", gamesData["motorcycles"], 15);
      const newCarousel = new_Carousel({
        games: newGames,
        category: "motorcycles",
        quantity: 15
      });
      container.querySelector("#new-carousele").appendChild(newCarousel);
  
      // 🎯 Aventuras
      const adventureGames = buildGameList("adventure", gamesData["adventure"], 32);
      const adventureCarousel = new_Carousel({
        games: adventureGames,
        category: "adventure",
        quantity: 32
      });
      container.querySelector("#adventure-carousele").appendChild(adventureCarousel);
  
      // 🎯 Accion
      const actionGames = buildGameList("action", gamesData["action"], 32);
      const actionCarousel = new_Carousel({
        games: actionGames,
        category: "action",
        quantity: 32
      });
      container.querySelector("#action-carousele").appendChild(actionCarousel);





      // ------------- Imagenes de "Lo mas preferido por la comunidad" ------------------
      let allGames = [];
      for (const category in gamesData) {
        const gamesFromCategory = buildGameList(category, gamesData[category], gamesData[category].length);
        allGames = allGames.concat(gamesFromCategory);
      }

      allGames.sort(() => Math.random() - 0.5);
      const selectedGames = allGames.slice(0, 7);

      renderMostLiked(container, selectedGames);


      // Inserta las imágenes en el contenedor
      function renderMostLiked(container, games) {
        const grid = container.querySelector(".img-recommended-community");
        if (!grid) return;
        
        grid.innerHTML = "";
        
        games.forEach(game => {
          const img = document.createElement("img");
          img.src = game.image;
          img.alt = game.title;
          grid.appendChild(img);
        });
      }
    });

}

