import express from "express"
export const router = express.Router()
import multer from "multer"
import {findAllRestaurants} from "./domain/restaurant/service/findAllRestaurants"
//alguem me ajuda, n ta encontrando o arquivo

router.get(`/`, findAllRestaurants)