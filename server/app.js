const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const quiz = require('./quiz');

var usersList = {};

const getAllUsers = () => {
    return JSON.parse(fs.readFileSync('server/users.json'));
}

const findUser = (username) => {
    var usersList = getAllUsers();
    var returnUser = null;
    Array.prototype.forEach.call(usersList, function (user) {
        if (user.username.toUpperCase() === username.toUpperCase()) { //prüfe ob User bereits existiert!!
            return returnUser = user;
        }
    });
    return returnUser;
}

app.use(express.static('www'));
app.use(bodyParser.json());

app.get('/startQuiz/:cat', (req, res) =>{
    res.send(quiz.shuffle());
});

app.post('/login', (req, res) => {
    var user = findUser(req.body.username);
    if (user && req.body.pw === user.pw) {
        return res.send('Dub ist jetzt eingeloggt!');
    }
    res.send(401, 'Falsches PW oder User nicht gefunden!');
});


app.post('/register', (req, res) => {
    
    if (findUser(req.body.username)) {
        return res.send(500, {
            error: true,
            message: 'Der Username existiert bereits'
        });
    }
    var usersList = getAllUsers()
    Array.prototype.push.call(usersList, req.body);
    fs.writeFile('server/users.json', JSON.stringify(usersList), function () {
        res.send({
            error: false
        });
    });
});

app.listen(port, hostname, () => {
    console.log('Server läuft auf Port ' + port);
});







/*
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
*/