// import { Footer } from './Footer'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
    return (
        <Box minHeight='100vh' backgroundColor="#F7F7F7">
            <Header></Header>
            { children }
            {/* <Footer></Footer> */}
        </Box>
    )
}