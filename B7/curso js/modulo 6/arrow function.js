/*function somar(x, y) {
    return x+ y
}
*/

// assim é escrito a mesma função só que arrow function
const somar = (x, y) => {
    return x + y
}
// a base estrutural da arrow funciton consiste em, passar uma variavel, normalmente uma const
// = (paramentros) => { oq ela vai fazer }
// arrow function é mais viavel para funçoes pequenas e rapidas

let somar2 = (x, y) => x + y
// tbm posso deixar ela mais resumida ainda dependendo da situação, n usando as chaves
// oq ocorre dps da arrow ja é basicamente um return 
// caso passe as chaves, precisa necessariamente passar o return escrito

const letrasNoNome = nome => nome.length
// caso tenha apenas um parametro, o uso de parenteses é opicional
// caso n tenha paramentro nenhum, é obrigatorio ter os parenteses, () => piriri pororo

console.log( somar(10, 5) )
console.log( somar2(10, 7) )

console.log( letrasNoNome('micas') )