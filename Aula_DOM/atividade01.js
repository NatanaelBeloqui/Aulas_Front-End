// A) Selecionar o elemento h1 e alterar o texto

let titulo = document.getElementById('titulo');
titulo.innerText = 'Bem-Vindo ao meu site!';

// B) Alterar classe texto

let textos = document.getElementsByClassName('texto');
textos[0].style.color = 'blue';
textos[1].style.color = 'green';

// C) Alterar texto do primeiro paragrafo

let primeiroTexto = document.querySelector('.texto');
primeiroTexto.innerText = 'Este é um novo texto';

// D) Mostrar quantos parágrafos existem

let todosParagrafos = document.querySelectorAll('p');
console.log(`Existem ${todosParagrafos.length} parágrafos`)

// E) Criar um novo parágrafo <p>
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é um novo parágrafo';

let novaDiv = document.getElementById('novaDiv');
novaDiv.appendChild(novoParagrafo);




let link = document.getElementById('meuLink');
link.setAttribute('href', 'http://www.google.com.br');

let paragrafo = document.getElementById('primeiro');
paragrafo.classList.add('destaque');
paragrafo.classList.remove('texto');