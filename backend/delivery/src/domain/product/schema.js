import mongoose, { Schema } from "mongoose"

const ProductSchema = new Schema({
    name: String,
    restaurant: String,
    photos: [String]
})

export default Product = mongoose.model("Product", ProductSchema)
