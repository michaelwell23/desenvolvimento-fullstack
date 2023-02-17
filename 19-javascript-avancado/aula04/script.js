const clientes = [
  { nome: 'Gabriella', sobrenome: 'de Abulquerque' },
  { nome: 'Michael', sobrenome: 'Lopes' },
  { nome: 'Marieva', sobrenome: 'Medeiros' },
];

let clientesFinal = [];
clientes.forEach(function (cliente) {
  clientesFinal.push(cliente.nome + ' ' + cliente.sobrenome);
});

console.log('forEach', clientesFinal);

const clientesFinalMap = clientes.map(
  (cliente) => cliente.nome + ' ' + cliente.sobrenome
);

console.log('Map', clientesFinalMap);
