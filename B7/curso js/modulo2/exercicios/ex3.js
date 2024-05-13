/*
Crie uma função q valide usario e senha
usuario correto : pedro
senha correta : 123
*/

function validar(usuario, senha) {
    if (usuario === 'pedro', senha == 123) { // pode usar tbm usarrio === 'pedro' && senha == 123
        return true
    } else {
        return false
    };
}

let usuario = 'micas'
let senha = '1234' 
let validacao = validar(usuario, senha)

if(validacao) {
    console.log('acesso concedido')
} else {
    console.log('acesso negado')
}