// é parecido com array, só q diferente

// cria uma parada, e passa valores a ele

let personagem = {
    nome: 'micas',
    idade: 18,
    pais: 'brasil',
// eu posso colocar um objeto dentro d um objeto tbm
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15,
    },
// tbm consigo por um array dentro de um objeto 
    olhos: ['preto', 'azul', 'castanho']
}

console.log(personagem.nome) // assim q vc chama a informação dentro do obejto
console.log(personagem.caracteristicas.magia) // aqui q vc chama o item dentro do objeto
console.log(personagem.olhos[1]) // assim pra vc chamar o item do array dentro da função