const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.status(200).json({
        title: "Reprograma -> Projeto Apoio à Criança Autista - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá,bem vindo,aqui você encontra a primeira versão deste projeto."
    })

})


module.exports = router