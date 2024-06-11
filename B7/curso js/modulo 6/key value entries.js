let nomes = ['micas', 'jao', 'colombas']

console.log( Object.keys(nomes) )
// Object.keys(paramentro) => retorna um array com os index dos itens

console.log( Object.values(nomes) )
// Objetct.values(parametro) => retorna um array com os valores, vulgo oq ta escrito dentro dele

console.log( Object.entries(nomes) )
// Objetct.entries(parametro) => retorna os dois juntos, cada item do novo array é um array passando o index e o valor
// porem o index é uma string

let pessoa = {
    nome: 'micas',
    idade: 18
}

console.log( Object.keys(pessoa) )
// ja com um objeto ele retorna o nome do item


console.log( Object.values(pessoa) )
// ja com um objeto ele retorna o valor do item

console.log( Object.entries(pessoa) )
// ja com um objeto ele retorna o nome do item e o valor