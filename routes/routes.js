const express = require('express');
const router = express.Router();

// Rota de teste para a raiz
router.get('/', (req, res) => {
  res.send('Aplicação está rodando');
});

// Outras rotas...
module.exports = router;