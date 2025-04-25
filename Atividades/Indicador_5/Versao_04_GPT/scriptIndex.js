// Mostrar só a imagem do personagem na mesma página
document.getElementById('showImage').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    if (!id || id <= 0) {
      return alert('Insira um ID válido (maior que zero).');
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('image-container').innerHTML =
          `<img src="${data.image}" alt="${data.name}" 
                style="max-width:200px; border-radius:8px;">
           <p>${data.name}</p>`;
      })
      .catch(err => {
        console.error(err);
        alert('Não foi possível carregar o personagem.');
      });
  });

  // Botão +Info: redireciona para info.html passando o ID na URL
  document.getElementById('moreInfo').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    if (!id || id <= 0) {
      return alert('Insira um ID válido (maior que zero).');
    }
    // aqui você “embute” o id na URL
    window.location.href = `info.html?id=${id}`;
  });