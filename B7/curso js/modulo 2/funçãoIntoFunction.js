let pessoa = {
    nome: 'micas',
    sobrenome: 'abud',
    idade: 18,
    // aqui vai explodir a cabeça, pega q pika
    nomeCompleto: function() {
//  nome☝
        return this.nome + ' ' + this.sobrenome
    }
    // n precisa de nome, pois o nome ja vem antes
}

// AGR SIM VEIO O CONHECIMENTO
// this chama o item q ta dentro do objeto, pois caso eu coloque nome dps do return por exemplo, eu vou criar outro nome
// BLOWING MIND WTF

console.log(pessoa.nomeCompleto()) // tem q ter o () pra executar a função, caso coloque só nomeCompleto, n vai pegar

// pode fazer com arrow function tbm, porém big detalhe, ele n vai ter acesso ao this, pois 
// arrow function é anonima, ela n tem pai (isso n foi uma piada)