// Função Atbash adaptada para números
function atbashNumeros(s) {
  return s
    .split('')
    .map(c => {
      const code = c.charCodeAt(0);
      // Verifica se é um número (0-9)
      if (code >= 48 && code <= 57) {
        return String.fromCharCode(48 + (57 - code));
      }
      // Retorna o caractere sem modificação caso não seja número
      return c;
    })
    .join('');
}

function criptografa() {
  const msg = document.getElementById('mensagem').value;
  const resultado = atbashNumeros(msg);
  document.getElementById('resultados').textContent =
    'Mensagem criptografada com sucesso: ' + resultado;
}

function descriptografa() {
  const msg = document.getElementById('mensagem').value;
  const resultado = atbashNumeros(msg);
  document.getElementById('resultados').textContent =
    'Mensagem descriptografada com sucesso: ' + resultado;
}