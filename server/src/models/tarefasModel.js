const Sequelize = require('sequelize')
const sequelize = Sequelize()

const Tarefa = sequelize.define('Tarefa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
}, {
    tableName: 'tarefas', 
    timestamps: false, 
});

sequelize.sync()
    .then(() => {
        console.log('Tabela Tarefas criada com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao criar a tabela:', error);
    });

module.exports = Tarefa;