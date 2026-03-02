import { prisma } from "../config/prismaClient.js"
import bcrypt from "bcrypt"
import createError from 'http-errors'
import { findUserByEmail, createUser, createToken } from "../services/auth.service.js"


export async function registerController(req, res, next) {
    const { username, email, password, role } = req.body
    try {
        const user = await findUserByEmail(email)
        if (user) {
            throw createError(400, "Email already exists")
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await createUser(username, email, hashPassword, role)
        res.status(201).json({
            message: "Register success",
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        })
    } catch (error) {
        next(error)
    }
}


export async function loginController(req, res, next) {
    const { email, password } = req.body
    try {
        const user = await findUserByEmail(email)
        const isMatch = await bcrypt.compare(password, user.password)
        if (!user || !isMatch) {
            throw createError(401, "Invalid credentials")
        }
        const token = await createToken(user)

        res.status(200).json({
            message: "Login success",
            token: token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}