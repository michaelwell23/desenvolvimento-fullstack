const botaoCarregar = document.querySelector('#botaoCarregar');
const ul = document.querySelector('.users');

let li = '';

function exibirUsuarios(response) {
  response.forEach((element) => {
    li += `
      <li>${element.name}</li>
    `;
  });
  ul.innerHTML = li;
}

botaoCarregar.onclick = () => carregarUsuarios(exibirUsuarios);

function carregarUsuarios(callback) {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);

      if (callback) {
        callback(response);
      }
    }
  };

  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhttp.send();
}
