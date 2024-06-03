// res = resltado

let list = ['ovo', 'farinha', 'cenoura', 'massa']
let list2 = ['prato', 'garfo', 'faca']
let list3 = [1, 2, 3, 4, 5, 6, 7] 
let listEmpty = []

// let res = list.toString()
// let res = list.join(' - ')
// let res = list.indexOf('ovo')
// let res = list.splice(1, 1)
// let res = list.concat(list2)
// list.pop()
// list.shift()
// list.push('açucar')
// list.sort()
// list.reverse()
// list[2] = 'sal'

listEmpty = list.map(function(item) {
    return item * 2
})
// mapeia os itens e multiplica eles por dois passando pra dentro da lista vazia

listEmpty = list.filter(function(item) {
    if(item < 20) {
        return true
    } else {
        return false
    }
})
// filtra os itens e faz uma verificação, se for menor q 20 aparace, caso contrario n

listEmpty = list.every(function(item) {
    if(item > 20) {
        return true
    } else {
        return false
    }
})
// o every é parecido com o filter, porém ele só retorna true se todos fizerem parte da condição

listEmpty = list.some(function(item) {
    if(item > 20) {
        return true
    } else {
        return false
    }
})
// igual o every, porem se um satisfazer ja retorna true


listEmpty = list3.find(function(item) {
    if(item == 5) {
        return true
    } else {
        return false
    }

    // tbm pode ser escrito assim
    // return (item == 16) ? true : false
    // sendo a condinção dentro dos parenteses e o restante é igual pra tudo btw
})

console.log(res)

/*

.toString() -> transforma em string
.join() -> faz o caminho contrario do split(), pega os itens de um array e junta em um sting, usando oq tem dentro do
paramentro do join pra juntar ele
.indexOf -> o msm do string, procura um item do array e mostra onde ele ta e retorna -1 caso n ache

.pop() -> tira o ultimo item do array
.shift() -> tira o primeiro item do array
-> eles tem q ser direto na variavel q esta o array para alterar no exemplo como o array ta em list é list.pop

.push() -> adiciona algo no array

da pra alterar o array mexendo direto nos itens dele
list[2] = 'sal'
é um exemplo onde eu tiro a cenoura e transformo em sal, tbm consigo adicionar um item dessa forma

.lenght() -> mostra a quantidade

.splice() -> recebe paramentros, deleta do array uma quantidade de itens
no primerio parametro recebe em qual item vc quer começar a tirar
no segundo quantos itens vc quer tirar, caso n passe segundo paramentro ele deleta todos a partir do primeiro param

.concat() -> concatena dois ou mais arrays

.sort() -> coloca o array em ordem alfabetica: a -> z
.reverse() -> deixa em ordem albatica inversa: z -> a

.map() -> mapeia os itens do array e meio q vc pode usar eles da forma q quiser em outro array
meio q pega o array e usa em outro array

.filter() -> filtra os itens do array 
.every() -> verifica se todos os itens do array satisfazem a condição
.some() -> msm coisa que o every, mas se um só satisfazer ja retorna true

.find() -> procura o primeiro item que satisfaz a condição e retorna ele
.findIndex() -> faz a mesma coisa q o find, mas mostra a posição dele no array
*/