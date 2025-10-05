"use strict";

// function initHeader(container){
    const header = document.querySelector(".header-index");

    fetch("components/header/header.html")
        .then(res => res.text())
        .then(html => {
            header.innerHTML = html;

            // Obtiene el elemento del avatar del usuario en el header.
            // El header-user-avatar se encuentra dentro de la clase header-user.
            const userAvatar = document.querySelector('.header-user-avatar');
            
            // Obtiene el elemento de la tarjeta de perfil que queremos mostrar/ocultar.
            const profileCard = document.querySelector('.profile-card');
            
            if (userAvatar && profileCard) {
                // Agrega un escuchador de eventos de clic al avatar del usuario.
                userAvatar.addEventListener('click', (event) => {
                    // Evita que el clic se propague al documento. Esto es importante
                    // para que el evento de cierre global no se active al mismo tiempo.
                    event.stopPropagation();
                    
                    // Alterna la clase 'active' en la tarjeta de perfil.
                    // 'toggle' agrega la clase si no está presente y la quita si ya está.
                    profileCard.classList.toggle('active');
                });
            }
            
            // Agrega un escuchador de eventos de clic al documento para cerrar la tarjeta.
            document.addEventListener('click', (event) => {
                // Si el clic no se hizo dentro de la tarjeta de perfil
                // y tampoco en el avatar que la activa, entonces la oculta.
                if (!profileCard.contains(event.target) && !userAvatar.contains(event.target)) {
                    profileCard.classList.remove('active');
                }
            });
            
        });

// }