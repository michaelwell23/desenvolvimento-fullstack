/*
 * string
 * number
 * boolean
 * array
 * object
 * undefined
 * null
 */

// STRINGS
let nome = 'Michael';
let sobrenome = 'Lopes';

console.log(nome);

//concatenação
console.log(nome, sobrenome);
console.log(nome + ' ' + sobrenome);
console.log(`${nome} ${sobrenome}`); // template literals

// NUMBERS
let idade = 32;
console.log(idade);
console.log(idade + 10);

// NUMBER - DECIMAL
let porcentagem = 10.2;
console.log(porcentagem + '%');

//BOOLEAN (true or false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

// ARRAY
let habilidades = ['JavaScipt', 'PHP', 'Python'];

console.log(habilidades);
console.log(habilidades.length);
console.log(habilidades[2]);

// OBJECT
let pessoa = {
  nome: 'Fulano',
  sobrenome: 'de Tal',
  idaide: 35,
  habilidades: ['c++', 'c#', 'python'],
};

console.log(pessoa.nome);
console.log(pessoa.habilidades[0]);

// UNDEFINED
let endereco;
console.log(endereco);

// null
let cidade = null;
console.log(cidade);
