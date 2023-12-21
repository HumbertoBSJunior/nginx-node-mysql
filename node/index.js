const express = require('express')
const app = express()
const dbConn  = require('./db');

const port = 3000

app.get('/', (req, res) => {
    dbConn.query('SELECT * FROM people ORDER BY name', function(err,rows) {
        if(err) {
            res.send('<h1>Erro no bando de dados.</h1>');
        } else {
            var resHtml = '<h1>Full Cycle Rocks!</h1><h2>';

            for (var i = 0; i < rows.length; i++) {
                var people = rows[i];
                resHtml+= '- ' + people.name + '<br>'
            }
            res.send(resHtml + '</h2>');
        }
    });
});

app.get('/:nome', (req, res) => {
    const nome = req.params.nome;
    dbConn.query("INSERT INTO people(name) values('" + nome + "')",function(err,rows) {
        if(err) {
            res.send('<h1>Erro no bando de dados.</h1>');
        } else {
            res.send('<h1>Seja Bem-Vindo '+nome+'!<br>Você foi cadastrado.</h1>');
        }
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
