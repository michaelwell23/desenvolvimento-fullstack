let listaAtores = [
  {
    nome: 'Keanu Reeves',
    personagem: 'Neo',
    filme: 'The Matrix',
  },
  {
    nome: 'David Prowse',
    personagem: 'Darth Vader',
    filme: 'Star Wars Episódios IV-VI',
  },
  {
    nome: 'Bruce Wayne',
    personagem: 'Batman',
    filme: 'Batman - O Início',
  },
];

let htmlAtor = '';

for (let ator of listaAtores) {
  htmlAtor += `
  <div class="card">
    <h1>${ator.nome}</h1>
    <p>
      Interpreta o personagem <strong>${ator.personagem}</strong> no filme <strong>${ator.filme}</strong>
    </p>
  </div>
`;
}

document.querySelector('.card-info').innerHTML = htmlAtor;
