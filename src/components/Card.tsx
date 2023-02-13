import { DioButton } from './DioButton';
import { welcome } from '../services/welcome'

import { 
    Center,
    Box,
    Input,
    Heading
} from '@chakra-ui/react';

export const Card = () => {
    return (
        <Box minHeight='100vh' backgroundColor="#F4F4F4" padding='25px'>
        <Box backgroundColor='#FFF' borderRadius='25px' padding='15px'>
          <Center>
            <Heading color='#292929' as='h1' size='md' marginBottom='10px'>Faça o login</Heading>
          </Center>
          <Input marginBottom='3px' placeholder='Email' />
          <Input marginBottom='3px' placeholder='Password' />
          <Center>
            <DioButton click={welcome}>
                Aperta
            </DioButton>
          </Center>
        </Box>
        </Box>
    )
}