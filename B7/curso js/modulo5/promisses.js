// https://jsonplaceholder.typicode.com/posts

// promisses = promessa

// no caso vc passa algo q pode acontecer no futuro, vulgo uma promessa
// "quando eu tiver uma resposta desse cara, faça algo"
function clicou() {
    // o fetch retorna uma promessa(passe o mouse em cima do fetch pra poder ver) 
    fetch('https://jsonplaceholder.typicode.com/posts')
        // em cima de uma promisse eu posso rotar um then, q tbm retorna uma promisse
        .then((response) => 
            {return response.json()}
        )
        .then((json) => 
            alert(`Titulo do primerio post: ${json[0].title}`)
        )

    alert('opa clicou')
    // AGR UM BIG EXEMPLO DE ASSYNC E SYNC
    // quando vc clicar no botão pra rodar o fetch e tudo mais
    // ele vai rodar primerio o alert do 'opa clicou' doq o json.title ali
    // PQ KRLS? eu te respondo
    // lembra q sincrono roda em ordem e assincrono roda tudo de uma vez?
    // pse, a ordem vem primeiro, logo o alert do opa clicou vai aparecer primerio em ordem, dps o  json.tilte
    // bizarro mas é foda

    // sendo q os fetch os .then são assincronos
    // detalhe, a maioria das coisas q retornam promisses são assincronos


    // o código normal fica assim
    // fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {return response.json()}).then((json) => alert(`Titulo do primerio post: ${json[0].title}`))
}

function somar(x, y) {
    return x + y
}