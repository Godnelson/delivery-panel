import Restaurant from "../schema.js"

export const findAllRestaurants = async (req, res) => {
  try {
    return Restaurant.find()
  } catch (e) {
    res.send(e)
  }
}
