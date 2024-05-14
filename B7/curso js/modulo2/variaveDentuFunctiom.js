//  VARIAVEL DENTRO DA FUNÇÃO

/* function add() {
     let count = 0;   nesse caso ele ta em escopo local
     count++
 }

 add() chama a função somando 1 a count
 add()
 n functionaria pois o count ta dentro da funçao e n fora
 agr se fizermos assim
*/

let count = 0 // escopo global

function add() {
    count++
}

add()
add()

// resumo da aula:

// escopo global = fora da função
// escopo local = dentro da função
// prioridade caso tenha duas variaveis com o mmsm nome?  1 global,  2 local