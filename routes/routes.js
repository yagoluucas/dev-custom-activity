const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = router;