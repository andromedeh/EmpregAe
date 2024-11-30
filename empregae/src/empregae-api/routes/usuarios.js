const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

router.get('/', (req, res) => { // pegar todos usuarios
    res.json({ usuarios: usuarioRepository.findAll() });
});

router.get('/:id', (req, res) => { // pegar usuario por id
    const user = usuarioRepository.findById(req.params.id);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


router.post('/', (req, res) => { // criar usuario
  const user = usuarioRepository.create(req.body);
  res.json({ user });
});


router.put('/:id', (req, res) => { // atualizar usuario
    const user = usuarioRepository.update(req.params.id, req.body);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

router.delete('/:id', (req, res) => { // deletar usuario
    const user = usuarioRepository.remove(req.params.id);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

module.exports = router;
