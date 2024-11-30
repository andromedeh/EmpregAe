const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usuariosRoutes = require('./routes/usuarios');
const vagasRoutes = require('./routes/vagas');
const Usuario = require('./models/Usuario')
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.get('/', (req, res) => { 
    res.send('Servidor está funcionando!'); 
});  


// sincronizar BD
sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch(err => {
    console.error('Unable to synchronize the database:', err);
});

// definindo as rotas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/vagas', vagasRoutes);


const port = 3000;

// Rota para criar um usuário
app.post('/usuarios', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        
        // Cria um novo usuário usando o modelo Usuario
        const novoUsuario = await Usuario.create({
            nome, 
            email, 
            senha
        });

        // Retorna o usuário criado com status 201
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Rota para listar todas os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
