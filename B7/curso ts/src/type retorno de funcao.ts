// para tipar o retorno da função é só colocar o : dps do parametro da função, 
// fazendo q ele n retorne um number por exemplo

function firstLetterUpperCasee(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase()

    return firstLetter+name.substring(1)
}

let nome = firstLetterUpperCasee('micas')
// n preciso efetivamente typar essa variavel pq ela ja vai efetivamente receber uma string

// let nome: number  = firstLetterUpperCasee('micas')
// assim da erro, pois ele da devolvendo uma string e n pode ser usada em um number

function somar(n1: number, n2: number): number {
    return n1 + n2
}

let resultado = somar(10, 20) 
// aqui por exemplo se eu n tipar nada, eu consigo passar uma string sem dar erro, 
// pois eu concatenaria as strings do parametro
// como eu tipei os parametros e o retorno da função ele só vai receber/voltar numeros
