// PORRA PIOR NOME DE ARQUIVO POSSIVEL
// variavel / método estatico 

class Person {

    // um método q serve pra todos, só colocar static antes
    static hands = 2
    age = 0

    constructor(name) {
        this.name = name
    }

    // funçoes dentro de uma classe se chamam métodos

    // no caso dps do static a variavel n pertence a instancia e sim a person   

    // sayHi() {
    //     console.log(`oi, eu sou ${this.name} e tenho ${this.hands}`)

    // }
// assim usando this.hands, vai da undefined, pois hands n pertence ao objeto criado, ou isntancia sla. 
// AGR SE A GENTE FIZER ASSIM

    sayHi() {
        console.log(`oi, eu sou ${this.name} e tenho ${Person.hands}`)
    }
    // agr sim da certo, pois hands n pertence ao objeto e sim a classe em sim
    // n pertence ao templete e sim a classe em si


    // é meio abstrato mas da pra entender, é tipo 0, undfined e null
}

let p1 = new Person('micas')
p1.sayHi()

// caso eu queira trocar por exemplo posso fazer assim
Person.hands = 3 