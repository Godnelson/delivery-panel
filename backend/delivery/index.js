import express from "express";
import multer from "multer";
import NewMongoConnection from "./src/database/connection.js";

const server = express()
const upload = multer()

server.use(express.json())


server.get('/', upload.any(), async (req, res) => {
    await NewMongoConnection()
    return res.json({hello:"world"})
})

server.listen(8080, () => {
        console.log("server is running")
    }
)

