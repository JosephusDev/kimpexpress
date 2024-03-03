import express from "express"
import cors from "cors"
import veiculosRoutes from "./routes/veiculos.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", veiculosRoutes)

app.listen(8800)
console.log("Servidor rodando em http://localhost:8800/")