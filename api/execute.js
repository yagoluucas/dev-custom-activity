const express = require('express');
const rotas = require('../routes/routes.js');

const app = express();

const port = 8000

app.use(express.json());

app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})