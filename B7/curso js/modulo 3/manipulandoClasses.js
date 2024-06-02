// caso queira manipular classes de um elemento

function pipiu() {
    const botao = document.querySelector('botao')

    // o .classList, acessa a lista de classes de um elemento
    // sendo as classes as caracteristicas do elemento
    if(botao.classList.contains('azul') /* .contains verifica se contem aquele item na classe */) {
        botao.classList.remove('azul')
        botao.classList.add('verde')
    } else {
        botao.classList.add('azul')
        botao.classList.remove('verde')
    }

    botao.classList.toggle('azul','verde') //toggle troca de um pra outro
    // versao simplificada do item a cima
}