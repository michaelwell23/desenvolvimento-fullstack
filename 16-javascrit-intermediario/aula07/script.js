let toast = document.querySelector('.toast');
let botaoCadastrar = document.querySelector('#botaoCadastrar');
let inputTexto = document.querySelector('#inputTexto');

botaoCadastrar.onclick = function () {
  let texto = inputTexto.value;

  toast.classList.add('visible');

  toast.innerHTML = `Tarefa <strong>${texto}</strong> foi cadastrada com sucesso!`;

  setTimeout(function () {
    toast.classList.remove('visible');
  }, 5000);
};
