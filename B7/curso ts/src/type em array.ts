let nomes: string[] = [ 'micas', 'luiz', 'salame' ]
// se deixar só : string, ele n vai considerar, tem q por [] após para falar q é um array de string
// caso eu coloque um numero no final dele vai dar erro

let numero: number[] = [90, 15, 18, 30]
// tbm pode ser escrito como
// let numero: Array<number> = [90, 15, 17, 20]

// tipar o array evita q entre um tipo diferente dentro do array
// numero.push('micas'), por exemplo vai dar erro pois n pode entrar string dentro do array de number