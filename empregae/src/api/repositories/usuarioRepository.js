const Usuario = require('../models/Usuario');

const { v4: uuidv4 } = require('uuid');

let usuarios = [];

async function findAll() {
  try {
    return await Usuario.findAll(); // Consulta todos os usuários no banco de dados
  } catch (error) {
    throw new Error('Error fetching all jobs: ' + error.message);
  }
}

async function findById(id) {
  try {
    return await Usuario.findByPk(id); // Busca um usuário pelo ID
  } catch (error) {
    throw new Error('Error fetching job by id: ' + error.message);
  }
}

async function create({ nome, email, senha }) {
  try {
    return await Usuario.create({ nome, email, senha }); // Cria um novo usuário no banco
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
    await usuario.destroy(); // Remove o usuário do banco de dados
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
    await usuario.save(); // Salva as alterações no banco de dados
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