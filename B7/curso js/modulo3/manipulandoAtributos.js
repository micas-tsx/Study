function clicou() { 
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao2')
    
    // como pegar um atributo de um elemento?

    console.log(input.getAttribute('placeholder'))
    // get pra pegar o item

    // console.log(input.setAttribute('placeholder', 'PLACEHOLDER alterado'))
    // set mudou o atributo

    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password')
        botao.innerText = 'mostrar senha'
    } else {
        input.setAttribute('type', 'text')
        botao.innerText = 'ocultar senha'
    }
}