module.exports = function(application){
    application.get('/', function(req,res){
        application.app.controllers.home.formulario(application, req, res);
    });

  
application.post('/', function(req,res){
    application.app.controllers.home.pessoas_salvar(application, req, res);
});
}