import client from '../client/prismaClient'
import { Prisma } from '@prisma/client'
import { errors, IErrors } from '../config/errorCodes'

async function getAllTags() {
    try {
        const tags = await client.tag.findMany({})
        return tags
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
        throw error;
    }
}



const tagRepository = {
    getAllTags: getAllTags
}
export default tagRepository