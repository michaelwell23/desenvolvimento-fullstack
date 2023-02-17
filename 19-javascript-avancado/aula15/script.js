const botaoCarregar = document.querySelector('#botaoCarregar');
const ul = document.querySelector('.users');

let li = '';

function transformarEmJSON(response) {
  return response.json();
}

function exibirUsuarios(response) {
  response.forEach((element) => {
    li += `
      <li>
        <div><strong>Name: </strong>${element.name}</div>
        <div><strong>Username: </strong>${element.username}</div>
        <div><strong>Email: </strong>${element.email}</div>
      </li>
      <br/>
    `;
  });
  ul.innerHTML = li;
}

botaoCarregar.onclick = aoClicarNoBotao;

async function aoClicarNoBotao() {
  const dados = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(transformarEmJSON)
    .catch('Ops, ocorreu um erro!');

  const { name, username, email } = dados[1];

  console.log(name, username, email);
}
