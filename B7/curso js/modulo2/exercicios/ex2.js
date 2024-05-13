/*
Calcule o preço do imovel

- m2 = 3000

- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000

    if(quartos == 1) { // -> pode ser usado switch tbm
        return m2 * metragem
    } else if(quartos == 2) {
        return (m2 * 1.2) * metragem
    } else if(quartos == 3) {
        return (m2 * 1.5) * metragem
    }
    return
}
let metragem = 123
let quartos = 3

let preco = calcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)