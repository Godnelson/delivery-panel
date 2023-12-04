import express from "express"
export const router = express.Router()
import {findAllRestaurants} from "./domain/restaurant/service/findAllRestaurants.js"

router.get(`/`, findAllRestaurants)