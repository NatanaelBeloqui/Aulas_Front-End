const anoAtual = new Date().getFullYear();

function calcularIdadeVeiculo() {
    const anoVeiculo = document.getElementById("ano").value;
    
    if (anoVeiculo) {
        return anoAtual - parseInt(anoVeiculo);
    } else {
        alert("Digite o ano do veículo");
        return null;
    }
}

function classificarVeiculo() {
    const idadeVeiculo = calcularIdadeVeiculo();

    if (idadeVeiculo === null) return null;

    return idadeVeiculo === 0 ? "Novo" :
           idadeVeiculo <= 2 ? "Seminovo" :
           "Usado";
}

function calcularPreco() {
    const preco = parseFloat(document.getElementById("preco").value);
    const classificacao = classificarVeiculo();

    if (!classificacao) return null;

    if (!preco) {
        alert("O veículo não tem preço cadastrado");
        return null;
    }

    let precoFinal = classificacao === "Novo" ? preco * 1.08 : preco * 1.10;
    return precoFinal;
}

function mostrarInformacoes() {
    const modelo = document.getElementById("modelo").value;
    const classificacao = classificarVeiculo();
    const precoFinal = calcularPreco();
    const div = document.querySelector(".resultado");

    if (!modelo || !classificacao || !precoFinal) return;

    div.innerHTML = `
        <p>${modelo} - ${classificacao}</p>
        <p>Preço de Venda: R$ ${precoFinal.toFixed(2)}</p>
    `;
}