const botaoCarregar = document.querySelector('#botaoCarregar');
const divQuote = document.querySelector('#quote');

let div = '';

function transformarEmJSON(response) {
  return response.json();
}

function exibirUsuarios(response) {
  response.forEach((element) => {
    div += `
    <blockquote>
      ${element.body}
      <span class="author"><i>Lorem ipsum</i>${element.email}</span>
      <br/>
    </blockquote>
    `;
  });

  divQuote.innerHTML = div;
}

botaoCarregar.onclick = () =>
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: GET,
    headers: {},
  })
    .then(transformarEmJSON)
    .then(exibirUsuarios)
    .catch('Ops, ocorreu um erro!');
