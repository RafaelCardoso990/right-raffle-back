import { Router } from "express"
import buyNumberRaffleController from "../controllers/buyNumberRaffleController.js"
import  {validateToken}  from "../middlewares/validateTokenMiddleware.js"

const buyNumberRouter = Router()

buyNumberRouter.post("/buy/raffle/:id", validateToken, buyNumberRaffleController.buyNumberByIdRaffle)
buyNumberRouter.get("/transactions/:id", validateToken, buyNumberRaffleController.getTransactionsByUserId)

export default buyNumberRouter;