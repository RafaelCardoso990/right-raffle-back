import { Router } from "express"
import authRouter from "./authRouter.js"
import buyNumberRouter from "./buyNumberRouter.js"
import raffleRouter from "./raffleRouter.js"
import reserveRouter from "./reserveNumber.js"

const router = Router()

router.use(authRouter)
router.use(raffleRouter)
router.use(buyNumberRouter)
router.use(reserveRouter)


export default router