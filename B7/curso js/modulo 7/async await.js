async function loadPosts() {
    document.getElementById('posts').innerHTML = 'carregando...'

    // passa o fecth para dentro de uma variavel, 
    // usando o await faz o restante do codigo esperar o fetch acontecer para continuar
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')

    // passa o json esperar tbm, e tbm passa para uma variavel
    let json = await req.json()

    // roda a funlçao jogando o json para dentro dele
    monstarBlog(json)

    // assim faz a msm coisa q o código do outro arquivo, mas assim fica mais limpo
}

function monstarBlog(lista) {
    let html = ''

    for(let i in lista) {
        html += `<h3>${lista[i].title}</h3>`
        html += `${lista[i].body}<br/>`
        html += '<hr/>'
    }

    document.getElementById('posts').innerHTML = html
}

// assyn torna a função assincrona e libera a função await para usar
// await força algo acontecer para dps continaur o codigo