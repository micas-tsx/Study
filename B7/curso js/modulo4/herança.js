class Person {

    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`${this.name} disse oi`)
    }
}

//            extende pessoa / classe estudante q puxa as insformaçoes de pessoa
class Student extends Person {

    constructor(name, id) {
        this.id = id
        // this se refere ao proprio construtor
        super(name)
        // ja o super, se refere a classe extendida que no caso é o Person
        // tbm poderia fazer o this.name, mas ai se refereriria ao proprio estudante
    }

    // nem preciso passar a idade aqui dentro, pois ela ja ta definida la em person, ele herda direto sem precisar definir
    // pq ele ja ta denifido

    // tbm posso redefinir oq ta na classe tbm
    sayHi() {
        console.log(`${this.name} agr é um estudadnte e disse oi`)
    }
    // nesse caso dps q eu criei essa sobrescrição, o resultadod e sayHi caso a instancia criada for um estudante
    // vai dizer essa frase e n a de person

    // tbm posso usar as funçoes da classe pai dentro de uma aqui
    sayHello() {
        super.sayHi
        // o super serve pra pegar da classe pai, dps o nome pra saber qual pegar
    }
}

let p1 = new Student('micas', 1)
p1.age = 20
// posso alterar o age normal, pq ele é herdado só

p1.sayHi()
// aqui por exemplo eu to usando uma função la do person aqui fora msm p1 sendo um studant, pois ele herda tudo direto
// da classe pai, nota: dps q eu mudei o sayHi de studant ele vai mostrar o resultado de studant 

console.log(`${p1.name} tem ${p1.age} anos e matricula ${p1.id}`)