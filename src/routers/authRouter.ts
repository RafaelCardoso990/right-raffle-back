import { Router } from "express"
import  authController  from "../controllers/authController.js"
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js"
import { signUpSchema, signInSchema } from "../schema/userSchema.js"

const authRouter = Router()

authRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema),authController.signUp)
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema),authController.signIn)

export default authRouter