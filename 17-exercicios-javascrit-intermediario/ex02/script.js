let incremento = document.querySelector('#incremento');
let decremento = document.querySelector('#decremento');

let contador = 0;

decremento.addEventListener('click', function () {
  setTimeout(function () {
    contador--;

    let valor = document.querySelector('#result-box');
    decremento.style.color = 'red';

    valor.innerText = contador;

    decremento.click();
  }, 1000);
});

incremento.addEventListener('click', function () {
  setTimeout(function () {
    contador++;

    let valor = document.querySelector('#result-box');
    incremento.style.color = 'green';

    valor.innerText = contador;

    incremento.click();
  }, 1000);
});
