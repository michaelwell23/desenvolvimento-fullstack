let botaoTeste = document.querySelector('#teste');

let contador = 0;

function cliqueBotao() {
  contador++;
  console.log(`Mensagem ${contador}`);

  if (contador >= 5) {
    botaoTeste.removeEventListener('click', cliqueBotao);
    alert('Você não pode mais enviar menssagens!');
  }
}

botaoTeste.addEventListener('click', cliqueBotao);
