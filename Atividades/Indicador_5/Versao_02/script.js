function carregarPersonagem() {
    const id = document.querySelector('#id').value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Faz a busca pela API
        .then((response) => response.json())
        .then((data) => {
            const tabelaCabecalho = document.querySelector('.cabecalho');
            const tabelaDados = document.querySelector('#dados');
            // tabelaDados.innerHTML = '';
            // tabelaCabecalho.innerHTML = ''
            const linhaCabecalho = `
                <tr>
                    <th>Name</th>
                </tr>
            `;
            const linhaDados = `
                <tr>
                
                    <td>${data.name === '' ? '-' : data.name}</td>
                </tr>
            `;
            if (id) {
                if (id <= 0) {
                    alert('Digite um id válido maior que zero');
                } else {
                    tabelaCabecalho.innerHTML = linhaCabecalho;
                    tabelaDados.innerHTML = linhaDados;
                }
            } else {
            alert('Insira um ID');
            }
        })
        .catch((error) => console.error('Erro ao buscar dados: ', error));
        ativarBotaoLimpar();
}

function ativarBotaoLimpar() {
    setTimeout(() => document.querySelector('.btn_limpar').disabled = false, 300); // 2000 milissegundos = 2 segundos
}

function desativarBotaoLimpar() {
    document.querySelector('.btn_limpar').disabled = true;
}

function limpar() {
    const id = document.querySelector('#id');
    const tabelaCabecalho = document.querySelector('.cabecalho');
    const tabelaDados = document.querySelector('#dados');
    id.value = '';
    tabelaDados.innerHTML = '';
    tabelaCabecalho.innerHTML = '';
    desativarBotaoLimpar();
}

// function maisInfo()