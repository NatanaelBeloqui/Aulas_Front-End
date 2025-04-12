function carregarGlorzo() {
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById('dados');
            tabela.innerHTML = '';
            const linha = `<tr>
                                <td>${data.id}</td>
                                <td>${data.name}</td>
                                <td>${data.status}</td>
                                <td>${data.species}</td>
                                <td>${data.type}</td>
                                <td>${data.gender}</td>
                          </tr>`;
            tabela.innerHTML = linha;
        })
        .catch(error => console.error('Erro ao buscar dados: ', error));
}