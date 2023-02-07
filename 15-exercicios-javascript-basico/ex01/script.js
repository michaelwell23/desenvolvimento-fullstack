var nome = prompt('Digite seu nome.');
var promptIdade = prompt('Digite sua idade');

var idade = parseInt(promptIdade);
console.log(nome);

if (idade >= 18) {
  document.write(`Olá ${nome}. Você é maior de idade!`);
} else {
  document.write(`Olá ${nome}. Você é menor de idade!`);
}

