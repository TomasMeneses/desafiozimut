<h1>Desafio Zimut!</h1>
<p>Desafio realizado por: Tomás Meneses</p><br/><br/>

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
    <li>Criação do banco de dados do Mysql para testar o back-end com auxilio do programa POSTMAN</li>
    <li>Pesquisa sobre modularização do projeto e implementação da modularização (MVC)</li>
    <li>Implementação do UUID no back-end com a biblioteca UUID do Node.js</li>
    <li>Implementação dos erros de validação no back-end</li>
    <li>Adaptação e teste da página do front-end para ver se os erros de validação estavam sendo exibidos</li>
    <li>Inclusão do BOOTSTRAP nos erros de validação no front-end</li>
    <li>Testes de cadastros realizados e verificação dos cadastros no próprio Banco de dados mysql </li>
    <li>Melhoras no visual do front-end: Plano de fundo adicionado, melhora no css dos inputs</li>
    <li>implementação de placeholders com exemplo de modelos de inputs em CEP e CPF</li>
    <li>Criadas mensagens de Erro no cadastro,Erro: CPF já cadastrado e Cadastro Realizado</li>
    <li>Testes das mensagens</li>
    <li>Voltei a melhorar a organização do site</li>
    <li>Melhoras no bootstrap</li>
    <li>Adicionei um método de busca por cpf no back-end</li>
    <li>Reformulação do front-end com nova organização dos inputs e novo background</li>
    <li>Correção nos alertas de validação</li>
    <li>Update do readme</li>
    <li>Finalização do projeto</li>

</ol>
<h3>Roteiro Resumido:</h3>
<ol>
    <li>Desenvolvimento do visual básico da página</li>
    <li>Inclusão do bootstrap</li>
    <li>Pesquisa e Desenvolvimento do back-end com Node.js</li>
    <li>Criação do banco de dados</li>
    <li>Implementação do padrão MVC</li>
    <li>Finalização do back-end</li>
    <li>Últimos ajustes no front-end</li>
    <li>Finalização do projeto</li>
</ol>

<h3>Requisitos levantar para o site :</h3>
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
    <li>Caso prefira, no lugar do passo 3 e 4 faça o seguinte: Abra o arquivo scriptBD.sql com algum editor de texto, copie o conteudo e cole no seu Workbench e então execute o código</li>
    <li>Abra a pasta que em que voce clonou o desafio</li>
    <li>Navegue ate a pasta config</li>
    <li>Abra a pasta e com qualquer editor de texto abra o arquivo dbConnection.js e insira na linha Password entre as aspas '' a sua senha do Mysql </li>
    <li>Na linha user insira o seu usuario mysql também entre as aspas ''</li>
    <li>Agora vamos "ligar" o servidor</li>
    <li>Abra o prompt de comando do seu OS (Windows: cmd, Linux: terminal, Macintosh: shell)</li>
    <li>Já no seu prompt de comando navegue até a pasta clonada do github: desafiozimut</li>
    <li>Com o terminal aberto digite o seguinte comando: node app.js</li>
    <li>CASO POSSUA NODEMON poderá executar o seguinte comando: nodemon app.js no lugar do passo anterior</li>
    <li>Verifique que irá aparecer em algum momento: SERVIDOR ON no seu prompt de comando</li>
    <li>Agora va até o seu navegador de Internet e digite na barra de endereços o seguinte endereço: localhost:8080</li>
    <li>O Site deverá abrir</li>
</ol>

<h2>Testando o cadastro</h2>



<h3>É bom saber:</h3>
<ul>
    <li>Utilize o site:https://www.4devs.com.br/gerador_de_cpf para gerar um cpf no padrão válido </li>
    <li>Ao gerar o cpf marque a opção para gera SEM pontuação</li>
    <li><hard>PARA TESTAR O PADRÃO UUID:</hard>Vá até seu workbench e execute os comandos: use zimut; select * from bd;</li>
    <li>Verifique que em todos os cadastros o primeiro campo (id) estará preenchido com o padrão UUID</li>
    <li>O site tem campos obrigatórios marcados com um * vermelho</li>
    <li>O campo CPF deve ser preenchido obedecendo o padrão da receita federal, do contrário o cadastro não será realizado</li>
    <li>O preenchimento incorreto do CPF fará com que, ao tentar realizar o cadastro o sistema exiba um alerta de CPF inválido</li>
    <li>O não preenchimento de algum campo obrigatório não permitirá a conclusão do cadastro</li>
    <li>Os campos erros de validação dos campos que não foram preenchidos serão exibidos para o usuário no inicio da página</li>
    <li>Ao tentar cadastrar um CPF já cadastrado o usuário será redirecionado para uma página de alerta Informando que o cpf já foi cadastrado e oferecendo a opção de voltar para o site de cadastro</li>
</ul>

