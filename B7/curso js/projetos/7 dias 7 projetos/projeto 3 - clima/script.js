document.querySelector('.busca').addEventListener('submit', async (event) => {
    // preventDefalut() -> previne o comportamento padrão de, algo
    // no caso estamos previnindo q seje mandado o formulario
    event.preventDefault()

    // pega o valor do input
    let input = document.querySelector('#searchInput').value

    // confirma se oinput ta vazio
    if(input !== '') {
        // limpa a tela pra não ficar duplicado
        clearInfo()
        // mostra a mensagem de carregando enquanto n carregou as informações
        showWarning('Carregando...')

        // pega a url pra fazer a requisição pra api
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1eec5256a174c3e09a354753467befb6&units=metric&lang=pt_br`
        
        // manda esperar chegar os resultados da requisição
        let results = await fetch(url)
        // espera chegar e transforma em json
        let json = await results.json()

        // confirma se a requisição foi bem sucedida, código 200 quando isso ocorre
        if(json.cod === 200) {
            // pega todas essas infomralções
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.wheather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wing.deg
            })
            // caso contrario limpa a tela e mostra cidade n encontrada
        } else {
            clearInfo()
            showWarning('Cidade não encontrada')
        }
    }

})

// mostra na tela as informações, pega o json como parametro
function showInfo(json) {
    showWarning('')

    // aqui mostra o display das informações
    document.querySelector('.resultado').style.display = 'block'

    // aqui mostra as informações na tela, nome do lugar, temperatura e velocidade do vento
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ªC</sup>`
    document.querySelector('.windInfo').innerHTML = `${json.windSpeed} <span>Km/H</span>`

    // aqui mostra a imagem de acordo com a temperatura, muadndo o src usando template string pra mudar o icon
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    // faz o calculo pra colocar o ponteiro no lugar certo, o -90 aqui tem o msm sentido do projeto 2
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg) `
} 

// função para limpar a tela 
function clearInfo() {
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}

// função para mostrar a mensagem de carregando ou cidade n encontrada
function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}
