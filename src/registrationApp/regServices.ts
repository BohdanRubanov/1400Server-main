import regRepository from './regRepository';

interface IUser{
    id: number,
    username: string,
    email: string,
    password: string,
    role: string
}
interface IUserWithouPassword{
    username: string,
    email: string,
    role: string
}


interface IUserError{
    status: 'error',
    message: string
}

interface IUserSuccess{
    status: 'success',
    data: IUser
}
interface IUserSuccessAuthoristion{
    status: 'success',
    data: IUserWithouPassword
}
async function authenticateUser(email: string, password: string): Promise< IUserError | IUserSuccessAuthoristion >  {

    const user = await regRepository.findUserByEmail(email)


    if (!user){
        return {status: 'error', message: 'user not found'};
    }



    if (user.password != password) {
        return {status: 'error', message: 'incorrect password'};
    }

    const userWithoutPassword = {
        username: user.username,
        email: user.email,
        role: user.role
    }
    
  
    return {status: 'success', data: userWithoutPassword};
}



async function registerUser(email: string, password: string, username: string): Promise< IUserError | IUserSuccess >  {
    const userExist = await regRepository.findUserByEmail(email)

    if (userExist) {
        return {status: 'error', message: 'user not found'}
    }

    const newUser = {
        email: email,
        password: password,
        username: username,
        role: "user"
    };


    const createUser = await regRepository.createUser(newUser)

    if (!createUser) {
        return {status: 'error', message: 'create error'}
    } 


    return {status: 'success', data: createUser}
}


const regService = {
    authenticateUser: authenticateUser,
    registerUser: registerUser
}

export default regService