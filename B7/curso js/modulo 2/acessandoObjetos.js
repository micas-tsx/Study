// acessando e alterando objetos

let personagem = {
    nome: 'micas',
    idade: 18,
    pais: 'brasil',
        caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15,
    },
    olhos: ['preto', 'azul', 'castanho']
}

// para acessar é parecido com o array e coisas do tipo

personagem.nome = 'abud' // aqui no caso estamos fazendo oq? entrando no ojeto personagem e dps acessando o nome 
personagem.caracteristicas.forca += 5;
// ja aqui estamos fazendo a msm coisa só q pra outro item, personagem -> caracteristicas -> força

personagem.olhos.push('verde');
// aqui estamos add 'verde' ao array dentro do objeto
// objetos em si n recebem .push(), mas o array dentro dele sim
// logo, se der um console.log nele vai aparecer o verde tbm como resultado de olhos

/*======================================================================================================= */

// eu tbm posso colocar um objeto dentro de um array

let personagem2 = {
    nome: 'micas',
    // dentro de carros, eu preciso de algumas caracteristicas deles
    carros: [
        {
            modelo: 'fiat',
            cor: 'preto',
            placa: 1234
        },
        {
            modelo: 'ferrari',
            cor: 'vermelho',
            placa: 4321
        }
    ]
}

personagem2.carros[0].cor
// aqui pra acessar muda um pouco ja q apartir de carros se torna um array, logo a gente começa a 
// chamar no estilo do array

// no exemplo, eu to chamando a cor do primeiro carro por isso 
// personagem2 -> carros -> item[0] -> cor