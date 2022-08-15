import { Request, Response } from "express"

import authService from "../services/authService.js"

async function signUp(req: Request, res: Response){        
    const user = req.body    
    await authService.insertUser(user)
    res.sendStatus(200)
}

async function signIn(req: Request, res: Response) {    
    const user = req.body
    const token = await authService.signIn(user)    
    res.json({ token : token.token, userId: token.userId }).status(200)
}

export default { 
    signUp,
    signIn
}