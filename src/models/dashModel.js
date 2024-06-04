var database = require("../database/config");

function dashIdolos() {
    console.log("ACESSEI AS PERGUNTAS  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    idolos.nomes, 
    COUNT(usuario.idUsuario) AS qtdUsuario,
    (SELECT COUNT(*) FROM usuario) AS totalUsuario
FROM 
    idolos
LEFT JOIN 
    usuario ON idolos.idIdolos = usuario.fkIdolos
GROUP BY 
    idolos.idIdolos, idolos.nomes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    dashIdolos
}