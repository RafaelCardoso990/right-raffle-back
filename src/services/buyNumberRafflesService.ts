import buyNumberRaffleRepository from "../repositories/buyNumberRaffleRepository.js"

async function buyNumberRaffle(numbers: any, userId: number, raffleId: number, amount: number){    
    await buyNumberRaffleRepository.buyNumberRaffle(numbers, userId, raffleId, amount)
}

async function updateStatusNumber(numbers: []){    
    await buyNumberRaffleRepository.updateStatusNumber(numbers)
}

async function getTransactionsByUserId(id: number){
    const raffles = await buyNumberRaffleRepository.getTransactionsByUserId(id)
    
    if(!raffles){
        throw {status: 404, message: "Raffles not found"} 
    }

    return raffles
}
export default {
    buyNumberRaffle, 
    updateStatusNumber,
    getTransactionsByUserId
}