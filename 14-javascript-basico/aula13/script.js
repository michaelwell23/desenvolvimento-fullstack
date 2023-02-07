let clientes = [
  {
    nome: 'Michael',
    idade: 32,
    linguagens: ['Java', 'JavaScript', 'php', 'c++'],
  },
  {
    nome: 'Gabriella',
    idade: 33,
    linguagens: ['Python', 'C#', 'php', '.NET'],
  },
  {
    nome: 'Marcela',
    idade: 38,
    linguagens: ['C++', 'Assembly', 'go', 'r'],
  },
];

let htmlClientes = '';

for (let cliente of clientes) {
  let listaLinguagens = '';

  for (let linguagem of cliente.linguagens) {
    listaLinguagens += `<li>${linguagem}</li>`;
  }

  htmlClientes += `
  <li>
    <b>Nome:</b>${cliente.nome}<br>
    <b>Idade:</b>${cliente.idade}<br>
    <b>Linguagens:</b><br>
    <ul>
      ${listaLinguagens}
    </ul>
  </li>

 `;
}

document.querySelector('#listaClientes').innerHTML = htmlClientes;
