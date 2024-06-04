var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/dash", function (req, res) {
    dashController.dashIdolos(req, res);
})


module.exports = router;