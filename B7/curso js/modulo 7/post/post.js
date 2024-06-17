// metodo post

async function inserirPost() {
    document.getElementById('posts').innerHTML = 'carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'titulo test',
            body: 'corpo teste',
            userId: 3
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await req.json()

    console.log(json) 
}