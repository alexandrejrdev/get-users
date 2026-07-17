/* import http from 'node:http';

const users = [{
    nome: 'Alexandre Junior',
    age: 39,
    status: true
}, {
    nome: 'Juliana Andrade',
    age: 38,
    status: true
}, {
    nome: 'Hanna Kely',
    age: 15,
    status: true
}];

const usersJSON = JSON.stringify(users);

http.createServer((request, response) => {

    response.end(usersJSON);

}).listen(3000); */

import http from 'node:http';

const users = [{
    nome: 'Alexandre Junior',
    age: 39,
    status: true
}, {
    nome: 'Juliana Andrade',
    age: 38,
    status: true
}, {
    nome: 'Hanna Kely',
    age: 15,
    status: true
}];

http.createServer((request, response) => {

    if (request.url === '/users') {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(users));
    } else {
        response.writeHead(404, { 'content-type': 'application/json' });
        response.end(JSON.stringify({ message: 'Página não Encontrada.'}));
    }
    

}).listen(3000);