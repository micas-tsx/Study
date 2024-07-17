// typando o objeto para n dar problema
// base: funcao nomeDela(parametro: {tipa cada item q vai ser usado}) {código}
function resumo(usuario: {nome: string, idade: number}) {
    return `olá ${usuario.nome}, vc tem ${usuario.idade} anos?`
}

let user = {
    nome: 'micas',
    idade: 19
}
console.log(resumo(user));