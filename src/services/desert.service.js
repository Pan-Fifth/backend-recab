import { prisma } from "../config/prismaClient.js"

export const getDetsert = async () => {
    const deserts = await prisma.dessert.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            category: true
        }
    })
    return deserts

}

export const addDesert = async (name, price, category) => {
    const desert = await prisma.dessert.create({
        data: {
            name, price, category
        }
    })
    return desert
}

export const findDesert = async (id) => {
    const desert = await prisma.dessert.findFirst({
        where: {
            id: id
        }
    })
    return desert
}

export const deleteDesert = async (id) => {
    await prisma.dessert.delete({
        where: { id: id }
    })
}