import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers
    const token = authorization?.replace("Bearer ", "").trim()
    const secretyKei = process.env.JWT_SECRET

    if (!token) return res.sendStatus(401)

    try {
        const user = jwt.verify(token, secretyKei) as any
        if(!user) return res.sendStatus(401)
        res.locals.user = user
        next()
    } catch (error) {
        throw { status: 401, message: 'Token expired' }              
    }
}
