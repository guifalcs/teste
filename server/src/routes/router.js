const express = require('express')
const router = express.Router()
const Task = require('../models/tarefas')

// tarefas = [
//     {
//       titulo: 'Estudar Node JS',
//       descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
//       dataCriacao: '3/10/24'
//     },
//     {
//       titulo: 'Praticar Git',
//       descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
//       dataCriacao: '3/10/24'
//     },
//     {
//       titulo: 'Finalizar projeto de frontend',
//       descricao: "Preciso aprender a criar um servidor backend utilizando Node.js, conectá-lo ao MySQL para gerenciar dados e alimentar o frontend, garantindo que as informações sejam transmitidas de forma eficiente.",
//       dataCriacao: '3/10/24'
//     },
//     {
//       titulo: 'Ler um livro sobre design de software',
//       descricao: "Escolher um livro que aborde padrões de design e boas práticas na construção de software.",
//       dataCriacao: '3/10/24'
//     },
//     {
//       titulo: 'Fazer um curso de APIs REST',
//       descricao: "Encontrar um curso online que ensine a criar e consumir APIs RESTful, aplicando conceitos de segurança.",
//       dataCriacao: '3/10/24'
//     },
//     {
//       titulo: 'Configurar ambiente de desenvolvimento',
//       descricao: "Instalar e configurar o Visual Studio Code, extensões necessárias e ferramentas para desenvolvimento eficiente.",
//       dataCriacao: '3/10/24'
//     }
//   ]

  router.get('/tasks', async (req, res) => {
    try {
      const tarefas = await Task.findAll();
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  });

  router.post('/tasks', async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
      const novaTarefa = await Task.create({ titulo, descricao });
      res.status(201).json(novaTarefa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  });

module.exports = router