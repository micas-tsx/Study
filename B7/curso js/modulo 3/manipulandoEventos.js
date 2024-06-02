// po fiz tudo no outro arquivo, vou copiar e colar oq eu mudei

// function clicou() {
//     const teste = document.querySelector('#exemplo')

//     const ul = teste.querySelector('ul')

//     ul.innerHTML = ul.innerHTML + "<li>meu pipiu molinho</li>"
// }

function clicou2() {
    const teste = document.querySelector('#exemplo')

    const ul = teste.querySelector('ul')

/*
    ul.children[0].append("(alterado)")

    children -> pega o idem filho do ul
    .append -> adiciona um texto ao texto ja existente sem alterar tudo, diferente do innerHTML ou innerText
*/

/*
    let newLi = document.createElement("li")
    // criou um elemento novo "li"

    newLi.innerText = "item adicionado"
    // adicionou texto a ele

    ul.appendChild(newLi)
    // appendChild -> coloca ele dentro de um elemento pai, no caso dentro do ul

    // .prepend -> inverso do .append, adiciona o item no começo inves do final

    ul.after("")
*/

    let newUl = document.createElement("ul")
    ul.after(newUl)

    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li')
        newLi.innerHTML = 'item adicionado' + (i + i)
        newUl.append(newLi)
    }
}

let botao2 = document.querySelector(".teste")

botao2.addEventListener("click", clicou2)