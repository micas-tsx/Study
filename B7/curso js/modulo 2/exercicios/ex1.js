/*
Calcule a porcentagem entre 2 numeros
Exemplo: 25% de 40 é 10

fórmula da porcentagem:(y / x) * 100
*/

function calcPct(x, y) {
    return (x / y) * 100;
}

let x = 56
let y = 11

let pct = calcPct(x, y)

console.log(`${pct}% de ${x} é ${y}`)