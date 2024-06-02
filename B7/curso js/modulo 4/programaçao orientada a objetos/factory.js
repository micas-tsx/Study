// factory é um conceito
// factory de fabrica
// são funções q criam coisas

class Person {

    age = 0 

    constructor(name) {
        this.name = name
    }
}

// fabrica de criar pessoas no exemplo
function createPerson(name, age) {
    let p = new Person(name)
    p.age = age
    return p
}
// é uma funçao q retorna a instancia de algo

let p1 = createPerson('micas', 18)