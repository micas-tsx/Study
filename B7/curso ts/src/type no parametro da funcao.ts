// caso eu n tipe o parametro ele vai ser reconhecimento com any
// para evitar situações como mandar um number onde deve mandar uma string, 
// a gente tipa o paramentro pra receber oq a gente quer

function firstLetterUpperCase(name: string) {
    let firstLetter = name.charAt(0).toUpperCase()

    return firstLetter+name.substring(1)
}

firstLetterUpperCase('micas')
// firstLetterUpperCase(90)