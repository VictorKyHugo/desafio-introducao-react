import { 
    Center,
    Box,
    Input,
    Heading
} from '@chakra-ui/react';
import { DioButton } from '../components/DioButton';
import Login from '../services/login'
import { Card } from '../components/Card'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {

    interface IUserCredentials {
        email: string
        password: string
    }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn, isLoggedIn,  } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn){
            navigate('/conta/1')
        }
        console.log('to aqui')
    }, [navigate, isLoggedIn])

    const validateUser = async ({email, password}: IUserCredentials) => {
        const loggedIn = await Login({ email, password })

        if(!loggedIn){
            return window.alert('Email ou Senha Invalidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate('/conta/1')
        
    }

    return (
        <Box padding='25px'>
            <Card>
            <Center>
                <Heading color='#292929' as='h1' size='md' marginBottom='10px'>Faça o login</Heading>
            </Center>
            <Input marginBottom='3px' value={email} onChange={(e) => { setEmail(e.target.value)}} placeholder='Email' />
            <Input marginBottom='3px' value={password} onChange={(e) => { setPassword(e.target.value)}} placeholder='Password' />
            <Center>
                <DioButton click={() => {validateUser({email, password})}}>
                    Aperta
                </DioButton>
            </Center>
            </Card>
        </Box>
    )
}

export default Home