function mostrar() {
    const div = document.querySelector('.resultado');
    return div.innerHTML = `<h2>Valor a Pagar R$: ${calcularValorAPagar()}</h2>`;
}

function calcularValorAPagar() {
    const preco = parseFloat(document.querySelector('#preco').value);
    const tempo = Number(document.querySelector('#tempo').value);

    const blocos = Math.ceil(tempo / 15); // ← Arredonda pra cima
    const valor = preco * blocos;

    return valor.toFixed(2);
}