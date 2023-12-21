var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
});

connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Mysql Conectado!');
	}
});

module.exports = connection;