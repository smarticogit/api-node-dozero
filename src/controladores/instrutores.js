const { instrutores } = require('../bancoDeDados');

const listarInstrutores = (req, res) => {
    return res.json(instrutores);
};

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find(instrutor => {
        return instrutor.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!'});
    }
    return res.status(200).json(instrutor);
};

module.exports = { 
    listarInstrutores,
    obterInstrutor
};