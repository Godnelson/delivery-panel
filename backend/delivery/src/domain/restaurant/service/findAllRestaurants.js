const Restaurant = require(`../schema`)

const findAllRestaurants = async (req, res) => {
  res.send("all restaurants")
}

module.exports = {
  findAllRestaurants,
}
