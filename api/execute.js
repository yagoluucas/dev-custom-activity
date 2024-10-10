const express = require('express');
const rotas = require('../routes/routes.js');
const cors = require('cors');   

const app = express();
app.use(cors());

app.use(express.json());
app.use('/', rotas);

module.exports = app;