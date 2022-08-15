import { Request, Response } from "express"

import authService from "../services/authService.js"

async function signUp(req: Request, res: Response){ 
    console.log("ta chegando requisição")       
    const user = req.body    
    await authService.insertUser(user)
    res.sendStatus(200)
}

async function signIn(req: Request, res: Response) {    
    const user = req.body
    const token = await authService.signIn(user)
    const response = {token : token.token, userId: token.userId}    
    res.send(response).status(200)
}

export default { 
    signUp,
    signIn
}