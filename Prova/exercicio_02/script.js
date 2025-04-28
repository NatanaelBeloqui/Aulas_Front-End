const noticias = [];

document.querySelector('#noticias-cadastradas').innerText = 0;

function adicionarNoticia() {

  const noticiaCadastrada = document.querySelector('#noticia').value;

  if(noticiaCadastrada) {
    noticias.push(noticiaCadastrada);
    mostrarNoticiasCadastradas(noticias);
    document.querySelector('#noticia').value = '';
  } else {
    alert('Insira uma notícia');
  }

}

function listarNoticias (noticias, qtd) {

  // const divNoticias = document.querySelector('.noticias');
  const paragrafo = document.createElement('p');
  const quantidadeNoticias = document.querySelector('.qtd-noticias');
  const ultimasNoticias = noticias.reverse().slice(0, qtd);

  if(!quantidadeNoticias || quantidadeNoticias === 0) {
    return alert('Insira quantas noticias deseja ver, sem ser zero.');
  } else {
    const qdtNoticias = ultimasNoticias.length;
    let contador = 0;
    ultimasNoticias.forEach((noticia) => {
      paragrafo.innerText = `${qdtNoticias.length - contador}º) ${noticia}.`;
    });
  }

}

function mostrarNoticiasCadastradas(noticias) {
  document.querySelector('#noticias-cadastradas').innerText = noticias.length;
}