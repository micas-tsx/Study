// union types = multiplos types

let idadeee: string | number | undefined = 90
// o undefined é só para n gerar erro no código, pois n existe id idade

idadeee = document.getElementById("idade")?.innerHTML // e o ? serve para n dar bug tbm pq n existe id idade


// como funciona de uma forma mais pratica

function mostraIdade(idade: string | number) {
    console.log("sua idade é "+idade)

    // mas isso pode gerar problemas, por exemplo, caso eu uso um to UpperCase ele vai dar erro pq ele n
    // é uma função para numbers, logo eu tenho q diferenciar q se separar eles

    if(typeof idade === "string"){
        // aqui eu separo as strings dos numbers para nao dar erro, pois o upeprcase serve apenas para  strings
        console.log(idade.toUpperCase())
    } else {
        console.log(idade)
    }
}

mostraIdade(90)
mostraIdade("90")