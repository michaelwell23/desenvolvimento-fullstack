const ul = document.querySelector('.users');

const xhttp = new XMLHttpRequest();
let li = '';

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText);

    response.forEach((element) => {
      li += `
        <li>${element.name}</li>
      `;
    });
    ul.innerHTML = li;
  }
};

xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhttp.send();
