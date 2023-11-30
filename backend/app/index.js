import express from "express";
import { uploadFile } from "./fileUploader/upload.js";
import multer from "multer";

const server = express()
const upload = multer()

server.use(express.json())


server.post('/', upload.any(), (req, res) => {
    console.log(req.files[0])
    uploadFile(req.files[0].buffer, req.files[0].originalname)
    return res.send("Hello World")
})

server.listen(8080, () => {
        console.log("server is running")
    }
)

