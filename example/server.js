import express from "express"
import bodyParser from "express";
import router from './src/middlewares/RouterMiddleware.js'

const server = express()
const port = 3000

server.use(bodyParser.json())
server.use("/", router)

server.listen(port, async () => {
    console.log(`Server ready at http://localhost:${port}`)
})
