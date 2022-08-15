import {Request, Response} from 'express'
import buyNumberRafflesService from '../services/buyNumberRafflesService.js'

async function buyNumberByIdRaffle(req: Request, res: Response) {
    
    const numberId = req.body.numberId
    const numbers = req.body.numbers
      
    const {userId} = res.locals.user       
    
    const raffleId = req.params.id
   
    const amount = numbers.length

    await buyNumberRafflesService.updateStatusNumber(numberId)
    
    await buyNumberRafflesService.buyNumberRaffle(numbers, userId, parseInt(raffleId), amount)
    res.sendStatus(200)
}

async function getTransactionsByUserId(req: Request, res: Response) {
    
    const {id} = req.params    

    const raffles = await buyNumberRafflesService.getTransactionsByUserId(parseInt(id))
    
    res.status(200).send(raffles)
}

export default{
    buyNumberByIdRaffle,
    getTransactionsByUserId
}