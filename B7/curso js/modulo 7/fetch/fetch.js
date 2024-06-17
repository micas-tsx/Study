function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){ 
            return resultado.json()
        })
        .then(function(json) {
            monstarBlog(json)
        })
        .catch(function(error) {
            console.log("aconteceu algum erro")
        })
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

/*

Legenda:

GET: Pegar informações, é o padrão do fetch (pega algo do banco de dados)

POST: "postar" as informações, insere uma informação nova (postar uma nova coisa do usario)

PUT: Alterar uma informação ja existente 

DELETE: Deleta algo

*/