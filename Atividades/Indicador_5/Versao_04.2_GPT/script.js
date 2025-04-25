// Ativa o Enter no input
const input = document.querySelector('#id');
if (input) {
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') carregarPersonagem();
  });
}

function carregarPersonagem() {
  const id = document.querySelector('#id').value;
  const titulo = document.querySelector('.titulo');
  const nomePersonagem = document.querySelector('.nomePersonagem');
  const divImagem = document.querySelector('.imagem');
  const infoDiv = document.querySelector('.info');

  divImagem.innerHTML = '';
  infoDiv.innerHTML = '';

  if (!id || id <= 0) {
    alert('Digite um ID válido maior que zero');
    limpar();
    return;
  }

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('Personagem não encontrado');
      return response.json();
    })
    .then(data => {
      titulo.innerText = 'Personagem escolhido';
      nomePersonagem.innerText = data.name || '-';

      if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.name;
        img.style.width = '400px';
        img.style.borderRadius = '10px';
        divImagem.appendChild(img);
      }

      // Após carregar com sucesso, adiciona botão +Info
      mostrarMaisInfo(id);
    })
    .catch(error => {
      titulo.innerText = 'Erro';
      nomePersonagem.innerText = 'Não há personagem nesse ID';
      console.error('Erro ao buscar dados:', error);
    })
    .finally(() => {
      ativarBotaoLimpar();
      document.querySelector('#id').value = '';
    });
}

function mostrarMaisInfo(id) {
  const info = document.querySelector('.info');
  const botao = document.createElement('button');

  botao.innerText = '+ Info';
  botao.classList.add('btn-info');
  botao.addEventListener('click', () => {
    window.location.href = `info.html?id=${id}`;
  });

  info.appendChild(botao);
  return botao;
}

function ativarBotaoLimpar() {
  setTimeout(() => document.querySelector('.btn_limpar').disabled = false, 300);
}

function desativarBotaoLimpar() {
  document.querySelector('.btn_limpar').disabled = true;
}

function limpar() {
  document.querySelector('.titulo').innerText = 'Escolha seu Personagem';
  document.querySelector('.nomePersonagem').innerText = '';
  document.querySelector('.imagem').innerHTML = '';
  document.querySelector('.info').innerHTML = '';
  desativarBotaoLimpar();
}

// Se estivermos em info.html, carregamos detalhes usando o ID da query string
if (document.querySelector('#dados')) {
  const params = new URLSearchParams(window.location.search);
  const idInfo = params.get('id');
  if (!idInfo || idInfo <= 0) {
    alert('Nenhum ID fornecido!');
    window.location.href = 'index.html';
  } else {
    carregarDetalhes(idInfo);
  }
}

function carregarDetalhes(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
      if (!response.ok) throw new Error('Personagem não encontrado');
      return response.json();
    })
    .then(data => {
      const tbody = document.querySelector('#dados');
      tbody.innerHTML = `
        <tr>
          <td>${data.id || '-'}</td>
          <td>${data.name || '-'}</td>
          <td>${data.status || '-'}</td>
          <td>${data.species || '-'}</td>
          <td>${data.type || '-'}</td>
          <td>${data.gender || '-'}</td>
        </tr>`;
    })
    .catch(error => {
      console.error('Erro ao carregar detalhes:', error);
      alert('Não foi possível carregar os detalhes.');
    });
}