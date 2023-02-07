var inputNumero = prompt('Digite qual tabuada você quer saber:');

var numero = parseInt(inputNumero);

for (var contador = 1; contador <= 10; contador++) {
  document.write(
    numero + ' x ' + contador + ' = ' + numero * contador + '<br />'
  );
}
