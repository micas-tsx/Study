// adiciona um event listener no corpo do código que roda uma função quando uma tecla for acionada
document.body.addEventListener('keyup', (event) => {
    // roda a função passando o proprio evento pra saber qual tecla foi acionada e transforma em minusculo
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if(song !== '') {
        let songArray = song.split('')

        playComposition(songArray)
    }
})

// essa é a função q roda o audio e muda a cor do botao
function playSound(sound) {
    // passa para uma variavel o id dos audio la do html
    // usa o tamplate string pra pegar a letra certa, para n precisar fazer uma por uma
    let audioElement = document.querySelector(`#s_${sound}`)
    
    // aqui toca o audio
    if(audioElement) {
        // caso clique na tecla duas vezes n espera o audio acabar pra consegui rodar outro
        audioElement.currentTime = 0
        // roda o audio
        audioElement.play()
    }

    // pega a div dos quadrados com as letras do thml e passa para uma variavel
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    // confere para ver se a tecla clicada condiz com a q tem no html, caso verdadeiro roda o código abaixo
    if(keyElement) {
        // adiciona a div a classe active la do css q deixa o botao amarelo
        keyElement.classList.add('active')

        // seta o tempo para tirar a classe active para n ficar amarelo pra sempre dps de acionada
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }
}