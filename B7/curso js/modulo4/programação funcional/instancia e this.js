// no caso da funcional ser baseada em funções, n temos objetos pra instanciar
// ja q a função ja é praticamente ja é instanciada por ela msm


function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        // ja para usar o this, eu posso usar aqui dentro, só depende da situação
        // caso por exemplo eu queria criar uma função para juntar e fazer o nome completo
        // eu teria q pegar o nome e o sobrenome direto de dentro da função
        getFullName() {
            // aqui como estamos referenciando uma propriedade de dentro do objeto, podemos usar o this pra pegar ele
            return `${this.name} ${this.lastName}`
        }
    }
}

let p1 = createPerson('micas', 'abud', 18)
let p2 = createPerson('bob', 'da silva', 128)

console.log(p1.getFullName())