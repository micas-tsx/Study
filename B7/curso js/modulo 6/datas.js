let d = new Date() // pega a data atual, com todas as informações possiveis
let d2 = new Date(2020, 7, 1, 12, 30, 12)
let d3 = new Date('2020-01-01 15:42:16')
// tbm posso passar como string com esse layout
/*
recebe 7 parametros na ordem

- ano
- mes (e detalhe pois os meses começam do 0, ou seja de 0 a 11)
- dia
- hora
- minuto
- segundo
- milesimos
*/ 



d.toDateString()
// devolve uma versão mais resumida, data e hora

d.toUTCString()
// retorna o de cima com o GMT padrão

console.log(d)
console.log(d2)
console.log(d3)