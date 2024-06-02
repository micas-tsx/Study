let ingredientes = ['farinha', 'ovo', 'óleo', 'açucar', 'cenoura']

// nota: nunk fazer assim
ingredientes[5] = 'pipino'  // adicionando um item
// o numero q ta dentro das [] é o local q ele vai ficar dentro do array
// caso vc coloque em um lugar q ja tem algo, ele substitui
// caso vc coloque em um lugar mais pra frente do array, ele fica com espaços vazios até onde ta a soma da informação

// jeito certo de adicionar
ingredientes.push('baba de bruxa')  // soma uma informação dentro do array

ingredientes.pop() // tira o ultimo item do array
ingredientes.shift() // tira o primeiro item do array

console.log(ingredientes.length) // lenght : a quantidade de coisa q tem dentro do array


/* 

Legenda: 

.push -> adiciona algo no array
.lenght -> vê a quantidade de item dentro do array
.pop -> tira o ultimo item do array
.shift -> tira o primerio item do array

*/