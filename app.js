const app = require('express')();

const host = '127.0.0.1';
const port = 5000;
const fs = require('fs');


const welcome = require('./welcome');

let currentDate = new Date();
module.exports.date = currentDate;
let welcomeF = function () {
    let hour = currentDate.getHours();
    if (hour > 16) {return welcome.getEveningMessage()}
    else if (hour > 10) {return welcome.getAfternoonMessage()}
    else {return welcome.getMorningMessage()};
};

app.set('view engine', 'hbs');

 app.get('/', function (request, response) {
    response.render('index.hbs', {
        Hwelcome: welcomeF()
    });
    });

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
