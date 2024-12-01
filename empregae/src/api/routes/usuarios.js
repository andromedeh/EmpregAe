const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

router.get('/', async (req, res) => { // pegar todos usuarios
    const usuarios = await usuarioRepository.findAll();
    res.json(usuarios);
});

router.get('/:id', async (req, res) => { // pegar usuario por id
    const { id } = req.params;
    const usuario = await usuarioRepository.findById(id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

router.post('/', async (req, res) => { // criar usuario
    const { nome, email, senha } = req.body;
    const usuario = await usuarioRepository.create({ nome, email, senha });
    res.status(201).json(usuario);
});

router.put('/:id', async (req, res) => { // atualizar usuario
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const usuario = await usuarioRepository.update(id, { nome, email, senha });
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

router.delete('/:id', async (req, res) => { // deletar usuario
    const { id } = req.params;
    const deleted = await usuarioRepository.remove(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

module.exports = router;
