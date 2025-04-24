function carregarPersonagem() {
    const id = document.querySelector('#id').value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Faz a busca pela API
        .then((response) => response.json())
        .then((data) => {
            const titulo = document.querySelector('.titulo');
            const nomePersonagem = document.querySelector('.nomePersonagem');
            const divImagem = document.querySelector('.imagem');
            const img = document.createElement('img');
            if (id) {
                if (id <= 0) {
                    alert('Digite um id válido maior que zero');
                } else {
                    titulo.innerText = 'Personagem escolhido';
                    nomePersonagem.innerHTML = data.name === '' ? '-' : data.name;
                    if (data.image) {
                        img.src = data.image;
                        img.alt = data.name; // sempre bom usar alt
                        img.style.width = '400px'; // opcional
                        img.style.borderRadius = '10px'; // só um estilinho
                        divImagem.appendChild(img);
                        document.querySelector('#id').value = '';
                    }
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
    const titulo = document.querySelector('.titulo');
    const nomePersonagem = document.querySelector('.nomePersonagem');
    const divImagem = document.querySelector('.imagem');
    id.value = '';
    titulo.innerHTML = 'Escolha seu Personagem';
    nomePersonagem.innerHTML = '';
    divImagem.innerHTML = '';

    desativarBotaoLimpar();
}