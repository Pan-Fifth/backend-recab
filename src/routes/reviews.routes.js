import express from 'express'
import { deleteReviewsController, getReviewsController, postReviewsController } from '../controllers/reviews.controller.js'

const reviewRouter = express.Router()

reviewRouter.post("/", postReviewsController)
reviewRouter.get("/my", getReviewsController)
reviewRouter.delete("/:id", deleteReviewsController)



export default reviewRouter;