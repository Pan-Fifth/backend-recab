import express from 'express'
import { editMeController, getMeController } from '../controllers/users.controller.js'
import authCheck from '../middlewares/authen.middleware.js'


const usersRouter = express.Router()

usersRouter.get("/me", authCheck, getMeController)
usersRouter.put("/me", authCheck, editMeController)



export default usersRouter;