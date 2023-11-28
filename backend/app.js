import { Express } from "express";

const server = Express()

server.get('/', (req, res) => {
    return res.send("Hello World")
})

server.listen(8080)
.then(console.log("server is running"))
.catch(console.error(e))
