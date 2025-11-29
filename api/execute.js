const express = require('express');
const cors = require('cors');
const rotas = require('../routes/routes.js');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', rotas);

// Vercel exige exportar a função
module.exports = serverless(app);