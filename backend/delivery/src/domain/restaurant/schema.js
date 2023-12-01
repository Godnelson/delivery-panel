import { Schema } from "mongoose"

const RestaurantSchema = new Schema({
    name: String,
    owner: String,
    products: [String],
    banner: String,
    logo: String
})

export default Restaurant = mongoose.model('Restaurant', RestaurantSchema)
