// == e ===

// a diferença é q o === é mt mais rigoroso doq o ==
// por exemplo

let idade = "20"

// aqui vai mostrar q o 20 é igual
if(idade == 20) {
    console.log("é igual")
}
// pois o vinte aceita pq é 20, mas difere o tipo, pois um é string e o outro numero

// aqui vai mostrar q o 20 é diferente
if(idade === 20) {
    console.log("é igual")
}
// aqui ele n passa, pois pede q tipo tbm seje