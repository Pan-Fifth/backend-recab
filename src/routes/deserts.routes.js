import express from 'express'
import { deleteDesertsController, getDesertsController, postDesertsController } from '../controllers/deserts.controller.js'


const desertRouter = express.Router()

desertRouter.get("/", getDesertsController)
desertRouter.post("/", postDesertsController)
desertRouter.delete("/:id", deleteDesertsController)



export default desertRouter;