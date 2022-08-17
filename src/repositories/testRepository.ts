import { prisma } from '../../config/db.js'
import raffleService from '../services/reaffleService.js'


async function reset () {
    await prisma.$executeRaw`
            ALTER SEQUENCE users_id_seq RESTART WITH 1
        `
    await prisma.$executeRaw`
            TRUNCATE TABLE users CASCADE
        `

    await prisma.$executeRaw`
    ALTER SEQUENCE numbers_raffles_id_seq RESTART WITH 1
        `

    await prisma.$executeRaw`
    TRUNCATE TABLE numbers_raffles CASCADE
        `

    await prisma.$executeRaw`
    ALTER SEQUENCE raffles_id_seq RESTART WITH 1
        `

    await prisma.$executeRaw`
    TRUNCATE TABLE raffles CASCADE
        `     
};

async function seed () {
    const raffle = {        
        name: "House worth $ 550.000",
        numbers: 2000,
        image: "https://3.bp.blogspot.com/-FRTxUP7MjiY/XBHQ7IzknEI/AAAAAAAAJiE/1GlkcjIYSEcHYZOZI3Wv0rnDRHArFqOHgCLcBGAs/s1600/Casa.jpg",
        createdAt: new Date()              
    }   
    await raffleService.insertRaffle(raffle)
    await raffleService.insertNumbers(raffle.numbers, 1)  
};

const testsRepository = {
  reset,
  seed
}

export default testsRepository