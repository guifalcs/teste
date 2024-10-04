const Tarefa = require('../models/tarefa');

exports.adicionarTarefa = async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
        const novaTarefa = await Tarefa.create({ titulo, descricao });
        res.status(201).json(novaTarefa);
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
        res.status(500).json({ mensagem: 'Erro ao adicionar tarefa' });
    }
};

exports.removerTarefa = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Tarefa.destroy({ where: { id } });
        if (resultado) {
            res.status(204).send();
        } else {
            res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao remover tarefa:', error);
        res.status(500).json({ mensagem: 'Erro ao remover tarefa' });
    }
};
