const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.send("API OK");
});

router.post('/execute', (req, res) => {
  console.log("Payload recebido:", req.body);
  res.json({ message: "Atividade executada com sucesso" });
});

module.exports = router;