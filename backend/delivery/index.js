import express from "express";
import multer from "multer";
import NewMongoConnection from "./src/database/connection.js";

const server = express()
const upload = multer()

server.use(express.json())
server.use(upload.any())

server.listen(8080, async () => {
    const dbConnectionResult = await NewMongoConnection()
    if (dbConnectionResult.success) {
        console.log("Database connected")
    } else {
        console.error("Can't connect on database \n", { error: dbConnectionResult.error })
    }
    console.log("server is running")
}
)

