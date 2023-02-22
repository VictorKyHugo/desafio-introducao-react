import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from '../api'
import { AppContext } from '../components/AppContext';

import CardInfo from "../components/CardInfo"

interface UserData {
    email: string 
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {

    const navigate = useNavigate()
    const [userData, setUserData] = useState<null | UserData>()
    const { isLoggedIn } = useContext(AppContext)

        !isLoggedIn && navigate('/')
  
    useEffect(() => {
      const getData = async () => {
        const data: UserData | any = await api
        setUserData(data)
      }
    
      getData()
    }, [])

    const { id } = useParams()

    if(userData && id !== userData.id){
        navigate('/')
    }

    const currentDate = new Date()
    const computedDate = `${currentDate.getDay()} / ${currentDate.getMonth()} / ${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()} `

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    !userData ? 
                    (
                        <Center>
                            <Spinner size='xl' />
                        </Center>
                    ):
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={computedDate} />
                            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
                        </>
                    )

                }

            </SimpleGrid>
        </Center>
    )
}

export default Conta