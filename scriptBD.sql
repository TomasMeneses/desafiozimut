create database zimut;
use zimut;
create table bd(
	
    id varchar(100) primary key,
    nome varchar(100) not null,
    sobrenome varchar(100) not null,
    dataNascimento date not null,
    cpf varchar(20) unique not null,
    cep varchar(15) not null,
    rua varchar(100) not null,
    bairro varchar (100)not null,
    cidade varchar(50) not null,
    uf varchar(20) not null,
    numero varchar(10),
    complemento varchar(100)
    


);