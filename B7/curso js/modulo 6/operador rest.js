function add(...numeros) {
    console.log(numeros)
}

add(1, 2, 3, 4, 5, 6)
// passando os ... no parametro, ele pega todos os numeros da função

function addEx(numerosEx) {
    console.log(numerosEx)
} 
// aqui por exemplo só vai pegar o primeiro numero

addEx(3, 4, 5, 6)
// tbm serve para strings

// o operador rest permite representar um número indefinido de argumentos na forma de um array