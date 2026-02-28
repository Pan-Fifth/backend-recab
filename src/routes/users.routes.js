import express from 'express'
import { editMeController, getMeController } from '../controllers/users.controller.js'


const usersRouter = express.Router()

usersRouter.get("/me", getMeController)
usersRouter.put("/me", editMeController)



export default usersRouter;