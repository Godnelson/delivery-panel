import "dotenv/config"
import mongoose from "mongoose";



async function NewMongoConnection(){
    try{
        const url = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@mongo:27017/`;
        await mongoose.connect(url);
        return {success: true}
    }catch(e){
        return {success:false, error: e}
    }
}

export default NewMongoConnection
