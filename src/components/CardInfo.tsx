import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string
    content: string
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return(
        <Box 
            backgroundColor='#FFF' 
            padding={8} 
            minHeight='120px'
            borderRadius='25px'
            boxShadow='base'
        >
            <Text fontSize='xl' fontWeight='bold' >
                { mainContent }
            </Text>
            <Text fontSize='md'>
                { content }
            </Text>
        </Box>
    )
}

export default CardInfo