import regRepository from './regRepository';


async function authenticateUser(email: string, password: string) {

    const user = await regRepository.findUserByEmail(email)


    if (!user){
        return null
    }



    if (user.password != password) {
        return null
    }

    const userWithoutPassword = {
        username: user.username,
        email: user.email,
        role: user.role
    }
    
  
    return userWithoutPassword;
}



async function registerUser(email: string, password: string, username: string) {
    const userExist = await regRepository.findUserByEmail(email)

    if (userExist) {
        return "User exists"
    }

    const newUser = {
        email: email,
        password: password,
        username: username,
        role: "user"
    };


    const createUser = await regRepository.createUser(newUser)


    return createUser
}


const regService = {
    authenticateUser: authenticateUser,
    registerUser: registerUser
}

export default regService