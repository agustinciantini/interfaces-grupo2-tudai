document.addEventListener('DOMContentLoaded', () => {

    const contenedor = document.getElementById("header-container");

    if (!contenedor) {
        console.error("Error: El contenedor con id 'header-container' no se encontró en el DOM.");
        return;
    }

    fetch("/TP2/components/header/header-template.html")
        .then(res => {
            if (!res.ok) throw new Error(`Error al cargar la plantilla: ${res.statusText} (${res.status})`);
            return res.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const template = doc.getElementById("header-template");

            if (!template) {
                console.error("Error: No se encontró el <template> con id 'header-template'.");
                return;
            }

            const clone = template.content.cloneNode(true);
            contenedor.appendChild(clone);

            // --- Funcionalidad del profile del usuario
            const userAvatar = contenedor.querySelector('.header-user-avatar');
            const profileCard = contenedor.querySelector('.profile-card');

            if (userAvatar && profileCard) {
                userAvatar.addEventListener('click', (event) => {
                    event.stopPropagation();
                    profileCard.classList.toggle('active');
                });

                document.addEventListener('click', (event) => {
                    if (!profileCard.contains(event.target) && !userAvatar.contains(event.target)) {
                        profileCard.classList.remove('active');
                    }
                });
            }
        })
        .catch(err => console.error("Error cargando el template:", err));
});
