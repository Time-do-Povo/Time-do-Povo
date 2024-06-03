var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(score) {
    
    var instrucaoSql = `
        INSERT INTO registro (acertos, dtRegistro) VALUES (${score}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};