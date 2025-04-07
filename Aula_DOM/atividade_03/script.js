// Seleciona o parágrafo pelo seu id
let myParagraph = document.getElementById('myParagraph');

// Adiciona um ouvinte de eventos para quando o mouse passa sobre o parágrafo
myParagraph.addEventListener("mouseover", function() {
    myParagraph.classList.add('hover');
});

// Adiciona um ouvinte de eventos para quando o mouse sai do parágrafo
myParagraph.addEventListener("mouseout", function() {
    myParagraph.classList.remove('hover');
});
