function clicou() {
    // GET, POST, PUT, DELETE -> principais
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => 
            {return response.json()}
        )
        .then((json) => 
            alert(`Titulo do primerio post: ${json[0].title}`)
        )
        .catch((error) => {
            alert('Deu algum problema com nossos servidores')
        })
}

function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            // metodo do post
            method: 'POST',
            // header: vai o tipo de dado q eu to mandando
            headers: {
                'Content-Type': 'application/json'
                // aqui eu estou dizendo que o tipo de informação que vou enviar é um json
            },
            // body: o grosso doq eu to mandando, vulgo dados
            // JSON.stringfy é um objeto
            body: JSON.stringify({
                title: 'titulo teste',
                body: 'corpo teste',
                userId: 1
            })
        }
    )
    // transformo em um objeto as informaçoes
    .then((response) => {
        return response.json()
    })
    // pega o objeto e bota num console.log pra poder ver as infomaçoes
    .then((json) => {
        console.log(json) 
    })
}

document.querySelector('#inserir').addEventListener('click', inserir)

/*

Legenda:

GET: Pegar informações, é o padrão do fetch (pega algo do banco de dados)

POST: "postar" as informações, insere uma informação nova (postar uma nova coisa do usario)

PUT: Alterar uma informação ja existente 

DELETE: Deleta algo

*/