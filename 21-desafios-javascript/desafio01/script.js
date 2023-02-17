const button = document.querySelector('#button-send');
const inputCep = document.querySelector('#input-cep');

inputCep.onchange = () =>
  carregarConsultaCep().then(exibirCEP).catch('Ops, ocorreu um Erro!');

const array = [];

function exibirCEP(response) {
  const inputLogradouro = document.querySelector('#input-logradouro');
  const inputCidade = document.querySelector('#input-cidade');
  const inputBairro = document.querySelector('#input-bairro');
  const inputUf = document.querySelector('#input-uf');

  array.push(response);

  array.forEach((element) => {
    console.log(element);
    inputLogradouro.value = element.logradouro;
    inputBairro.value = element.bairro;
    inputCidade.value = element.localidade;
    inputUf.value = element.uf;
  });
}

function carregarConsultaCep() {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText);

        resolve(response);

        if (this.status === 404) {
          reject();
        }
      }
    };

    let cep = inputCep.value;
    xhttp.open('GET', `https://viacep.com.br/ws/${cep}/json/`, true);
    xhttp.send();
  });
}
