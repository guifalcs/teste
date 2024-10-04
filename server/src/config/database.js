//Chamado do módulo e configuração do Sequelize
const Sequelize = require('sequelize')
const sequelize = new Sequelize('listaTarefas', 'ti-1562', 'Gui89207332#', {
    host: "localhost",
    dialect: 'mysql'
})

//Conexão com o banco
sequelize.authenticate().then(() => {
    console.log('conectado com sucesso')
}).catch((e) => {
    console.log('falha ao se conectar com o banco: ' + e)
})

module.exports = sequelize