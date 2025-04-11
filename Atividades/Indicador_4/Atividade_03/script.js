function mostrar() {
    const div = document.querySelector('.resultado');
    
    return div.innerHTML = `<h2>Valor a pagar R$: ${calcularValor()}</h2>`;
}

function calcularValor() {
    const buffet = document.querySelector('#buffet').value;
    const consumo = document.querySelector('#consumo').value;
    const valor = (consumo*buffet)/1000;

    return valor.toFixed(2);
}