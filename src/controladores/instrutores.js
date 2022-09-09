const { instrutores } = require('../bancoDeDados');
let { identificador } = require('../bancoDeDados');

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

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' });
    }

    const novoInstrutor = {
        id: identificador++,
        nome,
        email,
        status: status ?? true    
    };

    instrutores.push(novoInstrutor);

    return res.status(201).json(novoInstrutor);
};

const editarInstrutor = (req, res) => {
    const { id } = req.params; 
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O Nome é obrigatório' });
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O Email é obrigatório' });
    }

    const instrutor = instrutores.find(instrutor => {
        return instrutor.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!'});
    }
    
    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).send();
};

const editarInstrutorPatch = (req, res) => {
    const { id } = req.params; 
    const { status } = req.body;

    const instrutor = instrutores.find(instrutor => {
        return instrutor.id === Number(id);
    });

    if(!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado!'});
    }

    instrutor.status = status;

    return res.status(204).send();
};

module.exports = { 
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    editarInstrutor,
    editarInstrutorPatch
};