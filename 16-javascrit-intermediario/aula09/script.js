let formulário = document.querySelector('#formCadastro');

formulário.onsubmit = function (evento) {
  evento.preventDefault();

  let temErro = false;

  let inputNome = document.forms['formCadastro']['nome'];
  let spanNome = inputNome.nextSibling.nextSibling;

  if (!inputNome.value) {
    temErro = true;

    inputNome.classList.add('inputError');
    spanNome.innerHTML =
      '<strong>Por favor, preencha o campo com um nome válido!</strong>';
  } else {
    inputNome.classList.remove('inputError');

    spanNome.innerHTML = '';
  }

  let inputEmail = document.forms['formCadastro']['email'];
  let spanEmail = inputEmail.nextSibling.nextSibling;

  if (!inputEmail.value) {
    temErro = true;

    inputEmail.classList.add('inputError');
    spanEmail.innerHTML =
      '<strong>Por favor, preencha o campo com um e-mail válido!</strong>';
  } else {
    inputEmail.classList.remove('inputError');

    spanEmail.innerHTML = '';
  }

  let inputCidade = document.forms['formCadastro']['cidade'];
  let spanCidade = inputCidade.nextSibling.nextSibling;

  if (!inputCidade.value) {
    temErro = true;

    inputCidade.classList.add('inputError');
    spanCidade.innerHTML = '<strong>Por favor, preencha a sua cidade!</strong>';
  } else {
    inputCidade.classList.remove('inputError');

    spanCidade.innerHTML = '';
  }

  if (!temErro) {
    formulário.submit();
  }
};
