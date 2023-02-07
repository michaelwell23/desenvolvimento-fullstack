function milhasEmKm(milhas) {
  let km = milhas * 1.6;

  return km;
}

let resultado = milhasEmKm(150);
document.write(resultado);

// function soma(num1, num2) {
//   num1 = Number(prompt('Digite o primeiro numero'));
//   num2 = Number(prompt('Digite o segundo numero'));

//   return num1 + num2;
// }

// let resultado = soma();

// document.write(`O resultado da soma é: <b>${resultado}</>`);
