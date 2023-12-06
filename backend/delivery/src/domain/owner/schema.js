import mongoose, { Schema } from "mongoose"

const OwnerSchema = new Schema({
    name: { first: String, last: String },
    prof_pic: String,
    cnpj: String
})

const Owner = mongoose.model('Owner', OwnerSchema)
export default Owner
