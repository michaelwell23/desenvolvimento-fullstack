let contador = document.querySelector('#contador');
let botaoPausar = document.querySelector('#pausar');

let count = 0;

let intervalo = setInterval(function () {
  count++;
  contador.innerHTML = `<h1>${count}</h1>`;
}, 1000);

botaoPausar.onclick = function () {
  clearInterval(intervalo);
};
