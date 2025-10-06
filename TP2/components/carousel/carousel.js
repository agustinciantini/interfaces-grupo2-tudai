// precarga de templates
async function loadTemplates() {
  const [carouselHTML, imagesHTML] = await Promise.all([
    fetch("components/carousel/carousel.html").then((r) => r.text()),
    fetch("components/images/images.html").then((r) => r.text()),
  ])

  // insertamos los <template> invisibles en el body
  document.body.insertAdjacentHTML("beforeend", carouselHTML)
  document.body.insertAdjacentHTML("beforeend", imagesHTML)
}

window.new_Carousel = ({ games, category, quantity = 14, extraClasses = "" }) => {
  const templateCarousel = document.getElementById("carousel-template")
  if (!templateCarousel) {
    console.error("❌ Templates de carrusel no cargados aún.")
    return
  }

  const carouselClone = templateCarousel.content.cloneNode(true)
  const carouselContainer = carouselClone.querySelector(".carousel-container")
  const carousel = carouselClone.querySelector(".carousel")

  carouselContainer.id = `carousel-${category}`
  if (extraClasses) carouselContainer.classList.add(...extraClasses.split(" "))

  const itemTemplate = document.getElementById(`carousel-item-template`)
  if (!itemTemplate) {
    console.error("❌ Templates de item no cargados aún.")
    return
  }

  const filtered = games.filter((g) => g.category.includes(category)).slice(0, quantity)

  filtered.forEach((game) => {
    const itemClone = itemTemplate.content.cloneNode(true)
    const link = itemClone.querySelector("a")
    const img = itemClone.querySelector("img")
    const title = itemClone.querySelector("h3")
    link.href = game.link
    link.addEventListener('click', (event) => {
      event.preventDefault();
      loadPage("gameplay.html");
    })
    img.src = game.image
    img.alt = game.title
    title.textContent = game.title
    carousel.appendChild(itemClone)
  })

  const leftBtn = carouselClone.querySelector(".carousel-btn.left")
  const rightBtn = carouselClone.querySelector(".carousel-btn.right")

  function getVisibleItemsCount() {
    const containerWidth = carousel.offsetWidth
    const firstItem = carousel.querySelector(".game-card")

    if (!firstItem) return 1

    // Obtener el ancho del item incluyendo márgenes
    const itemStyle = window.getComputedStyle(firstItem)
    const itemWidth =
      firstItem.offsetWidth + Number.parseFloat(itemStyle.marginLeft) + Number.parseFloat(itemStyle.marginRight)

    // Calcular cuántos items caben completamente
    const visibleCount = Math.floor(containerWidth / itemWidth)
    return visibleCount > 0 ? visibleCount : 1
  }

  function getScrollAmount() {
    const firstItem = carousel.querySelector(".game-card")
    if (!firstItem) return 220 // fallback (retroceso)

    const itemStyle = window.getComputedStyle(firstItem)
    const itemWidth =
      firstItem.offsetWidth + Number.parseFloat(itemStyle.marginLeft) + Number.parseFloat(itemStyle.marginRight)

    const visibleCount = getVisibleItemsCount()
    return itemWidth * visibleCount
  }
  
// Función para mostrar/ocultar botones según scroll
  function updateButtons() {
    
    // scrollWidth: propiedad que devuelve el ancho completo del contenido del elemento, incluyendo el contenido que no es visible debido a un desbordamiento
    // offsetWidth: propiedad en JavaScript proporciona el ancho del diseño de un elemento HTML 
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth 
    const currentScroll = carousel.scrollLeft

    if (currentScroll <= 0) {
      leftBtn.classList.add("hidden")
    } else {
      leftBtn.classList.remove("hidden")
    }

    if (currentScroll > 0 && currentScroll >= maxScroll) {
      rightBtn.classList.add("hidden")
    } else {
      rightBtn.classList.remove("hidden")
    }
  }

  rightBtn.addEventListener("click", () => {
    const scrollAmount = getScrollAmount()
    const maxScroll = carousel.scrollWidth - carousel.offsetWidth
    const newPosition = carousel.scrollLeft + scrollAmount

    // Si el nuevo desplazamiento excede el máximo, ir al final
    if (newPosition >= maxScroll) {
      carousel.scrollTo({ left: maxScroll, behavior: "smooth" })
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
    setTimeout(updateButtons, 300)
  })

  leftBtn.addEventListener("click", () => {
    const scrollAmount = getScrollAmount()
    const newPosition = carousel.scrollLeft - scrollAmount

    // Si el nuevo desplazamiento es menor que 0, ir al inicio
    if (newPosition <= 0) {
      carousel.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
    setTimeout(updateButtons, 300)
  })

  // Iniciar botones
  updateButtons()
  return carouselContainer
}
