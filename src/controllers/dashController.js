var dashModel = require("../models/dashModel");


function dashIdolos(req, res) {
    dashModel.dashIdolos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function capturarRegistroQuiz(req, res) {
    var idUsuario = req.body.idUsuarioServer;
   

    dashModel.capturarRegistroQuiz(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
}
module.exports = {
    dashIdolos,
    capturarRegistroQuiz
}