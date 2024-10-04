const express = require("express")
const router = require("./routes/router")
const app = express()

app.use(router)

app.listen(8081, () => {console.log('Servidor rodando!')})