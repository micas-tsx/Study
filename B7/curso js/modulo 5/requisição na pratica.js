// https://jsonplaceholder.typicode.com/posts

function clicou() { 
    fetch('https://jsonplaceholder.typicode.com/posts')
        // aqui nesse response é toda a informação dada pela api seca
        .then((response) => 
            {return response.json()}
        // aqui eu to transformando o response em objeto
        )
        // pegando o objeto e usando ja o array dele na pratica, pegando informação e mosntrando dentro de um alert
        .then((json) => 
            alert(`Titulo do primerio post: ${json[0].title}`)
        )
    
    // then = e então, no sentido de por exemplo "ah fez algo? "então" faz isso "

    // o código normal fica assim
    // fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {return response.json()}).then((json) => alert(`Titulo do primerio post: ${json[0].title}`))
}

document.querySelector('#botao').addEventListener('click', clicou)