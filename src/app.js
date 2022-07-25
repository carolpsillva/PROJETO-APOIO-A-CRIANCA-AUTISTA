const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const index = require("./routes/index")
const db = require('./database/mongoConfig');
const ProfissionaisRoutes = require('./routes/profissionaisRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/profissionais", ProfissionaisRoutes);
app.use("/", index);

module.exports = app;