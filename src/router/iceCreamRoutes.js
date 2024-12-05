import express from "express"
import {getAllIceCream, getIceCreamById, createIceCream, updateIceCream, deleteIceCream} from "../controller/icreCreamControllers.js"
import validator from "../middleware/validatorIceCream.js"

const iceCreamRoutes = express.Router()

// /api/icecream
iceCreamRoutes.get("/", getAllIceCream)
iceCreamRoutes.get("/:id", getIceCreamById)
iceCreamRoutes.post("/", validator.validateCreate, createIceCream)
iceCreamRoutes.patch("/:id",validator.validateUpdate, updateIceCream)
iceCreamRoutes.delete("/:id", deleteIceCream)


export {iceCreamRoutes}