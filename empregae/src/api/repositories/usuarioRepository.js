const Usuario = require('../models/Usuario');

const { v4: uuidv4 } = require('uuid');

let usuarios = [];

async function findAll() {
  try {
    return await Usuario.findAll();
  } catch (error) {
    throw new Error('Error fetching all jobs: ' + error.message);
  }
}

async function findById(id) {
  try {
    return await Usuario.findByPk(id);
  } catch (error) {
    throw new Error('Error fetching job by id: ' + error.message);
  }
}

async function create({ nome, email, senha }) {
  try {
    return await Usuario.create({ nome, email, senha });
  } catch (error) {
    throw new Error('Error creating job: ' + error.message);
  }
}

async function remove(id) {
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return false;
    }
    await usuario.destroy();
    return true;
  } catch (error) {
    throw new Error('Error deleting job: ' + error.message);
  }
}

async function update(id, { nome, email, senha }) {
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return null;
    }
    usuario.nome = nome;
    usuario.email = email;
    usuario.senha = senha;
    await usuario.save();
    return usuario;
  } catch (error) {
    throw new Error('Error updating job: ' + error.message);
  }
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};