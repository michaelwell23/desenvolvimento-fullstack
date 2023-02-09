let menuMobile = document.querySelector('.menuMobile');
let botaoMenu = document.querySelector('.botaoMenu');

let open = false;

function openToCloserMenu() {
  if (open === true) {
    open = false;
    menuMobile.classList.remove('open');
    botaoMenu.innerText = 'Abrir Menu';
  } else {
    open = true;
    menuMobile.classList.add('open');
    botaoMenu.innerText = 'Fechar Menu';
  }
}
