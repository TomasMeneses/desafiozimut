module.exports = function(){

    this.getPessoas = function(connection, callback){
        connection.query('SELECT * FROM bd', callback);
    }

   

    this.salvarPessoas = function(pessoa, connection, callback){
        connection.query('insert into bd set ?', pessoa, callback);
    }

    return this;

}