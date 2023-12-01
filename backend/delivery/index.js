import express from "express";
import multer from "multer";

const server = express()
const upload = multer()

server.use(express.json())


server.get('/', upload.any(), (req, res) => {
    return res.json({hello:"world"})
})

server.listen(8080, () => {
        console.log("server is running")
    }
)

