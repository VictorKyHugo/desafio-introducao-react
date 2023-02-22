import Login from "./login";

// const mockSetIsLogin = jest.fn()
// const mockNavigate = jest.fn()

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLogin
//     })
// }))

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }))
// describe('login', () => {
//     const mockEmail = 'victorkyhugo@gmail.com'

//     it('deve abrir alert desejando boas vinda caso o email seja valido', async () => {
//         await Login(mockEmail)
//         expect(mockSetIsLogin).toHaveBeenCalledWith(true)
//         expect(mockNavigate).toHaveBeenCalledWith('/1')
//     })
//     it('deve exibir um erro caso o email for invalido', async() => {
//         await Login('email@invalido.com')
//         expect(mockSetIsLogin).not.toHaveBeenCalled()
//         expect(mockNavigate).not.toHaveBeenCalled()
//     })
// })

describe('login', () => {
    const mockUser = {
        email: 'victorkyhugo@gmail.com',
        password: '222'
    }

    it('Deve abri caso o email e senha sejam validos', async () => {
        const user = await Login(mockUser)
        expect(user).toBeTruthy()
    })

    it('deve exibir um erro caso o email seja invalido', async() => {
        const user = await Login({ email: 'invalido@gmail.co', password: '222'})
        await Login(mockUser)
        expect(user).toBeFalsy()
    })
    it('deve exibir um erro caso a senha seja invalido', async() => {
        const user = await Login({ email: 'victorkyhugo@gmail.com', password: 'invalida'})
        await Login(mockUser)
        expect(user).toBeFalsy()
    })
    it('deve exibir um erro caso o email ou senha sejam invalidos', async() => {
        const user = await Login({ email: 'invalido@gmail.co', password: '22we'})
        await Login(mockUser)
        expect(user).toBeFalsy()
    })
})
