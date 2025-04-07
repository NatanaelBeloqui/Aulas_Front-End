// Solicita dois números ao usuário
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

// Verifica se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira números válidos.");
} else {
    // Calcula as operações
    let soma = num1 + num2;
    let produto = num1 * num2;
    let divisao = num2 !== 0 ? (num1 / num2).toFixed(2) : "Indefinido";
    let resto = num2 !== 0 ? num1 % num2 : "Indefinido";
    
    // Cria a tabela dinamicamente
    let tabela = `
        <table>
            <tr>
                <th>Operação</th>
                <th>Resultado</th>
            </tr>
            <tr>
                <td>Soma</td>
                <td>${soma}</td>
            </tr>
            <tr>
                <td>Produto</td>
                <td>${produto}</td>
            </tr>
            <tr>
                <td>Divisão</td>
                <td>${divisao}</td>
            </tr>
            <tr>
                <td>Resto da divisão</td>
                <td>${resto}</td>
            </tr>
        </table>
    `;
    
    // Insere a tabela no corpo da página
    document.body.innerHTML = tabela;
}