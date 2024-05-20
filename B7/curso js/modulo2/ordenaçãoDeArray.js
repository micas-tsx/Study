let frutas = ['maça', 'uva', 'laranja', 'banana']

frutas.sort() //deixa o array em ordem alfabetica
// ah, mas e se eu quiser deixar em oredem alfabetica inversa?

// primeiro tem q dar o .sort()
frutas.reverse() //esse cara inverte a ordem do array, mas combinado com sort ele inverte a ordem alfabetica

let carros = [
    {marca: 'fiat', ano: 2022},
    {marca: 'bmw', ano: 2018},
    {marca: 'ferrari', ano: 2020}
]

// como eu faço pra ordenar um array com base em uma propriedade dentro de um objeto no array

carros.sort((a, b) => {
    if(a.ano > b.ano) {
        return 1
    } else if(a.ano < b.ano) {
        return -1
    } else {
        return 0
    }
})
// essa é a lógica
// passa uma função dentro do sort q pega dois itens, 'a' e 'b'
// e meio q ordena subindo e descendo com base no ano, se for maior, sobe, se for menor, desce

// mas tem um jeito mais facil de fazer isso

// cars.sort((a, b) => a.ano - b.ano)



// sendo o a e o b os anos
// mas pqp eu n entendi nada
