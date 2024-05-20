// document -> todo o conteudo da tela, a partir dele a gente seleciona as coisas no hmtl

// por exemplo

document.getElementsByTagName("h1")
// volta um array com todos os h1 do html
// eu posso ja q é um array, eu posso pegar o elemento

let elementos = document.getElementsByTagName("h1")
// salvo dentro de uma variavel
elementos[0];
// chamo o item 0

document.getElementById('exemplo')
// outra forma de chamar um elemento, é pelo id q é esse exemplo

document.getElementsByClassName('botao')
// toda vez q tiver Elements, no plural, ele vai retornar um array

// tbm posso pesquisar de uma forma diferente sem especificar class, id direto no get
document.querySelector('#exemplo') // aqui ta buscando o id exemplo
// dentro do () usa como se fosse css
// usando # pra id, . pra classe e assim por diante