/*
function somar(x, y) {
    return x + y
}

uma função normal
*/

// aqui como se contrói uma arrow function

const somar = (x, y) => {
    return x + y;
}

// fica dentro d uma variavel, seguida pelo nome = ('parametros') => {'código'}

// sendo => a arrow q da nome a função

// sendo q ppode ficar mais resumido ainda, porém tem um detalhe
// ele n pode ter mais de uma linha de código

//  const somar = (x, y) => x + y     , sem abrir as chaves se n, n pega

// se tiver um parametro só n precisar usar (), simpliciando mais ainda

// const sobrenome = sob => 'micas' + sob

console.log(somar(10, 15))