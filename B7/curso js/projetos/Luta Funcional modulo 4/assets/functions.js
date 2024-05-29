//=============================  CRIAR OS PERSONAGENS  ===========================================

// personagem padrão / modelo padrão
const defaltCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

// personagens
const createKnight = (name) => {
    return {
        ...defaltCharacter,
        name: name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaltCharacter,
        name: name,
        life: 80,
        maxLife: 80,
        attack: 16,
        defense: 4
    }
}

// monstros
const createLittleMonster = () => {
    return {
        ...defaltCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaltCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 18,
        defense: 6
    }
}

//===============================================  CENÁRIO  =====================================================

const stage = {
    // pega os lutadores e seus elementos
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    // passa as quem vai ser oq e adiciona o evento do botão atacar
    start(fighter1, fighter2, fighter1El, fighter2El) {
        // cria as informações pra ser passada dentro do script
        this.fighter1 = fighter1,
        this.fighter2 = fighter2,
        this.fighter1El = fighter1El,
        this.fighter2El = fighter2El

        // pega o attack buton direcionado ao elemento e coloca um escutador de evento a ele, q quando clicado roda a função doAttack fazendo o primerio bater no segundo
        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        // aqui faz o inverso do segundo
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    
        this.update()
    },

    update() {
        // fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life) / (this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        // fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life) / (this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },

    doAttack(attacking, attacked) {
        // ifzinho só pra parar de rodar o dano caso alguem esteje morto
        if (attacking.life <= 0 || attacked.life <= 0) {
            log.addMessage('Já morreu, pode parar')
            return
        }

        // calculo pra deixar a defesa e o dano aleatorio
        const attackFactor = (Math.random() * 2).toFixed(2)
        const defenseFactor = (Math.random() * 2).toFixed(2)

        const actualAttack = attacking.attack * attackFactor
        const actualDefense = attacked.defense * defenseFactor

        // sistema de defesa e ataque
        // se o dano foi maior q a defesa ele causa dano, caso contrario ele defende e n da dano
        if(actualAttack > actualDefense) {
            // subtrai da vida o dano causado
            attacked.life -= actualAttack
            // verificação pra vida n ficar menor q zero
            attacked.life = attacked.life < 0 ? 0 : attacked.life

            log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano`)
        } else {
            log.addMessage(`${attacking.name} bateu mas nem deu dano`)
        }

        this.update()
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg)
        this.render()
    },

    render() {
        const logEl = document.querySelector('.log')
        logEl.innerHTML = ''

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}