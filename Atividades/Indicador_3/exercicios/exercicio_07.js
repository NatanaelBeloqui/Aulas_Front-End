function dataPorExtenso(data) {
    let meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    // Divide a string usando "/" como separador
    let partes = data.split("/");

    let dia = partes[0];
    let mes = parseInt(partes[1]) - 1; // Array começa no índice 0
    let ano = partes[2];

    return `${dia} de ${meses[mes]} de ${ano}`;
}

// Exemplo de uso:
let dataEntrada = "22/04/1983";
console.log(dataPorExtenso(dataEntrada)); // "22 de abril de 1983"