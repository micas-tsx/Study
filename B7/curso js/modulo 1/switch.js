// condicional de varios resultados

let profissao = "..."

// bombeiro = vermelho
// policial = azul
// fiscal = verde

switch(profissao) {
    case 'bombeiro':
        console.log('sua camisa é vermelha')
        break; // -> para de rodar proucurando qual vai satisfazer, caso n satisfaça ele passa pro proximo

    case 'policial':
        console.log('sua camisa é azul')
        break;

    case 'fiscal':
        console.log('sua camisa é verde')
        break;

    default: // -> "padrão", caso n satisfaça nenhuma das alternativas, ele será o padrão de resultado. 
             // Geralmente fica no final do switch
        console.log('sua camisa é preta')
        break;
}

// ele é mt situacional, mt raro de usar