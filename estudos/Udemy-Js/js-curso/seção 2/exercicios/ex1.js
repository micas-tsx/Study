const nome = 'luiz otavio';
const sobreNome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let imc
let anoNascimento 

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

// template string: para chamar o valor da constante/let:${} frase envoltar de crase: ``

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${alturaEmM} de aultura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento );