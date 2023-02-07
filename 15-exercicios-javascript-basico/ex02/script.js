var nome = prompt('Digite seu nome.');
var promptIdade = prompt('Digite sua idade');

var idade = parseInt(promptIdade);

if (idade > 17) {
  document.write(`Olá ${nome}. Você é maior de idade!`);
} else {
  document.write(`Olá ${nome}. Você é menor de idade!`);
}

if (nome == 'Thomas Anderson' || nome == 'thomas anderson') {
  document.write(' Você é um personagem do filme The Matrix');
}
