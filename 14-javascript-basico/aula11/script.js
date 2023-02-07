let diaSemana = new Date().getDay();
let diaMes = new Date().getDate();

let nomeDia;

switch (diaSemana) {
  case 0:
    nomeDia = 'Domingo';
    break;
  case 1:
    nomeDia = 'Segunda-feira';
    break;
  case 2:
    nomeDia = 'Terça-feira';
    break;
  case 3:
    nomeDia = 'Quarta-feira';
    break;
  case 4:
    nomeDia = 'Quinta-feira';
    break;
  case 5:
    nomeDia = 'Sesta-feira';
    break;
  case 6:
    nomeDia = 'Sábado';
    break;
}

document.write(`Hoje é ${nomeDia}`);
