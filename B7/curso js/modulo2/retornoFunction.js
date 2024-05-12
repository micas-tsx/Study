// porra tendi nada
// mas o return acaba o function direto, ignorando todo o conteudo apos ela
// KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK

function nomeCompleto(nome, sobrenome) {
    return `${nome} + ${sobrenome}` ;
}

// msm rodando a função por fora n faz nada pq tem q roda em outro lugar nessa situação
// mó trampo pra nada, afinal n serve de porra nehuma KKKKKKKKKKKKKKKKKKKKKKKK


// =========================================== return condicional ==============================

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true; // esse return n é da function ent ta d boa, n vai parar ela do nada sem rodar o de baixo
    } else {
        return false;
    }
};

let idade = 10 // aqui define a idade 
let verificacao = maiorDeIdade(idade) // aqui ele pega a função com o dado da idade passado pelo paramentro e joga 
                                      // dentro de uma variavel


// aqui ele roda a verificação, tendo uma condicional pra ver se é true ou false, dando uma resposta dependendo do resultado   
if(verificacao) {
    console.log("maior de idade")
} else {
    console.log("menor de idade")
}