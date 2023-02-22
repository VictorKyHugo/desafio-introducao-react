import { 
    Text,
    Box,
    Flex,
    Spacer,
    Button
} from '@chakra-ui/react';  
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';
import { AppContext } from './AppContext';

export const Header = () => {

    const navigate = useNavigate()
    const { setIsLoggedIn, isLoggedIn } = useContext(AppContext)

    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }

    return (
        <Flex  backgroundColor='#F7F7F7' paddingY='7px' borderBottom='1px' borderColor='#00000007'>
            <Box>
                <Text color='#6B46C1' fontSize='xl' fontWeight='bold' marginLeft='35px'>
                    DioBank
                </Text>
            </Box>
            { isLoggedIn && (
                <>
                    <Spacer />
                    <Button onClick={() => logout()}>
                        Sair
                    </Button>
                </>
            ) }
        </Flex>
    )
}