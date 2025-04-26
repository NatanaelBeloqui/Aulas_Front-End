// vetor que armazena todas as notícias
const noticias = [];

// atualiza o texto que mostra a contagem
function atualizarContagem() {
  document.getElementById('info-contagem')
    .textContent = `Notícias cadastradas: ${noticias.length}`;
}

// adiciona uma notícia ao vetor e atualiza a contagem
function adicionarNoticia() {
  const campo = document.getElementById('input-noticia');
  const texto = campo.value.trim();

  if (!texto) {
    alert('Informe uma notícia válida.');
    return;
  }

  noticias.push(texto);
  campo.value = '';
  atualizarContagem();
}

function listarNoticias() {
if (noticias.length === 0) {
alert('Não há notícias cadastradas.');
return;
}

// limpa lista anterior
const ul = document.getElementById('lista-noticias');
ul.innerHTML = '';

// lista todas as notícias na ordem em que foram inseridas
noticias.forEach(noticia => {
const li = document.createElement('li');
li.textContent = noticia;
ul.appendChild(li);
});
}