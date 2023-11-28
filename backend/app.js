import express from "express";

const server = express()

server.get('/', (req, res) => {
    return res.send("Hello World")
})

server.listen(8080, () => {
        console.log("server is running")
    }
)

