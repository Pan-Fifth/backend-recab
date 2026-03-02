import jwt from "jsonwebtoken";
import { prisma } from "../config/prismaClient.js"

export const findUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email: email }
    })
    return user;
}

export const findUserById = async (id) => {
    const user = await prisma.user.findFirst({
        where: { id: id }
    })
    return user;
}

export const createUser = async (username, email, hashPassword, role) => {
    const newUser = await prisma.user.create({
        data: {
            username, email, password: hashPassword, role
        }
    })
    return newUser
}

export const editUser = async (email, username, hashPassword) => {
    const result = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            username,
            password: hashPassword
        }
    })
    return result
}

export const createToken = async (user) => {
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1h'
    })

    return token
}