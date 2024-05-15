// conjunto de coisas

//               0      1       2
let colors = ['blue', 'red', 'green']
// lembrando q array começa do 0

// construnção variavel nome = [valor1, valor2, valor3]

console.log(colors[0]) // -> chama o azul

// posso chamar um array dentro de um array

let nomes = ['micas', 'farjalla']

let lista = ['to molinho', nomes] // chamanbdo o array dentro de outro array

// posso colocar um array dentro do porprio array

let cores = ['azul', ['vermelho', 'verde']]

console.log(cores[0]) // aqui vai chamar o azul

console.log(cores[1]/* o array se econtra nessa posição */[0]) // aqui vai chamar o vermelho q ta na posição 0 dentro do array q se encontra no 1