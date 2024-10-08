const express = require('express');
const router = express.Router();

// Rota de teste para a raiz
router.get('/', (req, res) => {
  res.send('Aplicação está rodando');
});

router.post('/', (req, res) => {
  res.send({"mensagem recebida" : req.body});
})

router.post('/teste', (req, res) => {
  res.send({"testando": 1});
})

// Outras rotas...
module.exports = router;