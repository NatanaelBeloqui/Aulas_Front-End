const titulo = document.querySelector('#titulo');
const resultado = document.querySelector('.resultado');
let duracaoHora = 0;
let duracaoMin = 0;

function converter() {
    const duracao = document.querySelector('#duracao').value;
    duracaoHora = Math.floor(duracao / 60);
    duracaoMin = duracao % 60;
    resultado.innerHTML = `<p>${titulo.value}</p> <p>${duracaoHora} hora(s) e ${duracaoMin} minuto(s)</p>`;
}