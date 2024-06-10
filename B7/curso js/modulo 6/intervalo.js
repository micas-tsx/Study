// cria a variavel timer
let timer

// inicia a contagem do tempo
function começar() {
    timer = setInterval(showTime, 1000)
    // mostra a atualização do tempo a cada 1000ms,vulgo 1 segundo
}

// para o tempo
function parar() {
    clearInterval(timer)
}
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
