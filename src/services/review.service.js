import { prisma } from "../config/prismaClient.js"

export const postReview = async (userId, rating, comment, dessertId) => {
    const review = await prisma.review.create({
        data: {
            userId, rating, comment, dessertId
        }
    })
    return review

}

export const getmyReviews = async (id) => {
    const reviews = await prisma.review.findMany({
        where: {
            userId: id
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            dessertId: true
        }
    })
    return reviews
}

export const getReviewById = async (id) => {
    const review = await prisma.review.findUnique({
        where: {
            id: id
        }
    })
    return review
}

export const deleteReview = async (id) => {
    await prisma.review.delete({
        where: {
            id: id
        }
    })
}