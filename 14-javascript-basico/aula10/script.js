let inputNota1 = prompt('Digite a primeira nota');
let inputNota2 = prompt('Digite a segunda nota');

let nota1 = parseInt(inputNota1);
let nota2 = parseInt(inputNota2);

let mediaMinima = 7;

let media = (nota1 + nota2) / 2;

if (media >= mediaMinima) {
  document.write('Você Passou de ano!');
} else if (media < mediaMinima) {
  document.write('Ops... não passou de ano!');
}

document.write('<br>');

if (media >= mediaMinima && media === 10) {
  document.write('Nossa! Você foi super bem, continue assim!');
} else if (media >= mediaMinima && media === 9) {
  document.write(
    'Você mandou bem! Mas, pode melhorar e alcançar a nota máxima!'
  );
}
