import {Request, Response} from 'express'
import raffleService from '../services/reaffleService.js'


async function createReaffle(req: Request, res: Response) {
    const data = req.body
    const raffle = await raffleService.insertRaffle(data)
 
    res.locals.raffle = raffle

    await raffleService.insertNumbers(data.numbers, raffle.id)
    res.sendStatus(200)
}


async function getAllRaffles(req: Request, res: Response) {   
    const raffle = await raffleService.getAllRaffles()
    res.status(200).send(raffle)
}

async function getRafflesById(req: Request, res: Response) {      
    const id = req.params
    const amount = req.query.amount
    if(amount){        
        const raffle = await raffleService.getNumbersAvailableByIdRaffleAndAmount(parseInt(id.id), amount.toLocaleString())
        return res.status(200).send(raffle)
    }
    const raffle = await raffleService.getRafflesById(parseInt(id.id))
    res.status(200).send(raffle)
}

export default {
    createReaffle,
    getRafflesById,
    getAllRaffles    
}