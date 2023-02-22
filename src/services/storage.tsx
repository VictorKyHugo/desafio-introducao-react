
interface IDioBank {
    login: boolean
}

const diobank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return window.localStorage.getItem('diobank')
}

export const createLocalStorage = ():void => {
    window.localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    window.localStorage.setItem('diobank', JSON.stringify(dioBank))
}