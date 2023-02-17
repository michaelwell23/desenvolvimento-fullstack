const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
};

const mediaAluno = aluno.notas.reduce((soma, notas) => {
  return soma + notas;
});

console.log(
  `A média de ${aluno.nome} foi ${Math.ceil(
    mediaAluno / aluno.notas.length
  )} para o total de ${aluno.notas.length} bimestres`
);
