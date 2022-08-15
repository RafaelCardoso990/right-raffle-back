import { prisma } from "../../config/db.js"
import { CreateUserData } from "../services/authService.js"


async function createUser(createUserData: CreateUserData) {
    const data = {
        name: createUserData.name,
        email: createUserData.email,
        password: createUserData.password
    }
    
    return await prisma.users.create({
        data: data
    })
}

async function findByEmail(email: string) {
    return await prisma.users.findUnique({
        where: {
            email
        }
    })
}

export default { 
    createUser,
    findByEmail
 }