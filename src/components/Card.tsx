import { Box } from '@chakra-ui/react';

export const Card = ({ children }: any) => {
  
    return (
        <Box backgroundColor='#FFF' boxShadow='base' borderRadius='25px' padding='15px'>
          { children }
        </Box>
    )
}