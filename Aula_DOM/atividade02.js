// A)
let titulo = document.getElementById('titulo');
titulo.innerText = 'Bem-vindo ao meu site!';

// B)
let minhaDiv = document.getElementById('minhaDiv');
minhaDiv.innerHTML = '<p>Este é um novo parágrafo.</p>';

// C)
let link = document.getElementById('meuLink');
link.setAttribute('href', 'https://www.senac.br/');

// D)
let meuParagrafo = document.getElementById('meuParagrafo');
meuParagrafo.classList.add('destaque');

// E)
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é outro parágrafo';
document.body.appendChild(novoParagrafo);