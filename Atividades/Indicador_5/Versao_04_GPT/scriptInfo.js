// 1) Pegar o `id` da query string: ?id=5
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if (!id) {
  alert('Nenhum ID fornecido!');
  // opcional: volta pra home
  window.location.href = 'index.html';
} else {
  carregarGlorzo(id);
}

// 2) Função que busca e preenche a tabela
function carregarGlorzo(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector('#dados tbody');
      tbody.innerHTML = '';  // limpa tabela
      
      const linha = `
        <tr>
          <td>${data.id || '-'}</td>
          <td>${data.name || '-'}</td>
          <td>${data.status || '-'}</td>
          <td>${data.species || '-'}</td>
          <td>${data.type || '-'}</td>
          <td>${data.gender || '-'}</td>
        </tr>`;
      tbody.innerHTML = linha;
    })
    .catch(err => {
      console.error('Erro ao buscar dados:', err);
      alert('Não foi possível carregar os detalhes.');
    });
}