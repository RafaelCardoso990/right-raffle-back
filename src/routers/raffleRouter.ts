import { Router } from "express"
import raffleController from "../controllers/raffleController.js"
import { validateToken } from "../middlewares/validateTokenMiddleware.js"

const raffleRouter = Router()


raffleRouter.post("/raffle",  raffleController.createReaffle)
raffleRouter.use(validateToken)
raffleRouter.get("/raffle/:id",  raffleController.getRafflesById)
raffleRouter.get("/raffle",  raffleController.getAllRaffles)

export default raffleRouter