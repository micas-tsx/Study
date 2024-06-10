let informacoes = [
    'micas abud',
    'micas',
    'abud',
    '@micas.tsx'
]

let [ nomeCompleto, nome, sobrenome, insta, idade=18] = informacoes
// tem q passar um nome pra variavel caso seja um array,
// o nome das variaveis sao na ordem do array

// tbm posso pular os itens caso eu n queria colocar eles em uma variavel
// let [ nomeCompleto, , , insta ] = informacoes  -> só deixar em branco os itens q n vao ser usados
// tbm posso passar o um valor nome passando uma informaçao ja com ele, mas ele se torna padrao 


console.log(idade)