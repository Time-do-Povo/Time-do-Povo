-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projetoIndividual;
use projetoIndividual;

create table idolos(
idIdolos int primary key auto_increment,
nomes varchar(45));

insert into idolos (nomes) value 
('Sócrates'),
('Marcelinho Carioca'),
('Cássio'),
('Neto'),
('Rivellino'),
('Emerson Sheik');

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(264),
senha varchar(45),
apelido varchar(45),
fkIdolos int,
constraint fkIdoloUsuario foreign key (fkIdolos) references idolos(idIdolos)
);



create table registro(
idRegistro int primary key auto_increment,
acertos int,
fkUsuario int,
constraint fkRegistroUsuario foreign key (fkUsuario) references usuario(idUsuario),
dtRegistro date);

create table respostas(
idResposta int primary key auto_increment,
respostas varchar (100)
);


create table perguntas(
idPergunta int primary key auto_increment,
perguntas varchar (100),
fkRespostas int,
constraint fkPerguntasRespostas foreign key (fkRespostas) references respostas(idResposta)  
);


select * from idolos;
select * from usuario;
select * from registro;
