const conta = {
    email: 'victorkyhugo@gmail.com',
    password: '222',
    name: 'Hugo',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise(resolve => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})