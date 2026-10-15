const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");
const puntuacion = document.getElementById("puntuacion");
const mensaje = document.getElementById("mensaje");

quiz.addEventListener("submit", function(event) {
    event.preventDefault();

    const respuestas = {
        p1: "b",
        p2: "d",
        p3: "c",
        p4: "d",
        p5: "a"
    };

    let correctas = 0;

    for (let pregunta in respuestas) {
        const seleccionada = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );

        if (seleccionada && seleccionada.value === respuestas[pregunta]) {
            correctas++;
        }
    }

    resultado.hidden = false;
    puntuacion.textContent = "Has acertado " + correctas + " de 5";

    if (correctas === 5) {
        mensaje.textContent = "MuSo";
    } else {
        mensaje.textContent = "¿Eso es todo lo que sabes? Inténtalo otra vez.";
    }

    resultado.scrollIntoView({ behavior: "smooth" });
});
