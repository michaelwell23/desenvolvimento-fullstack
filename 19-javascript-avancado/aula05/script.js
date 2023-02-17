const clientes = [
  { nome: 'Marieva', sobrenome: 'Medeiros', idade: 35 },
  { nome: 'Carlos', sobrenome: 'Luiz', idade: 27 },
  { nome: 'Michael', sobrenome: 'Lopes', idade: 32 },
  { nome: 'Gustavo', sobrenome: 'Brava', idade: 22 },
  { nome: 'Gabriella', sobrenome: 'de Abulquerque', idade: 33 },
  { nome: 'Aline', sobrenome: 'Gomes', idade: 24 },
  { nome: 'Pâmela', sobrenome: 'Garcia', idade: 19 },
  { nome: 'Vincíus', sobrenome: 'Silva', idade: 30 },
];

// const clientesMaiores = clientes.filter((cliente) => {
//   let maioresDe30 = false;

//   if (cliente.idade >= 30) {
//     maioresDe30 = true;
//   }
//   return maioresDe30;

// });

const clientesMaiores = clientes.filter((cliente) =>
  cliente.idade >= 30 ? true : false
);

console.log(clientesMaiores);
