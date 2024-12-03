document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.getElementById('imagenes');
    const totalImagenes = document.querySelectorAll('#imagenes > img').length;
    let indiceActual = 0;

    document.getElementById('btnIzquierda').addEventListener('click', moverIzquierda);
    document.getElementById('btnDerecha').addEventListener('click', moverDerecha);

    function moverDerecha() {
        if (indiceActual < totalImagenes - 1) {
            indiceActual++;
            actualizarCarrusel();
        }
    }

    function moverIzquierda() {
        if (indiceActual > 0) {
            indiceActual--;
            actualizarCarrusel();
        }
    }

    function actualizarCarrusel() {
        const desplazamiento = -indiceActual * 100;
        imagenes.style.transform = `translateX(${desplazamiento}%)`;
    }
});


let menuVisible = false;
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");  // Alterna la clase 'responsive' para mostrar/ocultar el menú
    menuVisible = !menuVisible;
}



function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");  // Elimina la clase 'responsive' cuando se selecciona una opción
    menuVisible = false;
}

const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get('plan');
if (plan) {
    const planSelect = document.getElementById('plan');
    planSelect.value = plan;  // Si existe el parámetro "plan", lo selecciona en el formulario
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'  // Desplazamiento suave al hacer clic en anclas
        });
    });
});


