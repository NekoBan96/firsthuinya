const express = require('express');
const app = express()

const host = '127.0.0.1';
const port = 5000;
const fs = require('fs');

app.set('view engine', 'hbs');

app.use('/static', express.static('./public'));

app.get('/', function (request, response) {
    response.render('index.hbs')})

app.get('/about', (req, res) => {
    res.status(200).type('text/plain');
    res.send('About page');
});

app.post('/api/admin', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create admin request');
});

app.post('/api/user', (req, res) => {
    res.status(200).type('text/plain');
    res.send('Create user request');
});

app.use((req, res, next) => {
    res.status(404).type('text/plain');
    res.send('Not found');
});

app.listen(port, host, function () {
    console.log(`server listin: http://${host}:${port}`);
});
