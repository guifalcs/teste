const express = require('express')
const router = express.Router()

router.get('/tasks', (req, res) => {
    res.send('Tarefas')
})

router.post('/tasks', (req, res) => {
    res.send('Tarefa adicionada')
})

router.delete('/tasks/:id', (req, res) => {
    res.send('Tarefa removida')
})

module.exports = router