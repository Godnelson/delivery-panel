import express from "express";
import { uploadFile } from "./fileManager/upload.js";
import multer from "multer";

const server = express()
const upload = multer()

server.use(express.json())


server.get('/', upload.any(), (req, res) => {
    return res.send("Hello World")
})

server.listen(8080, () => {
        console.log("server is running")
    }
)

