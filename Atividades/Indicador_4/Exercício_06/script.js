function mostrar() {
    const div = document.querySelector('.resultado');
    const produto = document.querySelector('#produto').value;
    return div.innerHTML = `
    <h2>${produto} - Promoção: Leve 3 por R$: ${calcularPromocao()}</h2>
    <h2>O 3º produto custa apenas R$:${calcularDescontoProduto3()}</h2>
    `;
}

function calcularDescontoProduto3() {
    const preco = document.querySelector('#preco').value;
    const produto3 = preco / 2;
    return produto3;
}

function calcularPromocao() {
    const preco = parseFloat(document.querySelector('#preco').value);
    const promocao = (preco * 2) + calcularDescontoProduto3();

    return promocao.toFixed(2);
}