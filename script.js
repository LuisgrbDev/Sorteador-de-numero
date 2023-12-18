function sortear() {
    // pega o valor de numero maximo e numero minimo para o sorteio
    let numeroMinimo = parseInt(document.getElementById("numero_minimo").value);
    let numeroMaximo = parseInt(document.getElementById("numero_maximo").value);

    // verifica os valores se são validos
    if (isNaN(numeroMinimo) || isNaN(numeroMaximo) || numeroMinimo >= numeroMaximo)
        alert("Por favor, digite valores válidos. O valor Minimo deve ser menor que o valor Maximo");

    let numeroSorteado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);

    document.getElementById("resultado").innerHTML = `${numeroSorteado}`
}
