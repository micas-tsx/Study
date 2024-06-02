// msm sentido da factory da poo, agr com outra cara

// aqui ele cria pessoas, retornando o nome, sobrenome e a idade, deixando livre pra vc poder usar e afins
function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age
    }
}

let p1 = createPerson('micas', 'abud', 18)
let p2 = createPerson('bob', 'da silva', 128)