function clicou() {
    const teste = document.querySelector('#exemplo')

    const ul = teste.querySelector('ul')

    // aqui ele concatena oq tem mais o novo li
    ul.innerHTML = ul.innerHTML + "<li>meu pipiu molinho</li>"
    // innerHTML consegue alterar o html de qualquer forma e mostrar na tela
    // mt pika
}
// posso definir clicou direto no html, usando onclick dentro da tag
// ou posso fazer assim
let botao = document.querySelector('.botao')

botao.addEventListener("click", clicou)
// addEventListener -> escuta eventos
// coloque escutador de evento na variavel botao que quando tiver um evento de "click", executa o clicou