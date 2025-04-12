function carregarGlorzo() {
    const id = document.querySelector('#id').value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            const tabela = document.querySelector('#dados');
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