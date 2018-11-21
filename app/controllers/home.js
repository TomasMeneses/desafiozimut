const uuidv1 = require ( 'uuid/v1') ;

module.exports.formulario = function(appliction, req, res){     //tem que passar os json's validacao e pessoa
    res.render('home/formulario',{validacao: {}, pessoa:{} }); //mudei de index para o meu formulario 
}
// aqui é pra onde estou mudando para o formulario da zimut
module.exports.pessoas_salvar = function(application, req, res){
    var pessoa = {id: uuidv1(),  ...req.body};

    //trocar esses alertas
    //falta ID
   req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('dataNascimento', 'Data de nascimento é obrigatório').notEmpty();
    req.assert('cpf', 'CPF é obrigatório').notEmpty();
    req.assert('cep', 'CEP é obrigatório')//.len(10, 100);
    req.assert('rua', 'Endereço é Obrigatório').notEmpty();
    req.assert('bairro', 'Bairro é obrigatório').notEmpty();
    req.assert('cidade', 'Cidade é obrigatório').notEmpty();
    req.assert('uf', 'Estado é obrigatório').notEmpty();


    var erros = req.validationErrors();
    if(erros){
        res.render('home/formulario', {validacao: erros,  pessoa: pessoa}); 
        return;
    }

    var connection = application.config.dbConnection();
    var pessoasModel = new application.app.models.PessoasDAO(connection);

    pessoasModel.getPessoa(pessoa.cpf, function(error, result){
        console.log(error)
       // console.log(result)
       /* if(result != null){
            res.status(500).send('<h1>CPF já cadastrado</h1></br><a href="http://localhost:8080">Clique aqui</a> e volte para o cadastro Zimut!');
        }*/
       
    });

    pessoasModel.salvarPessoas(pessoa, function(error, result){
        console.log(error)
        //console.log(result)
        if(error != null){
            res.status(500).send('<h1>CPF já cadastrado!</h1></br><a href="http://localhost:8080">Clique aqui</a> e volte para o cadastro Zimut!');
        }else{
            res.status(500).send('<h1>Cadastro Realizado!</h1></br><a href="http://localhost:8080">Clique aqui</a> e volte para o cadastro Zimut!');
        }
            //  res.redirect('/noticias'); //trocar pra onde redirecionar
    });
}