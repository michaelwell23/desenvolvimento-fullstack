// seletor por id
document.querySelector('#titulo').innerHTML = 'Meu Título';

// seletor por tag
document.querySelector('a').innerHTML = '<b>Link Âncora</b>';

// seletor de multiplos itens e alterando o html
document.querySelectorAll('a').forEach(function (elemento) {
  elemento.innerHTML = '<h3>Link Teste</h3>';
});

// selecionando mais de 1 item por classe
let boxes = document.querySelectorAll('.box');

boxes.forEach(function (box, index) {
  box.innerHTML = 'Box ' + (index + 1);
});
