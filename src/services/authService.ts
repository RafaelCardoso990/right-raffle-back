import { Users } from "@prisma/client"
import authRepository from "../repositories/authRepository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export type CreateUserData = Omit<Users,"id">

async function insertUser(createUserData: CreateUserData) {

    const userExists = await authRepository.findByEmail(createUserData.email)
    
    if (userExists) throw { status: 409, message: 'E-mail already registered' }
    
    const SALT = 10
    
    const hashedPassword = await bcrypt.hash(createUserData.password, SALT)

    await authRepository.createUser({...createUserData, password: hashedPassword})
}

async function signIn(loginData: CreateUserData) {

    const user = await authRepository.findByEmail(loginData.email);
    
    if (!user) throw { status: 404, message: 'E-mail not found' }

    const isValid = await bcrypt.compare(loginData.password, user.password)
    if (!isValid) throw {status: 401, message: 'Wrong password' }
    
    const data = { userId: user.id} 
    const key = process.env.JWT_SECRET
    const config = { expiresIn: "1h" }

    const token = jwt.sign(data, key, config)    

    return {token, userId: data.userId}
}


export default { 
    insertUser,
    signIn
}