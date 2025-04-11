function mostrar() {
    const div = document.querySelector('.resultado');
    const medicamento = document.querySelector('#medicamento').value;
    return div.innerHTML = `
    <h2>Promoção de ${medicamento}</h2>
    <h2>Leve 2 por apenas R$: ${calcularPromocao()}</h2>
    `;
}

function calcularPromocao() {
    const preco = parseFloat(document.querySelector('#preco').value);
    const promocao = preco * 2;

    return Math.floor(promocao).toFixed(2);
}