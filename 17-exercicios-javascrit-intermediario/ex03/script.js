let select = document.querySelector('#state-select');
let saoPaulo = document.querySelector('.sao_paulo');
let rioDeJaneiro = document.querySelector('.rio_de_janeiro');

select.addEventListener('change', function () {
  if (select.value === 'São Paulo') {
    saoPaulo.style.display = 'block';
    rioDeJaneiro.style.display = 'none';
  } else {
    rioDeJaneiro.style.display = 'block';
    saoPaulo.style.display = 'none';
    s;
  }
});
