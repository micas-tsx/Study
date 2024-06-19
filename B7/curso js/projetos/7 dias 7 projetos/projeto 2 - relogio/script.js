let digitalElement = document.querySelector('.digital') // pega a regiao onde fica a hora digital
let sElement = document.querySelector('.p_s') //pega o ponteiro dos segundos
let mElement = document.querySelector('.p_m') //pega o ponteiro dos minutos
let hElement = document.querySelector('.p_h') //pega o ponteiro das horas

function updateClock() {
    // cria o new date
    let now = new Date()

    // pega as horas minutos e segundos para colocar na tela
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    // coloca na tela
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
    // passa essa função dentro do template string, usando o fixZero pra acertar a hora e 
    // o time dentro dele como paremtro

    // aqui fazemos o calculo para saber qual locar exato do ponteiro deve estar
    // ((360 graus / 60 segundos) * pelos segundo) - 90 , sendo os -90 pq os ponteiro começam
    // 1 um quarto do ponteiro normal, a gente só tira esses 90 graus a mais para ele ficar mais
    // correto
    let sDeg = ((360/60) * second) - 90
    let mDeg = ((360/60) * minute) - 90
    let hDeg = ((360/12) * hour) - 90
    // n multiplicamos por 24 pois o relogio só tem 12 horas, ele da duas voltas de 12

    // usa o transform para alterar o local dele na tela
    sElement.style.transform = `rotate(${sDeg}deg)`//passa o deg dps do resultado do calculo pra ficar certo no css
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

// cria uma função q coloca um zero caso algum horario seja menor q 10, para n ficar numero 
// 2, 3 ,4 -> 02, 03, 04
function fixZero(time) {
    return time < 10 ? `0${time}` : time
}

// atualiza o relogio a cada segundo 
setInterval(updateClock, 1000)
updateClock()
// passa a função no final para ela ja rodar logo no inicio da pagina, para n esperar a
// atualização do setInterval para aparecer as informações na tela