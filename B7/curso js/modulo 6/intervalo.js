function showTime() {
    // cria o new date
    let d  = new Date()

    // pega a hr, min e seg
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    // passa pra um texto as informações
    let txt = `h:${h}, m:${m}, s:${s} `
}

// cria a variavel timer
let timer

// inicia a contagem do tempo
function começar() {
    timer = setInterval(showTime, 1000)
}

// para o tempo
function parar() {
    clearInterval(timer)
}