const express = require("express")
const router = require("./routes/router.js")
const app = express()

app.use(express.json())
app.use(router)

const PORT = 8081
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`)
})