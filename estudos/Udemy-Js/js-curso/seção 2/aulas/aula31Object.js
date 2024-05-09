//uso de chaves torna um objeto
 
/*const pessoa1 = {
    nome:"luiz", //valores
    sobrenome:"miranda", //valores
    idade: 25 //valores
};*/
                    //parametros
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

                            //argumentos
const pessoa1 = criaPessoa('luiz', 'otavio', 21)