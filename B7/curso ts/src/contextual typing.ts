// CONTEXTUAL TYYPING EM FUNÇÕES ANONIMAS

let names = ['micas', 'pedro', 'ana', 90]

names.forEach(function(nome) {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase())
        // aqui ele só pega as strings
    } else {
        console.log(nome)
        // consequentemente oq passar vai ser number
    }
})

// passe o mause no parametro do console.log para ver a tiapgem deles