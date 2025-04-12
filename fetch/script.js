function carregarFacts() {
    fetch('https://catfact.ninja/fact') // Faz a requisisão à API
        .then(response => response.json()) // Converter a resposta em JSON
        .then(data => {
            const tabela = document.getElementById('fact');
            tabela.innerHTML = ''; // Limpa a tabela antes de preencher
            const linha = `<tr>
                                <td>1</td>
                                <td>${data.fact}</td>
                                <td>${data.length}</td>
                          </tr>`;
            tabela.innerHTML = linha;
        })
        .catch(error => console.error('Erro ao buscar facts: ', error));
}