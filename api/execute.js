const express = require('express');
const rotas = require('../routes/routes.js');

const app = express();

const port = 8000

app.use(express.json());

app.use('/api', rotas);

module.exports = app;