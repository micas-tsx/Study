// ideia primaria, caso eu tenha uma string q precisa ter certa quantidade de caracteres, porem n foi
// passada essa determinada quantidade
let telefone = '5'
// aqui por exemplo, o numero de telefone tem q ter 9 numeros

console.log( telefone.padEnd(9, '*') )
// com o padEnd, podemos passar no primeiro parametro a quantidade de caracteres q ele deve ter
// e no segundo por qual caractere ele vai completar essa string

let telefone2 = '35121'

// ja o padStart tem o msm conceito, só q completa pro lado esquerdo
console.log( telefone2.padStart(9, '*') )

// uso do dia a dia

// caso eu queira mostrar pra um cliente os ultimos 4 digitos do cartão dele? com os asteriscos pro lado?

// cria o cartao
let cartao = '1234921312340123'

// pega os ultimos 4 digitos do cartao
let lastDigits = cartao.slice(-4)

// faz o padStart nele pra 'mascarar' o inicio do cartao
let cartaoMascarado = lastDigits.padStart(16, "*")

console.log(cartaoMascarado)