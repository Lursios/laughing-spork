import {PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

let prisma:PrismaClient; // this creates the prisma variable with the correct type

if (process.env.NODE_ENV === 'production') { // if production then the url will be updated with the prisma url
    prisma = global.prisma || new PrismaClient({
        datasources: {
            db:{
                url:process.env.POSTGRES_PRISMA_URL,
            }
        }
    })
} else {
    prisma = global.prisma || new PrismaClient(); // if it's not production ( development ) then it will use the local which is the default setup
}

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma;