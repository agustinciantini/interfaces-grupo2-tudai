"use strict";

// const params = new URLSearchParams(window.location.search);
// const currentPage = params.get("page") || "login.html";
// loadPage(currentPage);
loadPage("login.html");

// contenedor principal donde se cargan las páginas
const container = document.getElementById("container");

// función que carga un html dentro del contenedor
// function loadPage(page, addToHistory = true) {
function loadPage(page) {
    console.log("Page: ", page);
    fetch(`${page}`)
        .then(res => res.text())
        .then(html => {
            // document.querySelector("#container_main").innerHTML = texto;
            // document.getElementById("container").innerHTML = html;
            container.innerHTML = html;

            // if (typeof initHeader === "function") initHeader(container);
            // if (typeof initFooter === "function") initFooter(container);
            // if (typeof initSidebar === "function") initSidebar(container);

            // después de cargar, engancho los eventos de esa página
            setupEvents(page);
            console.log("Page despuesss: ", page);

            // Cambiar la URL sin recargar
            // if (addToHistory) {
            //     history.pushState({ page }, "", `?page=${page}`);
            // }
        })
}

// seteo los eventos según la página actual
function setupEvents(page) {
    if (page === "login.html") {
        console.log("111");
        const registerLink = container.querySelector(".go-to-register");
        const loginBtn = container.querySelector(".login-button");
        // const background = document.querySelector(".grid-game");

        if (registerLink) {
            registerLink.addEventListener("click", () => loadPage("register.html"));
        }

        if (loginBtn) {
            loginBtn.addEventListener("click", () => loadPage("loading.html"));
        }

//         if (background) {
//             loginBtn.addEventListener("click", () => loadPage("../components/background/background-template.html"));
//         }
// }
        
        if (typeof initValidation === "function") {
            console.log("Antes de init loginnn");
            initValidation(container); // engancho la lógica del js de login
        }
        
    }

    if(page =="loading.html"){
        console.log("222");
        if (typeof initLoading === "function") {
            initLoading(container); // engancho la lógica del js de loading
        }
    }

    if (page === "register.html") {
        console.log("3333");
        const backToLogin = container.querySelector(".go-to-login");
        if (backToLogin) {
            backToLogin.addEventListener("click", () => loadPage("login.html"));
        }

        if (typeof initValidation === "function") {
            initValidation(container); // engancho la lógica del js de register
        }
    }

    if (page === "home.html") {
        console.log("444");
        const playBtn = container.querySelector(".play-peg-solitaire");
        if (playBtn) {
            playBtn.addEventListener("click", () => loadPage("gameplay.html"));
        }

        if (typeof initHome === "function") {
            console.log("antes de init HOMEe");
            initHome(container); // engancho la lógica del js de home
        }
    }

    if (page === "gameplay.html") {
        console.log("5555");
        const returnHome = container.querySelector(".return-home");
        if (returnHome) {
            returnHome.addEventListener("click", () => loadPage("home.html"));
        }

        if (typeof initGameplay === "function") {
            initGameplay(container); // engancho la lógica del js de gameplay
        }
    }
}
// Manejo de back/forward
// window.addEventListener("popstate", (event) => {    //escucha cuando el usuario toca atrás/adelante, y vuelve a cargar la vista correspondiente desde event.state.page.
//     if (event.state && event.state.page) {
//         loadPage(event.state.page, false); // no volver a hacer pushState
//     } else {
//         loadPage("login.html", false); // estado inicial
//     }
// });
