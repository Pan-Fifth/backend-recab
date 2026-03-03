import { addDesert, deleteDesert, findDesert, getDetsert } from "../services/desert.service.js"
import createError from 'http-errors'

export async function getDesertsController(req, res, next) {
    try {
        const deserts = await getDetsert()

        res.status(200).json({ deserts })

    } catch (error) {
        next(error)
    }
}
export async function postDesertsController(req, res, next) {
    try {
        const { role } = req.user
        if (role !== "ADMIN") {
            throw createError(403, "Forbidden: Admin only")
        }
        const { name, price, category } = req.body
        const newDesert = await addDesert(name, price, category)
        res.status(201).json({
            message: "Desert created",
            desert: {
                id: newDesert.id,
                name: newDesert.name,
                price: newDesert.price,
                category: newDesert.category
            }
        })

    } catch (error) {
        next(error)
    }
}
export async function deleteDesertsController(req, res, next) {
    try {
        const { role } = req.user
        if (role !== "ADMIN") {
            throw createError(403, "Forbidden: Admin only")
        }
        const id = Number(req.params.id)
        const desert = await findDesert(id)
        if (!desert) {
            throw createError(404, "Dessert not found")
        }
        await deleteDesert(id)
        res.status(200).json({ message: "Desert deleted" })
    } catch (error) {
        next(error)
    }

}