let pessoa = {
    nome: 'micas',
    sobrenome: 'abud',
    idade: 18,
    social: {
        insta: 'micas.tsx',
        linkedin: 'micael'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }  
}

// essa é a desconstrução do objeto, transformando eles em uma variavel
let { nome:pessoaNome, sobrenome, idade = 0 } = pessoa 
// -> passa dentro por uma variavel e dentro de chaves os itens q vc quer pegar, e após a virgula o objeto q vai 
// ser tirado as informações

// normalmente a variavel vai ter o nome do item do objeto, e podemos alterar usando o : e o nome logo após

// pode passar um valor padrão pra caso um venha sem informaçao, por exemplo caso puxe de um banco de dados e a 
// pessoa veio sem idade, pode-se passar um valor padrao
