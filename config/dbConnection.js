var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',//coloque aqui o usuario do seu mysql
        password: '', //coloque aqui sua senha do mysql
        database: 'zimut'
    });

}

module.exports = function(){
    return connMySQL;
}