let link = document.getElementById('meuLink');
link.setAttribute('href', 'http://www.google.com.br');

let paragrafo = document.getElementById('primeiro');
paragrafo.classList.add('destaque');
paragrafo.classList.remove('texto');

// A)
let titulo = document.getElementById('titulo');
titulo.innerText = 'Bem-vindo ao meu site!';

// B)
let texto1 = document.getElementsByClassName('texto')[0];
texto1.style.color = 'blue';

let texto2 = document.getElementsByClassName('texto')[1];
texto2.style.color = 'green';

// C)
document.querySelector('.texto').innerText = 'Este é um novo texto';

// D)
let paragrafos = document.querySelectorAll('p'); // O querySelectorAll cria uma array com tudo o que for igual ao que foi selecionado
console.log(`Existem ${paragrafos.length} parágrafos`);

// E)
// Criando um novo elemento
let novoParagrafo = document.createElement('p');
novoParagrafo.innerText = 'Este é um novo parágrafo';

// Adicionando o novo elemento ao elemento <div>
let novaDiv = document.getElementById('novaDiv');
novaDiv.appendChild(novoParagrafo);

// Teste
novaDiv.innerHTML = '<p>Isso é um novo parágrafo, no lugar de todo o conteúdo que tinha dentro dessa div</p>'

// innerText apenas adiciona o conteúdo no final de todo conteúdo que já existia
// innetHTML apaga todo o conteúdo que já tinha e coloca o conteúdo atual