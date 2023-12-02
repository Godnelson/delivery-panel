const express = require("express")
const router = express.Router()
const multer = require("multer")
const {findAllRestaurants} = require(`./domain/restaurant/service/findAllRestaurants`)

router.get(`/`, findAllRestaurants)