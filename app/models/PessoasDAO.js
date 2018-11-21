function PessoasDAO(connection){
    this._connection = connection;
}

PessoasDAO.prototype.getPessoas = function(callback){
    this._connection.query('SELECT * FROM bd', callback);
}

PessoasDAO.prototype.getPessoa = function(cpf, callback){
    this._connection.query(`SELECT * FROM bd WHERE cpf = ${cpf}`, callback); 
}

PessoasDAO.prototype.salvarPessoas = function(pessoa, callback){
    
    this._connection.query('insert into bd set ?', pessoa, callback);
}

module.exports = function(){
    return PessoasDAO;
}