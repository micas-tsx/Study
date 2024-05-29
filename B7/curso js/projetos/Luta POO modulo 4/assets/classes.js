// knight ou sorcerer
// little monster ou big monster

// personagem padrão, dps mudar pra cada caracteristica
class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    // get e set pra n deixar a vida abaixar com menos de 0
    get life() {
        return this._life
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
        // verifica se a nova vida é menor q 0 e n deixa abaixar pra menos de 0
    }
}

//  ========================= PASSANDO AS CARACTERISTICAS DE CADA PERSONAGEM ========================================
class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.maxLife = this.life
        this.attack = 10
        this.defense = 8
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.maxLife = this.life
        this.attack = 16
        this.defense = 4 
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster')
        this.life = 40
        this.maxLife = this.life
        this.attack = 4
        this.defense = 4
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster')
        this.life = 120
        this.maxLife = this.life
        this.attack = 18
        this.defense = 6
    }
}

// ============================= CUIDANDO DO CENARIO DO JOGO ==============================================

class Stage {
    // aqui estamos pegando cada jogador pra saber qual é 
    constructor(fighter1, fighter2, fighet1El, fighet2El, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighet1El
        this.fighter2El = fighet2El
        this.log = logObject
    }

    start() {
        this.update()

        // Evento do botão de atacar
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        // calcular a vida pra porcentagem 
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        // pega o bar e mostra na tela o calculo acima pra deixar a barra preenchida
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        // fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        // verificação pra saber se n tem ngm morto, caso esteja vai lançar um ta batendo em morto zé
        if(attacking.life <= 0 || attacked.life <= 0 ) {
            this.log.addMessage(`Já ta batendo em defundo zé, pode parar já`)
            return
        }

        // aqui fazemos um fator aleatorio de dano
        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)

        // multiplcamos pro dano n ficar sempre fixo a um valor, pois ffica chato pra krl,
        // multiplicando o fator de dano pelo numero aleatorio que vai sair do esquema de cima
        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        // se o dano for maior q a defesa, causa dano
        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} bateu e machucou causou - ${actualAttack.toFixed(2)} de dano ao ${attacked.name}`)
        } 
        // caso contrario ele denfede o ataque e n da dano
        else {
            this.log.addMessage(`${attacking.name} atacou mas nem deu dano, BURRÃO`)
            return
        }

        if(actualAttack > attacked.life * 2) {
            this.log.addMessage(`${attacking.name} BATEU DE VDD E FEZ DÓDÓI, CRITOU GOSTOSO`)
        }

        // toda vez q atacar vai atualizar o atak
        this.update()
    }
}

class Log {
    list = []

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg) {
        this.list.push(msg)
        this.render()
    }

    render() {
        this.listEl.innerHTML = ''

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}