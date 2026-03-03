import { findDesert } from "../services/desert.service.js"
import { deleteReview, getmyReviews, getReviewById, postReview } from "../services/review.service.js"
import createError from 'http-errors'

export async function postReviewsController(req, res, next) {
    try {
        console.log(req.user)
        const userId = req.user.id
        const { rating, comment, dessertId } = req.body
        const desert = await findDesert(dessertId)
        if (!desert) {
            throw createError(400, "Dessert not found")
        }
        const review = await postReview(userId, rating, comment, dessertId)
        res.status(201).json({
            message: "Review created",
            review: {
                id: review.id,
                rating: review.rating,
                comment: review.comment,
                userId: review.userId,
                dessertId: review.dessertId
            }
        })
    } catch (error) {
        next(error)
    }
}
export async function getReviewsController(req, res, next) {
    try {
        const { id } = req.user
        const reviews = await getmyReviews(id)
        res.status(200).json(reviews)
    } catch (error) {
        next(error)
    }
}
export async function deleteReviewsController(req, res, next) {
    try {
        const id = Number(req.params.id)
        const review = await getReviewById(id)
        if (!review) {
            throw createError(400, "Review does not exist")
        }
        const userId = req.user.id
        if (userId !== review.userId) {
            throw createError(403, "Forbidden: You can delete only your review")
        }
        await deleteReview(review.id)
        res.status(200).json({
            message: "Review deleted"
        })
    } catch (error) {
        next(error)
    }
}