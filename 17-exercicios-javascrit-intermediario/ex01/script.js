let incremento = document.querySelector('#incremento');
let decremento = document.querySelector('#decremento');

let valor = 0;

decremento.onclick = function () {
  valor--;
  document.querySelector('#result-box').innerText = valor;
};

incremento.onclick = function () {
  valor++;
  document.querySelector('#result-box').innerText = valor;
};
