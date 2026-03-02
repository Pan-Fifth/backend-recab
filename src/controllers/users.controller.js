import { editUser } from "../services/auth.service.js"
import bcrypt from "bcrypt"

export function getMeController(req, res) {
    const { id, username, email, role } = req.user
    res.status(200).json({ id, username, email, role })
}


export async function editMeController(req, res, next) {
    const { email } = req.user
    const { username, password } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        await editUser(email, username, hashPassword)
        res.status(200).json({ message: "Profile updated" })

    } catch (error) {
        next(error)
    }
    res.send("edit me")
}