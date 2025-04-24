function carregarGlorzo() {
    const id = document.querySelector('#id').value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Faz a busca pela API
        .then((response) => response.json())
        .then((data) => {
            const tabela = document.querySelector('#dados');
            tabela.innerHTML = '';
            const linha = `
                <tr>
                    <td>${data.id === '' ? '-' : data.id}</td>
                    <td>${data.name === '' ? '-' : data.name}</td>
                    <td>${data.status === '' ? '-' : data.status}</td>
                    <td>${data.species === '' ? '-' : data.species}</td>
                    <td>${data.type === '' ? '-' : data.type}</td>
                    <td>${data.gender === '' ? '-' : data.gender}</td>
                </tr>`;
            if (id) {
                if (id <= 0) {
                    alert('Digite um id válido maior que zero');
                } else {
                    tabela.innerHTML = linha;
                }
            } else {
            alert('Insira um ID');
            }
        })
        .catch((error) => console.error('Erro ao buscar dados: ', error));
}