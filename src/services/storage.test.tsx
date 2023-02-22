import { createLocalStorage, getAllLocalStorage, changeLocalStorage } from "./storage"

const diobank = {
    login: false
}

const mockWindowProperty = (property: any, value: any) => {
    const { [property]: originalProperty } = window;
    delete window[property];
    beforeAll(() => {
      Object.defineProperty(window, property, {
        configurable: true,
        writable: true,
        value,
      });
    });
    afterAll(() => {
      window[property] = originalProperty;
    });
};
describe('storage', () => {

    mockWindowProperty('localStorage', {
        setItem: jest.fn(),
        getItem: jest.fn(),
        removeItem: jest.fn(),
    });

    it('deve retornar o objeto no localStorage com a chave diobank', () => {
        getAllLocalStorage()
        expect(window.localStorage.getItem).toHaveBeenCalledWith('diobank')
    })

    it('deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(window.localStorage.setItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(diobank)
        expect(window.localStorage.setItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))

    })
})