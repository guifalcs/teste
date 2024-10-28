import Sequelize from 'sequelize';

const sequelize = new Sequelize("listaTarefas", "ti-1562", "Gui89207332#", {
   host: "localhost",
   dialect: 'mysql',
});

export default sequelize;