class Person {

    _age = 0
    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    // getter -> pega o valor de um objeto
    // setter -> "setta" a informaçao

    get age() {
        return this._age;
    }

    set age(x) {
        // tbm posso fazer coisas de função aqui dentro
        // por exemplo eu posso fazer um verificador pra isso ser um numero
        if (typeof x == 'number') {
            this._age = x
        }
    } 

    // é tipo uma variavel mas funciona como função
    // tendi n
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

p1.age = 20;
let p1 = new Person('joao')
p1.takeAStep()