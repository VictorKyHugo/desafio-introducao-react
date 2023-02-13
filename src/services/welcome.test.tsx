import { welcome } from "./welcome";

describe('welcome', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('deve abrir alert desejando boas vindas ao Victor', () => {
        welcome()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo Victor!!')
    })
})

