import {prisma} from "../../config/db.js"

async function reset () {
    await prisma.$executeRaw`
    ALTER SEQUENCE users_id_seq RESTART WITH 1
`
    await prisma.$executeRaw`
        TRUNCATE TABLE users
    `

};

// async function seed () {
//   await prisma.recommendation.create({ data: recommendationsFactory.createRecommendation() })
// };

const testsRepository = {
  reset,
//   seed
}

export default testsRepository