let pessoa = {
    nome: 'micas',
    sobrenome: 'abud',
    idade: 18,
    social: {
        insta:{
            url: '@micas.tsx',
            seguidores: 1.5
        },
        linkedin: 'micael'
    },
}

function pegarNomeCompleto({nome, sobrenome}) {
    return `${nome} ${sobrenome}`
}

// assim eu consigo acessar direto dentro de um
// let { insta, linkedin } = pessoa.social

// mas e se por um acaso eu quiser pegar tudo num balio de gato só?
let { nome, sobrenome, idade, social:{ insta:{url: instagram, seguidores} } } = pessoa 
// aqui tamo entrando camada por camada, e la em url estamos renomeando para instagram, logo caso tente puxar
// url no log n vai aparecer, pois o nome da variavel virou instagram 

// eu passo de onde vem, mais amplo, pq se eu especifica eu n consigo acessar, nome por exemplo
// e dps consigo entrar direito das chaves 'social:{insta}'


console.log(instagram, seguidores)

console.log(pegarNomeCompleto(pessoa))