// conceito novo
class Person {
    // todo objeto vai usar dois conceitos
    // propiedades e ações q ele pode fazer

    // caso eu queria algo padrão entre todos?
    pinto = 10
    // posso colocar a caracterisca sem colocar dentro de uma variavel e posso passar direto a caracteritica dele

    // aqui se contrói o construtor de algo, como um template
    constructor(name, age) {
        // q porra é esse this? this como no port é isto, algo q ta perto. Mais facil de entender naquele outro arquivo la
        // this refere ao proprio objeto
        this.name = name
        this.age = age
    }

    
}

// pra eu criar uma pessoa no final, eu preciso instanciar a classe
// criar um objeto finalmente

let p1 = new Person('joao', 20) // isso são as instancias
let p2 = new Person('maria', 30) // isso são as instancias
let p3 = new Person('micas', 18) // isso são as instancias

// e posso mudar a caracteristica geral aqui fora
p3.pinto = 18

console.log(p1.pinto)

// porra mt mais simples pensar q primeiro vc cria um template geral pra um conceito
// e dps vc passa as informaões pra ele de forma separada, tipo um formulario