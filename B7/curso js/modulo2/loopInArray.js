let cores = ['preto', 'branco', 'azul', 'vermelho']
// ideia, mostrar todo os items
// como vamos fazer?
// loop pra mostrar todos eles

for(let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}
// pode escrever assim tbm
for(let i in cores) {
    console.log(cores[i])
}
// e assim
for(let cor of cores) {
    console.log(cor)
}