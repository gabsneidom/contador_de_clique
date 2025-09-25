function incrementarContador() {
    const numeroDeClique = document.querySelector("span");
    const numeroString = numeroDeClique.innerHTML;
    const numeroNumero = Number.parseInt(numeroString);

    if (numeroNumero === 12) {
        alert("evermore, track 12, 2:17")
    }

    if (numeroNumero === 13) {
        numeroDeClique.innerHTML = 0;
        return;
    }

    const numeroAtualizado = numeroNumero + 1;

    numeroDeClique.innerHTML = numeroAtualizado;
}