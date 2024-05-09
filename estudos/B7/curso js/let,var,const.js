// let -> uma variavel q pode mudar d valor dps

let nome = "micas"
 
nome = "farjalla" //aqui o nome muda de micas -> farjalla

console.log(nome) // vai aparecer farjalla como resultado



//porem se colocar um console log antes de alterar o valor, ele vai aparecer o resultado antes dele



let nome2 = "micas"
console.log(nome2) // resultado aqui será micas

nome2 = "farjalla"
console.log(nome2) // aqui ja sera farjalla

// var -> tem a mesma caracteristica do let, pode sera alterado e tudo mais

var nome3 = "micas"
console.log(nome3) // resultado aqui será micas

// const -> const de constante, ele n pode mudar de valor nunk

const nome4 = "micas"
console.log(nome4) // resultado aqui será micas

nome4 = "farjalla" 
console.log(nome4) // aqui vai dar erro, pois a constante n pode ser alterada
