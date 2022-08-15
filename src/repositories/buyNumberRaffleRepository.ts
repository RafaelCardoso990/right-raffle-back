import { prisma } from "../../config/db.js"


async function buyNumberRaffle(numbers: any, userId: number, raffleId: number, amount: number) {
    const transaction = await prisma.transactions.create({
        data: {
            usersId: userId,
            rafflesId: raffleId,
            numbers: numbers,
            amount: amount
        }
    })
    
    return transaction
}

async function updateStatusNumber(numbers: []) {
    
    numbers.map(async (numberId) => {
        await prisma.numbers_Raffles.update({
            where:{id: numberId},
            data:{status: "unavailable"}
        })
    } )
}

async function getTransactionsByUserId(id: number){
    
    return await prisma.transactions.findMany({
        where:{usersId: id},
        include:{
            raffles:{
                select: {
                    name: true
                }
            }
        }
    })

  
}

export default { 
    buyNumberRaffle,
    updateStatusNumber,
    getTransactionsByUserId
}