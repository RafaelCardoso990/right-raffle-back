import { Raffles } from "@prisma/client"
import reaffleRepository from "../repositories/raffleRepository.js"


export type createRaffleType =  Omit<Raffles, "id">

async function insertRaffle(raffle: createRaffleType) {
    const raffles = await reaffleRepository.createRaffle(raffle)
    return raffles
}

async function insertNumbers(numbers: any, rafflesId: number) {
    await reaffleRepository.insertNumbers(numbers, rafflesId)
}

async function getNumbersAvailableByIdRaffleAndAmount(id: number, amount: string) {
    console.log("cheguei no serice")
    const raffles = await reaffleRepository.getNumbersAvailableByIdRaffleAndAmount(id, amount)
    return raffles
}

async function getNumbersAvailableByIdRaffle(id: number) {
    const raffles = await reaffleRepository.getNumbersAvailableByIdRaffle(id)
    return raffles
}

async function getAllRaffles() {
    const raffles = await reaffleRepository.getAllRaffles()
    return raffles
}

async function getRafflesById(id: number) {
    const raffles = await reaffleRepository.getRafflesById(id)
    return raffles
}

export default {
    insertRaffle,
    insertNumbers,
    getNumbersAvailableByIdRaffleAndAmount,    
    getNumbersAvailableByIdRaffle,
    getRafflesById,
    getAllRaffles
}