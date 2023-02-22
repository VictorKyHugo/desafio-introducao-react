import { api } from "../api";

interface IUserCredentials {
    email: string
    password: string
}

const Login = async (credentials: IUserCredentials): Promise<boolean> => {
    const data: any = await api

    if(credentials.email !== data.email) return false
    if(credentials.password !== data.password) return false
    
    return true
}

export default Login