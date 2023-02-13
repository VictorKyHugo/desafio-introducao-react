import { 
    Text,
    Box,
} from '@chakra-ui/react';

export const Header = () => {
    return (
        <Box backgroundColor='#F4F4F4' paddingY='7px' borderBottom='1px' borderColor='#00000009' >
            <Text color='#6B46C1' fontSize='xl' fontWeight='bold' marginLeft='35px'>
                DioBank
            </Text>
        </Box>
    )
}