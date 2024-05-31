// Promisses com asyn / await

// caso por exemplo faça com uma arrow function
// let clicou = sync () => {}

async function clicou() {
// await = esperar 
// "espera isso aqui acontecer dps roda o resto"

// aqui vc força a função a ser sincrona
// o await faz a função frear esperando até a requisição ser executada
    let response =  await fetch('https://jsonplaceholder.typicode.com/posts')
    // dps transforma os dados em objeto
    let json = await response.json()
    // roda os dados
    alert(`Titulo do primerio post: ${json[0].title}`)

    alert('clicou')

    // logo, agr como a função toda é sincrona
    // o alert de clicou só roda dps da requisição
}

async function inserir() {
    // faz a requisição
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'titulo teste',
                body: 'corpo teste',
                userId: 1
            })
        }
    )
    // aqui traduz pra objeto
    let json = await response.json()
    // usa o objeto
    console.log(json)
}

document.querySelector('#clicar').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inserir)