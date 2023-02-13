import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header></Header>
            { children }
            <Footer></Footer>
        </>
    )
}