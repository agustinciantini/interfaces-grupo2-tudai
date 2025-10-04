// Elementos del DOM
const loader = document.getElementById('loader');
const logoContainer = document.getElementById('logoContainer');
const logoName = document.getElementById('logo-name-loading');
const loadingText = document.getElementById('loadingText');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');

const particle1 = document.querySelector('.particle-1');
const particle2 = document.querySelector('.particle-2');
const particle3 = document.querySelector('.particle-3');
const particle4 = document.querySelector('.particle-4');
const particle5 = document.querySelector('.particle-5');
const particle6 = document.querySelector('.particle-6');
const particle7 = document.querySelector('.particle-7');
const particle8 = document.querySelector('.particle-8');
const particle9 = document.querySelector('.particle-9');
const particle10 = document.querySelector('.particle-10');


// Variables de control
let progress = 0;
const totalDuration = 5000; // 5 segundos
const updateInterval = 50; // Actualizar cada 50ms
const increment = (100 / totalDuration) * updateInterval;

// Intervalo de progreso
const progressInterval = setInterval(() => {
    progress += increment;

    if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);

        // Actualizar UI final
        loadingText.textContent = '100%';
        progressBar.style.width = '100%';

        // Secuencia de animación al completar
        setTimeout(() => {
            // Ocultar porcentaje y barra
            loadingText.classList.add('hidden');
            progressContainer.classList.add('hidden');

            // Mostrar nombre de la pagina
            logoName.classList.add('show');
            
            setTimeout(() => {
                // Iniciar animación de desplazamiento del logo
                logoContainer.classList.add('swiping');

                // Iniciar animacion de cortina de imagenes a izquierda
                particle1.classList.add('curtain-left');
                particle3.classList.add('curtain-left');
                particle6.classList.add('curtain-left');
                particle9.classList.add('curtain-left');
                particle10.classList.add('curtain-left');

                // Iniciar animacion de cortina de imagenes a derecha
                particle2.classList.add('curtain-right');
                particle4.classList.add('curtain-right');
                particle5.classList.add('curtain-right');
                particle7.classList.add('curtain-right');
                particle8.classList.add('curtain-right');

                // Redirigir al home 
                setTimeout(() => {
                    window.location.href = '../index.html';
                }, 3000);
            }, 500);
        }, 300);
    } else {
        // Actualizar porcentaje y barra
        loadingText.textContent = Math.floor(progress) + '%';
        progressBar.style.width = progress + '%';
    }
}, updateInterval);