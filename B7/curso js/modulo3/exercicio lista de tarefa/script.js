//  pegando os elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

//  enventos
input.addEventListener('keyup', handleKeyUp)

function handleKeyUp(e) {
    // faz um evento capturando o enter verificando se ele foi acionado, se for
    if(e.key === 'Enter') {
        // crai um elemento no novo (no caso um li)
        const newLi = document.createElement('li')
        // coloca esse elemento novo com o valor do input
        newLi.innerHTML = input.value
        // coloca ele como "filho" do ul, chamado de lista aqui
        lista.appendChild(newLi)


        // limpa o texto
        input.value = ''
    }
}