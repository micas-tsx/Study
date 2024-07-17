// caso especifico de um usuario ter mandado apenas o nome e n mandou a idade por seja la qual foi o motivo
// e eu quira receber esse código do msm jeito

function resumoo(usuario: {nome: string, idade?: number}) { // o ? antes dos : torna o parametro opicional 
    if(usuario.idade !== undefined) {
        return `olá ${usuario.nome}, vc tem ${usuario.idade} anos?`
    } else {
        return `olá ${usuario.nome}`
    }
}

let u = {
    nome: 'micas',
    // idade: 19
}
resumoo(u)