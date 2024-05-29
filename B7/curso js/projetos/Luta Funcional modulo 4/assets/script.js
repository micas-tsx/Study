// criação do personagem
const char  = createSorcerer('micas')
const monster = createBigMonster()
// aqui você pode escolher seu personagem
// troque depois da palavra create
// em char você pode escolher knight ou socerer
// em mosnter você pode escolher entre o little e o big monster
// pode copiar e colar depois de create: Kinght, Sorcerer, LittleMonster, BigMosnter
// em char, dentro dos parenteses você pode colocar entre as aspas o nome do seu personagem

stage.start(
    // aqui ele passa quais sao as informaçoes de fighter1 e fighter1El, fighter2 e fighter2El
    char,
    monster,
    // El
    document.querySelector('#char'),
    document.querySelector('#monster'),
)