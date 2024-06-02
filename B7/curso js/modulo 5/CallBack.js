// n vou fazer um html só pra exemplificar isso n, só pega o conceito geral

document.querySelector('#botao').addEventListener('click', () => alert('clicou no botao'))
// primeiro oq isso aqui faz?
// pega o o id do botão e faz escutador de evento nele, colocando pra quando clicar nele
// rodar uma função q aparece um alerta na tela, basicamente isso

// agr, oq o call back consiste?

//  "é uma função q eu passo pra algm, pra ele poder executar quando ele quiser"
//  agr oq eu entendi? é uma função passada pra algm q tem uma condição pra ser acionada, pra dar o callback da 
//  informação. 
// Onde se localiza o callback acima por exemplo? no evento de click
// quando ele for acionado ele vai fazer o alert na tela

// "uma função q vc manda pra algm pra executar quando for propicio"