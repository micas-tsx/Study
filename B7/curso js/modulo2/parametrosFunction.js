// os () é a porta de entrada da função, onde se coloca os dados

// n1 e n2 só existe dentro da função
function soma(n1, n2) {
    let resultado = n1 + n2
    console.log('resultado: ' + resultado)
} 

soma(10 + 15)
// aqui rodando a função, ele coloca valor aos parametros n1 e n2, e dentro da função ele faz a soma

// outro exemplo

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto('micas', 'farjalla')
nomeCompleto('bob', 'sla')
// aqui ele vai fazer dois console cada um com um nome e sobrenome
// e cada vez q colocar mais um nome ele vai colocando mais informaçao