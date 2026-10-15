const platos = document.querySelectorAll(".dish");

platos.forEach(function(plato) {
    plato.addEventListener("click", function(event) {
        event.preventDefault();
        if (plato.classList.contains("selected")) {
            return;
        }
        plato.classList.add("selected");
        const destino = plato.getAttribute("href");
        setTimeout(function() {
            window.location.href = destino;
        }, 350);
    });
});