const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  console.log(request.url);

  if (request.url === '/') {
    fs.readFile('../client/index.html', function (error, content) {
      response.end(content);
    });
  }

  if (request.url === '/test') {
    response.end('Ok Funcionou!!');
  }
});

server.listen(3333, () => {
  console.log('Servidor escutando na porta 3333...');
});
