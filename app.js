const app = require('express')();

const host = '127.0.0.1';
const port = 7000;

let currentDate = new Date();
module.exports.date = currentDate;
module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) {welcome = ("good evening " + name);}
    else if (hour > 10) {welcome = ("good afternoon " + name);}
    else {welcome = ("good morning " + name);};
};
module.exports.getMessage("User")


app.get('/home', (req, res) => {
    res.status(200).type('text/plain');
    res.send(welcome);
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
    console.log(`Сервер Робит http://${host}:${port}`);
});