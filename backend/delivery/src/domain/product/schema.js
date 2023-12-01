import mongoose, { Schema } from "mongoose"

const ProductSchema = new Schema({
    name: String,
    restaurant: String,
    photos: [String]
})

const Product = mongoose.model("Product", ProductSchema)

export default Product
