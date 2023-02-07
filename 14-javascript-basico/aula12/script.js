// for (let contador = 0; contador <= 10; contador++) {
//   document.write(`Hello World ${contador} <br>`);
// }
let opcoes;

for (let contador = 2023; contador >= 1900; contador--) {
  opcoes += `<option>${contador}</option>`;
}

document.querySelector('#ano').innerHTML = opcoes;

let clientes = [
  'Michael',
  'Gabriela',
  'Rafael',
  'Cassandra',
  'Marcos',
  'Luana',
  'Lucas',
  'Vanessa',
  'André',
  'Bruna',
  'Carlos',
  'Violeta',
];

let lista = '';

for (let i = 0; i <= clientes.length; i++) {
  lista += `<li>${clientes[i - 1]}</li> `;
  console.log(clientes[i]);
}

document.querySelector('#listaClientes').innerHTML = lista;
