const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on port 3333');
});

app.get('/',(request, response) => {
    const snippet = `<h1>Hello World</h1>`;
    response.status(200).send(snippet).end();
});

const dogMode = (request, response) => {
    const snippet = `<h3>woof</h3>`;
    response.status(200).send(snippet).end();
}

const catMode = (request, response) => {
    const snippet = `<h3>meow</h3>`;
    response.status(200).send(snippet).end();
}

app.get('/dog', dogMode)