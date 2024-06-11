let numeros = [1, 2, 3 , 4 ]

let maisNumeros = [...numeros, 5, 6, 7, 8] 
// o ...nomeDeUmaVariavel puxa as informações de outro array, e adiciona no novo array

console.log(maisNumeros)
// caso eu de um console no "numeros" ele vai aparecer só os primeiros, entretando se eu der um console no 
// "maisNumeros" ele vai mostrar todos os numeros, pois puxou as informações de numeros

let info = {
    nome: "micas",
    idade: 20  
}

let maisInfo = {
    ...info,
    estado: "Pb",
    pais: "Brasil"
}
// o operador spread tbm funciona em objetos 

// tbm consigo fazer isso com function, passando como parametro de odne vc quer puxar as informações
function adicionaInfo(infoExemplo) {
    let novasInfo = {
        ...infoExemplo,
        status: 0,
        token:"afsdfas",
        data_cadastro: 'piriri'
    }

    return novasInfo
}

console.log(maisInfo)

console.log(adicionaInfo({nome:'micas', idade:18}))

