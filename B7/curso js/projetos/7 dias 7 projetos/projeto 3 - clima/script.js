document.querySelector('.busca').addEventListener('submit', async (event) => {
    // preventDefalut() -> previne o comportamento padrão de, algo
    // no caso estamos previnindo q seje mandado o formulario
    event.preventDefault()

    // pega o valor do input
    let input = document.querySelector('#searchInput').value

    if(input !== '') {
        clearInfo()
        showWarning('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=1eec5256a174c3e09a354753467befb6&units=metric&lang=pt_br`
        
        // manda esperar chegar os resultados da requisição
        let results = await fetch(url)
        // espera chegar e transforma em json
        let json = await results.json()

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.wheather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wing.deg
            })
        } else {
            clearInfo()
            showWarning('Cidade não encontrada')
        }
    }

})

function showInfo(json) {
    // showWarning('')

    document.querySelector('.resultado').style.display = 'block'

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ªC</sup>`
    document.querySelector('.windInfo').innerHTML = `${json.windSpeed} <span>Km/H</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg) `
} 
function clearInfo() {
    showWarning('')
    document.querySelector('.resultado').style.display = 'none'
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}
