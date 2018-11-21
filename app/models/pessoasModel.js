module.exports = function(){

    this.getPessoas = function(connection, callback){
        connection.query('SELECT * FROM bd', callback);
    }

   /* this.getPessoas = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2', callback);
    }*/

    this.salvarPessoas = function(pessoa, connection, callback){
        connection.query('insert into teste value(\'asdaa\')', pessoa, callback);
    }

    return this;

}