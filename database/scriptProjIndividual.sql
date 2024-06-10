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
dtRegistro datetime);

create table perguntas(
idPergunta int primary key auto_increment,
perguntas varchar (100)  
);

insert into perguntas (perguntas) values
('Em que ano o Corinthians foi fundado?'),
('Quem fez o gol no final do Mundial de 2012?'),
('Qual jogador estrangeiro possui mais gols pelo Corinthians?'),
('Quantos títulos estaduais o Corinthians ganhou?'),
('Quem é o maior artilheiro do Corinthians?'),
('Qual era o técnico do Corinthians no titúlo de Mundial de 2012?'),
('Qual é o mascote do Corinthians?'),
('Qual o jogador do Corinthians que fez os dois gols para o titúlo da copa Libertadores?'),
('Quantos titúlos o Corinthians ganhou da Copa do Brasil?'),
('Quais anos o Corinthians ganhou o Mundial de Clubes?');

create table tipoAlternativa(
idTipo int primary key auto_increment,
tipo varchar(45)
);

insert into tipoAlternativa (tipo) values
('Incorreta'),
('Correta');

create table alternativas(
idResposta int primary key auto_increment,
respostas varchar (100),
fkPerguntas int,
constraint fkPerguntasAlternativas foreign key (fkPerguntas) references perguntas (idPergunta),
fkTipo int,
constraint fkTipoAlternativas foreign key (fkTipo) references tipoAlternativa (idTipo)
);

insert into alternativas (respostas, fkPerguntas, fkTipo) values
('1905', 1, 1),
('1910', 1, 2),
('1912', 1, 1),
('1908', 1, 1),
('Paulinho', 2, 1),
('Emerson Sheik', 2, 1),
('Danilo', 2, 1),
('Paolo Guerrero', 2, 2),
('Romero', 3, 2),
('Paolo Guerrero', 3, 1),
('Carlos Tévez', 3, 1),
('Herrera', 3, 1),
('30', 4, 2),
('29', 4, 1),
('33', 4, 1),
('25', 4, 1),
('Marcelinho Carioca', 5, 1),
('Sócrates', 5, 1),
('Cláudio Christóvam', 5, 2),
('Ronaldo Fenômeno', 5, 1),
('Mano Menezes', 6, 1),
('Vitor Pereira', 6, 1),
('Tite', 6, 2),
('António Oliveira', 6, 1),
('Gavião', 7, 1),
('Gambá', 7, 1),
('Seu Jorge', 7, 1),
('Mosqueteiro', 7, 2),
('Romarinho', 8, 1),
('Emerson Sheik', 8, 2),
('Paulinho', 8, 1),
('Liédson', 8, 1),
('4', 9, 1),
('3', 9, 2),
('2', 9, 1),
('7', 9, 1),
('2012, 1998', 10, 1),
('2012, 2003', 10, 1),
('2012, 2000', 10, 2),
('2012, 2001', 10, 1);

select * from idolos;
select * from usuario;
select * from registro;
select * from perguntas;
select * from alternativas;





