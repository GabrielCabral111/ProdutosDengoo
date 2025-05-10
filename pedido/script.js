const botaoNao = document.getElementById('nao');

function moverBotao() {
  // Aplica a classe para sair do layout fixo da div .botoes
  botaoNao.classList.add('movel');

  const maxX = window.innerWidth - botaoNao.offsetWidth;
  const maxY = window.innerHeight - botaoNao.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = `${randomX}px`;
  botaoNao.style.top = `${randomY}px`;
}

// Ativa a fuga no hover ou clique
botaoNao.addEventListener('mouseenter', moverBotao);
botaoNao.addEventListener('click', moverBotao);

