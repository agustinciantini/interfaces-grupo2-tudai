"use strict";

// function initFooter(container){
    const footer = document.querySelector(".footer-index");

    fetch("components/footer/footer.html")
        .then(res => res.text())
        .then(html => {
            footer.innerHTML = html;
        });
// }
