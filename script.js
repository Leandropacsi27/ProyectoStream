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



let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar() {
    // oculta el menu una vez que selecciono una opcion
    document.getElementById.classList = "";
    menuVisible = false;
}


//Funcion para capturar el plan que se hizo click en el index y se pasa al url
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get('plan');

//Si el parámetro "plan" exixte se selecciona ese.
if (plan) {
    const planSelect = document.getElementById('plan');
    planSelect.value = plan;
}

//Funcion al enviar el formulario de regristo correctamente
document.querySelector('.form-container-registro form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("¡Gracias por unirte a nosotros!. En breve se enviará un mensaje a tu correo");
    this.reset(); // Limpiar el formulario después de enviarlo
});S

//Funcion para desplazarse a anclas de forma suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


