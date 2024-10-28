import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import sequelize from "./db.js"; 
import router from "./routes/router.js";

dotenv.config();

const app = express(); 
const routes = router
const corsMiddleware = cors(); 

app.use(express.json()); 
app.use(corsMiddleware); 
app.use('/api',routes); 

const connectWithRetry = async () => {
  try {
    await sequelize.sync(); 
    console.log('Banco de dados sincronizado!');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
    setTimeout(connectWithRetry, 3000); 
  }
};

connectWithRetry();

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});