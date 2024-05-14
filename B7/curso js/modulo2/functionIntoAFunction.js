 function addRaiz(a, b) {
    function raizQ(x) { //pode usar uma função dentro de uma função
        return x * x
    }

    // const raizQ = (x) => x * x

    let raizA = raizQ(a)
    let raizB = raizQ(b)

    return raizA + raizB
 }

// console.log(raizQ(5))

console.log(addRaiz(2, 5))

//  opiniao pessoal do professor "caso for usar function dentro da function, use arrow function"