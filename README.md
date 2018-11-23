<h1>Desafio Zimut!</h1>
<p>Desafio realizado por: Tomas Meneses</p><br/><br/>

<h3>Tecnologias Utilizadas:</h3>
<ul>
    <li>MySQL</li>
    <li>Node.js</li>
    <li>Bootstrap 4.0</li>
</ul><br><br>

<h3>Passo a Passo da criação do site:</h3>
<ol>
    <li>Criação do corpo HTML do site de cadastro</li>
    <li>Pesquisa sobre API de verificação de CEP</li>
    <li>Implementação da API vista no site viaCEP: https://viacep.com.br/exemplo/javascript/</li>
    <li>Adaptação da API para funcionar não com um input text no estado mas sim com um combobox</li>
    <li>Implementação do Bootstrap e teste de responsividade da página</li>
    <li>Implementação do código para verificar validade do CPF</li>
    <li>Inicialização da criação do backend com node.js</li>
    <li>Tentativa da implementação do node.js com Restify</li>
    <li>Dificuldade com a biblioteca do Restify e mudança para Express</li>
    <li>Criação do banco de dados para testes com o programa POSTMAN</li>
    <li>Pesquisa sobre modularização do projeto e implementação da modularização</li>
    <li>Implementação do UUID no back-end com a require do node.js</li>
    <li>Implementação dos erros de validação no back-end</li>
    <li>Adaptação e teste da página do front-end para ver se os erros de validação estavam sendo exibidos</li>
    <li>Inclusão do BOOTSTRAP nos erros de validação no front-end</li>
    <li>Testes de cadastros realizados e verificação dos cadastros no próprio Banco de dados mysql </li>
    <li>Melhoras no visual do front-end: Plano de fundo adicionado, melhora no css dos inputs</li>
    <li>implementação de placeholders com exemplo de modelos de inputs em CEP e CPF</li>
    <li>Criadas mensagens de Erro no cadastro,Erro: CPF já cadastrado e Cadastro Realizado</li>
    <li>Testes das mensagens</li>
    <li>Finalização do Site</li>

</ol>

<h3>Requisitos levantar o site :</h3>
<ul>
    <li>MySQL Server</li>
    <li>MySQL Workbench</li>
    <li>XAMPP</li>
    <li>Node.js</li>
    <li>Qualquer navegador ex: Google Chrome, Opera, Safari, Edge, IE...</li>
    
</ul><br><br>
<h3>Requisitos desejáveis:</h3>
<ul>
    <li>Nodemon</li>
</ul>

<h3>Preparando o ambiente:</h3>
<ol>
    <li>Clone o repositório do git para uma pasta de sua preferência no seu PC</li>
    <li>Abra seu XAMPP e ative o MySQL clicando em Start</li>
    <li>Abra seu Workbench e clique em File>Open Script , selecione o arquivo scriptBD.sql e abra-o </li>
    <li>Execute o script e verifique se o Banco de dados de nome zimut com a table bd foi criado</li>
    <li>Abra a pasta do repositorio do desafio</li>
    <li>Navegue ate a pasta config</li>
    <li>Abra a pasta e com qualquer editor de texto abra o arquivo dbConnection.js e insira na linha Password entre as aspas '' a sua senha do Mysql </li>
    <li>Na linha user insira o seu usuario mysql</li>
    <li>clique com o botão direito em algum local dentro da pasta</li>
    <li>Procure a opção que abra o terminal de seu OS (Windows: cmd, Linux: terminal, Macintosh: shell)</li>
    <li>Com o terminal aberto digite o seguinte comando: node app.js</li>
    <li>CASO POSSUA NODEMON poderá executar o seguinte comando: nodemon app.js</li>
    <li>Verifique que irá aparecer em algum momento: SERVIDOR ON</li>
    <li>Agora va até o seu navegador de Internet e digite na barra de endereços o seguinte endereço: localhost:8080</li>
    <li>O Site deverá abrir</li>
</ol>
