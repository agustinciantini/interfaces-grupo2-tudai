const loadingText = document.querySelector('.loading-text');
const progress = document.querySelector('.progress');
const loader = document.querySelector('.loader');

let progressWidth = 0;

const progressInterval = setInterval(() => {    // actualiza el ancho de la barra de progreso cada 100 miliseg
    progress.style.width = (progressWidth += 2) + '%';
    loadingText.textContent = progressWidth + '%';

    if(progressWidth >= 100){   // cuando la carga se completa se frena la ejecucion de la barra
        clearInterval(progressInterval);
        loadingText.textContent = '¡Bienvenido!';
        loader.style.display = 'none';

        setTimeout(() => {  // espera 2 segundos y redirige a index.html
            window.location.href = '../index.html';
        }, 2000);
    }
}, 100);
