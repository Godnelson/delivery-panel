import Restaurant from "../schema"

export const findAllRestaurants = async (req, res) => {
  try {
    res.send("all restaurants")
  } catch (error) {
    res.send("error")
  }
}
