const express = require('express');
const router = express.Router();
const vagaRepository = require('../repositories/vagaRepository');

router.get('/', async (req, res) => { // pegar todas as vagas
  const vagas = await vagaRepository.findAll();
  res.json(vagas);
});


router.get('/:id', async (req, res) => { // pegar vaga por id
  const { id } = req.params;
  const vaga = await vagaRepository.findById(id);
  if (vaga) {
    res.json(vaga);
  } else {
    res.status(404).json({ message: 'Vaga não encontrada' });
  }
});

router.post('/', async (req, res) => { // criar vaga
  const { titulo, descricao, dataCadastro, telefone, status, empresa } = req.body;
  const vaga = await vagaRepository.create({ titulo, descricao, dataCadastro, telefone, status, empresa });
  res.status(201).json(vaga);
});


router.put('/:id', async (req, res) => { //atualizar vaga
  const { id } = req.params;
  const { titulo, descricao, dataCadastro, telefone, status, empresa } = req.body;
  const vaga = await vagaRepository.update(id, { titulo, descricao, dataCadastro, telefone, status, empresa });
  if (vaga) {
    res.json(vaga);
  } else {
    res.status(404).json({ message: 'Vaga não encontrada' });
  }
});

router.delete('/:id', async (req, res) => { // deletar vaga
  const { id } = req.params;
  const deleted = await vagaRepository.remove(id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Vaga não encontrada' });
  }
});

module.exports = router;