import express from 'express'
import { deleteReviewsController, getReviewsController, postReviewsController } from '../controllers/reviews.controller.js'
import authCheck from '../middlewares/authen.middleware.js'

const reviewRouter = express.Router()

reviewRouter.post("/", authCheck, postReviewsController)
reviewRouter.get("/my", authCheck, getReviewsController)
reviewRouter.delete("/:id", authCheck, deleteReviewsController)



export default reviewRouter;