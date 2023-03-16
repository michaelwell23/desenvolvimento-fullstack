const API_URL = 'http://localhost:3333/api/produtos';

const edit = document.querySelector('.edit');
const cadastro = document.querySelector('.summary');

const form = document.querySelector('#form');
const formEdit = document.querySelector('#formEdit');

const productsList = document.querySelector('#products-list');

// EXCLUIR UM PRODUTO DA LISTA
function adicionaEventoNoBotaoExcluir() {
  const botoesExcluir = document.querySelectorAll('.deletar');
  botoesExcluir.forEach((botao) => {
    botao.onclick = function (e) {
      e.preventDefault();
      const id = this.dataset.id;

      fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      }).then((response) => {
        response.json().then((data) => {
          if (data.message === 'Dados de produto deletado com sucesso') {
            obterLista();
            alert('Dados de produto deletado com sucesso!');
          } else {
            alert('Ops! Ocorreu um erro, tente novamente!');
          }
        });
      });
    };
  });
}

// ADICIONA EVENTO DO CLICK DO BOTÃO EDITAR
function adicionaEventoNoBotaoEditar() {
  const botoesEditar = document.querySelectorAll('.editar');
  botoesEditar.forEach((botao) => {
    botao.onclick = function (e) {
      e.preventDefault();

      cadastro.classList.add('hidden');
      edit.classList.remove('hidden');

      const name = this.dataset.name;
      const brand = this.dataset.brand;
      const price = this.dataset.price;

      document.forms['formEdit'].name.value = name;
      document.forms['formEdit'].brand.value = brand;
      document.forms['formEdit'].price.value = price;
    };
  });
}

// OBTEM A LISTA DE PRODUTOS
function obterLista() {
  fetch(API_URL).then((response) => {
    {
      response.json().then((data) => {
        const productsHTML = data
          .map(
            (product) => `
          <div class="row main align-items-center">
          <div class="col">
            <div class="row text-muted">Nome</div>
            <div class="row">${product.name}</div>
          </div>
          <div class="col">
            <div class="row text-muted">Marca</div>
            <div class="row">${product.brand}</div>
          </div>
          <div class="col">
            <div class="row text-muted">Preço</div>
            ${product.price}
            <span class="close deletar" data-id="${product._id}"> <a href="#">&#10005;</a></span>
            <span
              class="close editar"
              data-id="${product.id}"
              data-name="${product.name}"
              data-brand="${product.brand}"
              data-price="${product.price}"
              > <a href="#">&#x270E;</a></span>
          </div>
        </div>
      `
          )
          .join('');

        productsList.innerHTML = productsHTML;

        adicionaEventoNoBotaoExcluir();
        adicionaEventoNoBotaoEditar();
      });
    }
  });
}

obterLista();

// AO CADASTRAR UM PRODUTO
form.onsubmit = function (e) {
  e.preventDefault();

  const name = document.forms['form'].name.value;
  const brand = document.forms['form'].brand.value;
  const price = document.forms['form'].price.value;

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      brand,
      price,
    }),
  }).then((response) => {
    response.json().then((data) => {
      if (data) {
        form.reset();
        obterLista();
        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Ops! Ocorreu um erro, tente novamente!');
      }
    });
  });
};

// AO EDITAR UM PRODUTO
form.onsubmit = function (e) {
  e.preventDefault();

  const id = this.dataset.id;

  const name = document.forms['formEdit'].name.value;
  const brand = document.forms['formEdit'].brand.value;
  const price = document.forms['formEdit'].price.value;

  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      brand,
      price,
    }),
  }).then((response) => {
    response.json().then((data) => {
      if (data.message === 'success') {
        obterLista();
        alert('Dados de produto alterado com sucesso!');
      } else {
        alert('Ops! Ocorreu um erro, tente novamente!');
      }
    });
  });
};
