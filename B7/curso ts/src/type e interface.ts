// assim q se cria um type :)
type NomeCompleto = string

let noome: NomeCompleto = 'micas'

// mas pra q krls eu usaria isso??
// um exemplo mais pratico, em ocasioes q se repete mt uma tipagem especifica

type Idade = string | number

let idadee: Idade = 90

function mostraIdadeee(i: Idade): Idade { 
    return i
}

// e em objetos
/*

uma das formas de fazer uma tipagem de objeto

type User = {
    nome: string,
    idade: number
}

qual a diferença entre type e interface?

o type só pode ser escrito uma vez com aquele nome especifico
o interface eu posso ir adicionando ao código em outros lugares aquele em especifico

interface User{
    nome: string
}


interface User{
    idade: number
}
isso aqui pode fazer, n vai dar erro. Agr se eu fizer isso com type ele vai acusar erro de duplicação, ent n pode :)

*/

// segunda forma
interface User {
    nome: string,
    idade: number
}

function resumooo(usuario: User) {
    return `ola ${usuario.nome}, vc tem ${usuario.idade} anos?`
}

resumooo({
    nome:'micas',
    idade: 90,
})