var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(score, idUsuario) {
    
    var instrucaoSql = `
        INSERT INTO registro (acertos, fkUsuario, dtRegistro) VALUES (${score}, ${idUsuario} , now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};