// https://jsonplaceholder.typicode.com/posts

// ======================================== Pega os posts e coloca na tela ============================================
async function readPosts() {
    // pega o a area de post
    let postArea = document.querySelector('.posts')
    // coloca a mensagem de carregando
    postArea.innerHTML = 'Carregando...'

    // pega o que tem dentro da url com api
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // transforma em objeto o conteudo
    let json = await response.json()

    // como é um array de objeto ele fala eu posso criar uma verificação assim
    // "caso o conteudo do array for maior q 0 faça isso: "
    if(json.length > 0) {
        // zera a area de posts
        postArea.innerHTML = ''

        // da um loop nos posts que tem
        for(let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</hr></div>`
            // pode criar com append pra poder ficar mais otimizado
            // ja q o innerHTML tira e coloca cada um cada vez q um novo é criado, pesando o código
            postArea.innerHTML += postHtml
        }
    } 
    // caso contrario coloque na parte dos post a mensangem 'nenhum post encontrado'
    else {
        postArea.innerHTML = 'Nenhum post encontrado'
    }
}

// ======================================== Pega os posts e recarrega a tela ============================================

async function addNewPost(title, body) {
    // manda os dados pro post no servidor
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // como o nome da variavel q vai dentro dele o msm, igual, identico, n precisa passar ele dentro dele
                // por exemplo o title: title
                title,
                body,
                userId: 2
            })
        }
    )

    // zera os campos
    document.querySelector('#titleField').value = ''
    document.querySelector('#bodyField').value = ''

    // recarrega a pagina rodando o esquema
    readPosts()
}

document.querySelector('#insertButton').addEventListener('click', () => {
    // esses dois pegam oq tem dentro deles com o .value
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    // roda o new post se tiver algo neles, colocando o body e o title na tela
    if(title && body) {
        addNewPost(title, body)
    } 
    // se n tiver nada pede pra preencher os campos pra mandar
    else {
        alert('Preencha todos os campos')
    }
})



// ======================================= Roda o código =============================================
readPosts()