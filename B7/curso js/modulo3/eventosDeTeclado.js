function apertou(e) {
    console.log(e.shiftKey)
        // .cod mostra qual tecla foi utilizada
        // tbm tem o .key, que é menos detalhado, por exemplo o shift n mostra se foi o deireito ou o esquerdo
        // com o Key eu posso verificar se uma tecla especifica foi ecionada por exemplo enterKey
}

/* 

function segurou() {
    console.log('segurou')
}

function soltou() {
    console.log('soltou')
}
// isso considerando que usou no html pra puxar o evento
// mas tbm pode fazr isso direto no js 
// apenas adicionar um addEventListerner() ao lugar q vc quer monitorar

document.addEventListener('keydown', apertou) //sem o on, tbm tem o press e o up

*/

const input = document.querySelector('input')
input.addEventListener('keyup', apertou)