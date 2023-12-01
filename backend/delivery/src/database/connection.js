import {MongoClient} from "mongodb"
import "dotenv/config"

const url = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@mongo:27017/`;
const client = new MongoClient(url);

async function NewMongoConnection(){
    await client.connect()
    console.log("Connected successfully to server")
    const db = client.db("Delivery")
    return db
}

export default NewMongoConnection
