function printarInformações() {
  var nome = prompt('Digite seu nome.');
  var promptIdade = prompt('Digite sua idade');

  if (nome == '' || promptIdade == '') {
    alert('Preencha todos os campos!');
    location.reaload();
  }

  var idade = parseInt(promptIdade);

  if (idade > 17) {
    document.write(`<h1>Olá ${nome}. Você é maior de idade!</h1>`);
  } else {
    document.write(`<h1>Olá ${nome}. Você é menor de idade!</h1>`);
  }

  if (nome == 'Thomas Anderson' || nome == 'thomas anderson') {
    document.write('<br> <h2>Você é um personagem do filme The Matrix <h2>');
  }
}
