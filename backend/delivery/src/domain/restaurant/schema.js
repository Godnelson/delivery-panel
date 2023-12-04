import { Schema } from "mongoose"
import mongoose from "mongoose"

const RestaurantSchema = new Schema({
    name: String,
    owner: String,
    products: [String],
    banner: String,
    logo: String
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

export default Restaurant
