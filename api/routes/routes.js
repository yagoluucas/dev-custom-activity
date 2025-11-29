const express = require('express');
const router = express.Router();

// Rota padrão para testar
router.get('/', (req, res) => {
    res.send("Aplicação está rodando");
});

// Rota que o Journey Builder vai chamar
router.post('/execute', (req, res) => {

    console.log("Payload recebido da Journey:");
    console.log(JSON.stringify(req.body, null, 2));

    // Aqui você faz sua lógica:
    // - validações
    // - chamadas externas
    // - gravações
    // - etc

    // Resposta que o SFMC exige
    res.json({
        status: "ok",
        message: "Execução bem sucedida"
    });
});

module.exports = router;