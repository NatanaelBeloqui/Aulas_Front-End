function mostrar() {
    const veiculo = document.querySelector('#veiculo').value;
    
    const div = document.querySelector('.resultado');

    return div.innerHTML = `
    <p>Promoção: ${veiculo}</p>
    <p>Entrada de R$:${calcularEntrada()}</p>
    <p>+ 12x de R$:${calcularSaldo()}</p>`

}

function calcularEntrada() {
    const preco = document.querySelector('#preco').value;
    const entrada = preco/2;

    return entrada.toFixed(2);
}

function calcularSaldo() {
    const preco = document.querySelector('#preco').value;    
    const saldo = (preco/2)/12;

    return saldo.toFixed(2);
}