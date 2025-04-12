function carregarGlorzo() {
    const id = document.querySelector('#id').value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            const tabela = document.querySelector('#dados');
            tabela.innerHTML = '';
            const linha = `<tr>
                                <td>${data.id === '' ? '-' : data.id}</td>
                                <td>${data.name === '' ? '-' : data.name}</td>
                                <td>${data.status === '' ? '-' : data.status}</td>
                                <td>${data.species === '' ? '-' : data.species}</td>
                                <td>${data.type === '' ? '-' : data.type}</td>
                                <td>${data.gender === '' ? '-' : data.gender}</td>
                          </tr>`;
            tabela.innerHTML = linha;
        })
        .catch(error => console.error('Erro ao buscar dados: ', error));
}