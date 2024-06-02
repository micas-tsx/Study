// a idea geral é criar algo mais geral pra dps especificar, igual no poo kkkkkkkkk

// padrão
const defaltUser = {
    // por padrão email e nome vai ser vazio e o nivel de permissão vai ser 1
    email: '',
    name: '',
    level: 1
}

const user1 = {
    // usando os ... e o nome da variavel eu consigo puxar o padrão e alterar conforme a necessidade
    ...defaltUser,
    name: 'micas',
    email: 'pipipi@gmail.com'

    // aqui dentro tem o level q ta sendo passado de defaltUser, porém n estou mexendo nele pois eu quero q continue
    // sendo 1, caso por exemplo eu der um console.log nele vai mostrar todas as propriedades
}

const adm1 = {
    // aqui eu puxo o padrão
    ...defaltUser,
    // aqui eu passo as informações q eu quero mudar
    name: 'Adm boladones',
    email: 'popopo@gmail.com',
    level: 2
    // agr sim eu aumentei o level dele
}

// basicamente isso a herança de objetos, apenas usar o ... pra pegar os itens necessarios criados de uma forma geral