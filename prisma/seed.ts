import { prisma } from '../config/db.js';
import raffleService from '../src/services/reaffleService.js';

async function main() {   

    const raffle = {        
            name: "House worth $ 550.000",
            numbers: 2000,
            image: "https://3.bp.blogspot.com/-FRTxUP7MjiY/XBHQ7IzknEI/AAAAAAAAJiE/1GlkcjIYSEcHYZOZI3Wv0rnDRHArFqOHgCLcBGAs/s1600/Casa.jpg",
            createdAt: new Date()              
        }           
    
    await raffleService.insertRaffle(raffle)
    await raffleService.insertNumbers(raffle.numbers, 1)    
    
}

main().catch((e) => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});