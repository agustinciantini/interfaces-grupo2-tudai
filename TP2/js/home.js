
function initHome(container){

  console.log("CONTAINER homeeee", container);
  async function loadTemplates() {
    const [carouselHTML] = await Promise.all([
      fetch("components/carousel/carousel.html").then(r => r.text()),
      
    ]);
    document.body.insertAdjacentHTML("beforeend", carouselHTML);
    
  }
  
  // async function loadHome() {
  //   const homeHTML = await fetch("home.html").then(r => r.text());
  //   container.querySelector("#container").innerHTML = homeHTML;
  // }
  
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
  
  // Flujo principal de Home.html
  // Promise.all([loadTemplates(), loadHome(), loadGamesData()])
  Promise.all([loadTemplates(), loadGamesData()])
    .then(([_, gamesData]) => {
      // 🎯 featured
      const featuredGames = buildGameList("cars", gamesData["cars"], 32); // ejemplo: tomo 1 de action
      // console.log("AVERRR", featuredGames);
      const featuredCarousel = new_Carousel({
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
  
      // 🎯 Disparos
      // const shooterGames = buildGameList("shooter", gamesData["shooter"], 32);
      // const shooterCarousel = new_Carousel({
      //   games: shooterGames,
      //   category: "shooter",
      //   quantity: 32
      // });
      // container.querySelector("#shooter-carousele").appendChild(shooterCarousel);
    });

}

