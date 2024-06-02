let nome = 'micas'
let nome2 = 'farjalla grangeiro abud'
let nome3 = '       micas        '


// let resultado = nome.length
// let resultado = nome.slice(0, 10) 
// let resultado = nome.substring(0, 4)
// let resultado2 = nome2.indexOf('grangeiro')
// let resultado = nome.toUpperCase()
// let resultado = nome.toLowerCase()  
// let resultado = nome.charAt(4)
// let resultado2 = nome.replace('grangeiro', 'ribeiro')


let resultado2 = nome2.split(' ')
let resultado3 = nome3.trim()



// utilização de .indexOf
if(nome.indexOf('abud') > -1) {
    resultado2 = 'achou'
} else {
    resultado2 = 'n achou'
}
// traduzindo, se achar o nome, vai dar achou, caso contrario n achou

console.log(resultado)
console.log(resultado2) 
console.log(resultado3)

// .lenght -> mostra a quantidade de itens dentro da string
// .indexOf() -> consegue achar onde um nome especifico começa dentro da string, caso n ache vai dar resultado -1

/*
.slice() -> ele pega oq tem dentro de determinada quantidade, passa dois parametros dentro dele, onde começa e onde
termina, por exemplo nome.slice(0, 3), vai pegar só o 'mic' do 'micas', tbm posso começar de outro numero sem ser o 0
por exemplo (3, 5) vai pegar o 'cas'

o .slice() tbm pode passar parametro negativo, q faz ele começar do final da string .slice(-4) vai pegar o 'icas'm,
tem como passar dois parametros negativo tbm
*/

// .substring() -> é igual ao .slice() só q n recebe paramentro negativo
// replace() -> troca string por outra, passa primerio o parametro q vai ser alterado, dps pelo qual vai alterar
// toUpperCase() -> deixa maiusculo
// toLowerCase() -> deixa minusculo
// .trim() -> n passa parametro, ela tira os espaços da string, meio util mas tem q pensar direito pelo visto
// .charAt() -> recebe parametro, serve pra achar qual caracter ta em tal posição da string

/*
.split() -> recebe paramentro, onde ele encontrar oq tiver dentro do parametro, 
ele separa para cada vez q encontrar aquele caractere e transforma cada lado em um array, por exmplo 
nome.split(' '), onde ele encontrar espaço ele separa e transforma em array
*/