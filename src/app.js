const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
const ProfissionaisRoutes = require('./routes/profissionaisRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/Profissionais", ProfissionaisRoutes);

app.get('/',(req, res) => {
res.status(200).send({
        title: "Reprograma -> Projeto Apoio à Criança Autista - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá,bem vindo,aqui você encontra a primeira versão deste projeto."
    })

})


module.exports = app;