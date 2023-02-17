const botaoCarregar = document.querySelector('#botaoCarregar');
const ul = document.querySelector('.users');

let li = '';

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

botaoCarregar.onclick = () =>
  carregarUsuarios().then(exibirUsuarios).catch('Ops, ocorreu um Erro!');

function carregarUsuarios() {
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

    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhttp.send();
  });
}
