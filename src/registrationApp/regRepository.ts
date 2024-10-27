
import client from '../client/prismaClient';

interface UserData {
    email: string
    password: string
    username: string
    role: string
}

async function findUserByEmail(email: string) {
    
    if (!email) {
        throw new Error("Email is required");
    }
    const user = await client.user.findUnique({
        where: {
                email: email,
            }
    });

    if (!user){
        return null
    }
    return user
}


async function createUser(userData: UserData) {
    const user = await client.user.create({
        data: userData,
    });
    return user
}

const regRepository = {
    findUserByEmail:findUserByEmail,
    createUser: createUser
}

export default regRepository