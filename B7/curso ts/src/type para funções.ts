type MathFunction = (n1: number, n2: number) => number
// essa é a estrutura para tipar funçao
// type nome = (tipagem) => tipo do retorno
// dps de usar tipar a função, vc n precisa tipar todos os itens dela pq ele ja ta tipado por fora

// para implementar fica assim
const somar: MathFunction = (n1, n2) => {
    return n1 + n2
}

const subtrarir: MathFunction = (n1, n2) => {
    return n1 - n2
}
// continua usando ai 


somar(10, 20)
subtrarir(10, 20);