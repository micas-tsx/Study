// define aquela variavel com só aquele valor
let nome2: 'micas'  = 'micas'
// pra q krls isso serve????????????????????????????????


function mostrarTexto(
    texto: string, 
    alinhamento: 'right' | 'left' | 'center'
    // esse é um exemplo do como usar type literal
    // pq só posso receber esses caras, fora isso eu n quero receber
) {
    return `<div style="text-aling: ${alinhamento}">${texto}</div>`
}

mostrarTexto('Hello World', 'center')
mostrarTexto('micas', 'right')
mostrarTexto('cara', 'left')

// ent se por exemplo eu colocar isso aqui
// mostrarTexto('micas', 'sla')
// ele da erro

type Opcoes = {
    width: number,
    height: number
}
function configurar(props: Opcoes | 'auto') {
// usar o type literal do auto pra só receber eles
}

configurar({width: 500, height: 300}) //isso pode
configurar('auto') //isso tbm