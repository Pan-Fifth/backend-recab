import express from 'express'
import { deleteDesertsController, getDesertsController, postDesertsController } from '../controllers/deserts.controller.js'
import authCheck from '../middlewares/authen.middleware.js'


const desertRouter = express.Router()

desertRouter.get("/", authCheck, getDesertsController)
desertRouter.post("/", authCheck, postDesertsController)
desertRouter.delete("/:id", authCheck, deleteDesertsController)



export default desertRouter;