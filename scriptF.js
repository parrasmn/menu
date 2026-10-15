const pantallaRegalos = document.getElementById("pantallaRegalos");
const pantallaAdivinanza = document.getElementById("pantallaAdivinanza");
const pantallaSorpresa = document.getElementById("pantallaSorpresa");
const pantallaLego = document.getElementById("pantallaLego");

const respuesta = document.getElementById("respuesta");
const pista = document.getElementById("pista");
const mensaje = document.getElementById("mensaje");

let numeroPista = 1;

function mostrarPantalla(pantalla) {
    pantallaRegalos.hidden = true;
    pantallaAdivinanza.hidden = true;
    pantallaSorpresa.hidden = true;
    pantallaLego.hidden = true;

    pantalla.hidden = false;
}

function mostrarAdivinanza() {
    mostrarPantalla(pantallaAdivinanza);
}

function comprobarRespuesta() {
    const respuestaUsuario = respuesta.value.trim().toLowerCase();

    if (respuestaUsuario === "lego" || respuestaUsuario === "legos") {
        mostrarPantalla(pantallaSorpresa);
    } else {
        mensaje.textContent = "No es esa. Inténtalo otra vez o pide otra pista.";
    }
}

function otraPista() {
    if (numeroPista === 1) {
        numeroPista = 2;
        pista.textContent = "Pista 2: Está hecho de pequeñas piezas que tienes que ensamblar.";
    } else if (numeroPista === 2) {
        numeroPista = 3;
        pista.textContent = "Pista 3: Empieza por L y es una marca muy conocida.";
    } else {
        pista.textContent = "Se acabaron las pistas. Intenta adivinar de nuevo.";
    }
}

function mostrarLego() {
    mostrarPantalla(pantallaLego);
}

function volverMenu() {
    window.location.href = "index.html";
}

respuesta.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        comprobarRespuesta();
    }
});