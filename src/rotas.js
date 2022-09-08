const express = require('express');

const rotas = express();

rotas.get('/', (req, res) => {
    res.send('Teste ok com rotas!')
});

module.exports = rotas;