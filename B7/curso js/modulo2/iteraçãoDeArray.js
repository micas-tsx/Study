let frutas = ['banana', 'laranja', 'maça', 'uva']

// friltra o array / precisa ta dentro de uma variavel pra funcionar
let bigFruits = frutas.filter((item) => {
    return item.length > 4 // lenght serve pra pegar todos os items dentro de frutas
    // criei uma função dentro do filter q pega todos os itens q tem mais d 4 letras
})

// every = seleciona todos os itens do array pra fazer algo
frutas.every((value) => {
    return value.length > 3
    // pega os valores (igual o item) e verifica se tem 3
}) //nesse caso vai dar false, pq uva n é maior q 3


// some = algum / se algum satisfazer a função dentro do some, ele retorna como true 
// diferente do every q todos tem q satisfazer
frutas.some((value) => {
    return value.length > 3
}) //nesse caso vai dar true, por mais q uva n satisfaça, o restante sim logo retorna true


// every e some é tipo a msm coisa só q diferente :)


// agr se eu quiser saber se tem algo especifico dentro do array

if(frutas.includes('uva')) { // .includes() busca pra vc se tem o item dentro do parenteses dentro do array
    console.log('tem sim')
} else {
    console.log('tem n')
}