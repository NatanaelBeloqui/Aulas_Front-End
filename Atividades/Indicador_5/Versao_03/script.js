const input = document.querySelector('#id');
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        carregarPersonagem();
    }
});

function carregarPersonagem() {
    const id = document.querySelector('#id').value;
    const titulo = document.querySelector('.titulo');
    const nomePersonagem = document.querySelector('.nomePersonagem');
    const divImagem = document.querySelector('.imagem');

    divImagem.innerHTML = ''; // limpa imagem anterior, se houver

    if (!id || id <= 0) {
        alert('Digite um ID válido maior que zero');
        limpar();
        // return;
    } else {

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Personagem não encontrado');
                }
                return response.json();
            })
            .then((data) => {
                titulo.innerText = 'Personagem escolhido';
                nomePersonagem.innerHTML = data.name || '-';
    
                if (data.image) {
                    const img = document.createElement('img');
                    img.src = data.image;
                    img.alt = data.name;
                    img.style.width = '400px';
                    img.style.borderRadius = '10px';
                    divImagem.appendChild(img);
                }
            })
            .catch((error) => {
                titulo.innerText = 'Erro';
                nomePersonagem.innerHTML = 'Não há personagem nesse ID';
                console.error('Erro ao buscar dados: ', error);
            })
            .finally(() => {
                document.querySelector('#id').value = '';
                ativarBotaoLimpar();
                mostrarMaisInfo();
            });
    }

}

function ativarBotaoLimpar() {
    setTimeout(() => document.querySelector('.btn_limpar').disabled = false, 300); // 2000 milissegundos = 2 segundos
}

function desativarBotaoLimpar() {
    document.querySelector('.btn_limpar').disabled = true;
}

function mostrarMaisInfo() {
    const info  = document.querySelector('.info');
    const botao = document.createElement('button');
  
    botao.innerText = '+ Info';
    botao.classList.add('btn-info');
  
    botao.addEventListener('click', function() {
      window.location.href = 'info.html';
    });
  
    info.appendChild(botao);
    return botao;
  }

function limpar() {
    const titulo = document.querySelector('.titulo');
    const nomePersonagem = document.querySelector('.nomePersonagem');
    const divImagem = document.querySelector('.imagem');
    const info = document.querySelector('.info');
    id.value = '';
    titulo.innerHTML = 'Escolha seu Personagem';
    nomePersonagem.innerHTML = '';
    divImagem.innerHTML = '';
    info.innerHTML = '';

    desativarBotaoLimpar();
}