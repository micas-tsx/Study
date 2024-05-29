let log = new Log(document.querySelector('.log'))

let char = new Sorcerer('RamiBuraka')

let monster = new BigMonster() 

// da as informaçoes pro cenario da luta, passando o char e o monstro e pra onde eles vão
const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()

