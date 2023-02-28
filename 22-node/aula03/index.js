// const calculos = require('./calc');
const { soma, multiplicacao } = require('./calc');

const somar = soma(20, 30);
// const soma = calculos.soma(20, 30);

const multiplicar = multiplicacao(23, 5);
// const multiplicacao = calculos.multiplicacao(23, 5);

console.log(somar, multiplicar);
