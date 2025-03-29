// a. Alterando o texto do elemento <h1>
document.getElementById('titulo').innerText = "Bem-vindo ao meu site!";

// b. Adicionando um novo parágrafo dentro da <div>
document.getElementById('minhaDiv').innerHTML = "<p>Este é um novo parágrafo.</p>";

// c. Mudando o endereço do link
document.getElementById('meuLink').setAttribute('href', 'https://www.senac.br');

// d. Adicionando a classe 'destaque' ao parágrafo
document.getElementById('meuParagrafo').classList.add('destaque');

// e. Criando um novo elemento <p> e adicionando ao final do <body>
let novoParagrafo = document.createElement('p');  
novoParagrafo.innerText = "Este é outro parágrafo.";  
document.body.appendChild(novoParagrafo);