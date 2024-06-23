//  DADOS INICIAIS
let currentQuestion = 0
let correctAnswer = 0

showQuestion()

// EVENTOS

document.querySelector('.scoreArea button').addEventListener('click', reset)

//  FUNÇÕES
function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]

        let pct = Math.floor((currentQuestion / questions.length) * 100)

        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question
        document.querySelector('.options').innerHTML = ''

        let optionsHtml = ''
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        })
    } else {
        finishQuiz()
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswer++
    }

    currentQuestion++
    showQuestion()
}

function finishQuiz() {
    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = '100%'

    let pctAnswer = Math.floor((correctAnswer / questions.length) * 100)

    document.querySelector('.scorePct').innerHTML = `Acertou ${pctAnswer}%`
    document.querySelector('.scoreText2').innerHTML = `Você acertou ${correctAnswer} de ${questions.length}`

    if(pctAnswer == 0) {
        document.querySelector('.scoreText1').innerHTML = 'kkkk ai malou ladrão, estuda e tenta dnv dps'
    } else if(pctAnswer <= 30) {
        document.querySelector('.scoreText1').innerHTML = 'Cê ta ruim heim man, estuda mais'
        document.querySelector('.scorePct').style.color = '#FF0000'
    } else if(pctAnswer >= 30 && pctAnswer < 70) {
        document.querySelector('.scoreText1').innerHTML = 'ja ta bão, mas pode melhorar mais'
        document.querySelector('.scorePct').style.color = '#FFFF00'
    } else if(pctAnswer >= 70 && pctAnswer < 90) {
        document.querySelector('.scoreText1').innerHTML = 'Você é ja é quase deus do js pqp'
        document.querySelector('.scorePct').style.color = '#0D630D'
    }
}

function reset() {
    currentQuestion = 0
    correctAnswer = 0
    showQuestion()
}