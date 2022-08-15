import { Router } from "express"
import authRouter from "./authRouter.js"
import buyNumberRouter from "./buyNumberRouter.js"
import raffleRouter from "./raffleRouter.js"
import reserveRouter from "./reserveNumber.js"
import testsRouter from "./testRouter.js"


const router = Router()

router.use(authRouter)
router.use(raffleRouter)
router.use(buyNumberRouter)
router.use(reserveRouter)
router.use(testsRouter)

export default router