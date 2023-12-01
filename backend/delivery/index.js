import express from "express";
import multer from "multer";
import NewMongoConnection from "./src/database/connection.js";
import { Owner } from "./src/domain/owner/schema.js";

const server = express()
const upload = multer()

server.use(express.json())
server.use(upload.any())

server.get('/', async (req, res) => {
    console.log(new Owner())
    return res.json({ hello: "world" })
})

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

