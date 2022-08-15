import { prisma } from "../../config/db.js";
import { createRaffleType } from "../services/reaffleService.js";


async function createRaffle(raffle: createRaffleType){
    
    const raffles = await prisma.raffles.create({
        data: {name: raffle.name,
        image: raffle.image}
    })
    return raffles
}

async function insertNumbers(number: any, rafflesId: number) {         
    const data = Array.from({length: number}).map(() => ({
        rafflesId: rafflesId,        
        numbers: `${number--}`,
        status: "available"
    }))

    await prisma.numbers_Raffles.createMany({
        data: data
    })
}

async function getNumbersAvailableByIdRaffleAndAmount(id: number, amount: string) {
    
    const raffles = await prisma.numbers_Raffles.findMany({
        where: {
            status: "available",
            rafflesId: id
        } , take: parseInt(amount)
    })
   return raffles
}

async function getNumbersAvailableByIdRaffle(id: number) {
    const raffles = await prisma.numbers_Raffles.findMany({
        where: {            
            rafflesId: id
        }
    })
   return raffles
}

async function getAllRaffles() {
    const raffles = await prisma.raffles.findMany({
        include: {Numbers_Raffles : true}
    })
    return raffles
}

async function getRafflesById(id: number) {    
    const raffles = await prisma.raffles.findFirst({
        where: {id: id,},
        include: {Numbers_Raffles:{
            where: {status: "available"},
        } }
    })
    return raffles
}

export default {
    createRaffle,
    insertNumbers,
    getNumbersAvailableByIdRaffleAndAmount,
    getNumbersAvailableByIdRaffle,
    getRafflesById,
    getAllRaffles
}