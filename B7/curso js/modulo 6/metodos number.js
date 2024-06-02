let n = 10 
let n2 = 10.1723647128364
let n3 = '10.321'

let res = n.toString()
let res2 = n2.toFixed(2)
let res3 = parseInt(n3) + 5
let res4 = parseFloat(n3) + 5

console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)

// .toString() -> transforma em string
// .toFixed() -> resceba parametro, limita o numero de casa decimal q vão aparecer
// .parseInt() -> transforma o numero dentro da string em numero msm, só numero inteiro, sem considerar os decimais
// .parseFloat() -> faz a msm coisa do parseInt só que considera os numeros decimais