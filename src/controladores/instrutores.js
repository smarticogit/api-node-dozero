const { instrutores } = require('../bancoDeDados');

const listarInstrutores = (req, res) => {
    return res.json(instrutores);
};

module.exports = { listarInstrutores };