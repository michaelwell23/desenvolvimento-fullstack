const tarefas = [
  { tarefa: 'Estudar JavaScript' },
  { tarefa: 'Estudar Node.js' },
  { tarefa: 'Estudar React.js' },
];

const tarefasJSON = JSON.stringify(tarefas);

localStorage.setItem('tarefas', tarefasJSON);

const listaTarefasSalvas = localStorage.getItem('tarefas');

const lista = JSON.parse(listaTarefasSalvas);

console.log(lista);

localStorage.removeItem('tarefas');
