let idade = 55;

// condicionais dependendes uma da outra
// pode usar o else junto do if pra fazer um conjunto de "teste" da variavel até encontrar qual satisfaz a requisição

if (idade < 18) {
    console.log("vc é uma criança")
} else if (idade >= 18 && idade < 60) {
    console.log("vc é um adulto")
} else if (idade >= 60 ) {
    console.log("vc é um idoso")
}

// aqui no caso a idade vai passar até encontra um lugar q ela se encaixe

// se por um acaso a condição satisfazer uma parte e a outra ao msm tempo, ela vai parar na primeira
// por exemplo

// let idade = 18;
// if (idade <= 18) {
//     console.log("vc é uma criança")
// } else if (idade >= 18 && idade <60) {
//     console.log("vc é um adulto")
// } else if (idade >= 60 ) {
//     console.log("vc é um idoso")
// }

// aqui a idade é igual a 18, satisfazendo o primeiro e o segundo if, porem no console, ira aaparecer q a pessoa é criança
// pois satisfaz o primeiro if