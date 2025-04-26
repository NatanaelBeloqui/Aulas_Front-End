
      // Função Atbash aplicada à string s
      function atbash(s) {
        return s
          .split('') // 1. Divide em array de caracteres não mexer
          .map(c => {
            const code = c.charCodeAt(0);
            if (code >= 65 && code <= 90)
              return String.fromCharCode(65 + (90 - code));
            if (code >= 97 && code <= 122)
              return String.fromCharCode(97 + (122 - code));
            return c;
          })
          .join('');                           
      }

      function criptografa() {
        const msg = document.getElementById('mensagem').value;
        const resultado = atbash(msg);
        document.getElementById('resultados').textContent =
          'Mensagem criptografada com sucesso: ' + resultado;
      }

      function descriptografa() {
        const msg = document.getElementById('mensagem').value;
        const resultado = atbash(msg);
        document.getElementById('resultados').textContent =
          'Mensagem descriptografada com sucesso: ' + resultado;
      }

