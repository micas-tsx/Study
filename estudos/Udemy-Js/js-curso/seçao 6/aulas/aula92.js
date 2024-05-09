// Metódos uteis para objetos

/* 
Object.values
Object.entries
Object.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop')
... (spread)

// Os que ja á usei anteriormente

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
*/

const produto = { nome: 'produto', preco: 1.80 };

/* Spread

Copiar para outro obejto

const produto2 = {
    ...produto
    material :'jeans'
};

produto2.nome = 'calça';
produto2.preco = 120;

console.log(produto2)

OBS.: Além de poder adcionar mais informações dentro, pode modificar as infomrações
*/

//////////////////////////////////////////////////////////////////////////////////////////////

/* Object.assign 

Copia os dados para um outro objeto só q vazio

const produto3 = Object.assign({}, produto, { material: 'porcelana' });

produto3.nome = 'caneca';
produto3.preco = 2;


OBS.: Além de poder adcionar mais informações dentro, pode modificar as infomrações
*/

//////////////////////////////////////////////////////////////////////////////////////////////

/* Object.keys

Serve para mostrar as chaves do objeto

console.log(Object.keys(produto))

*/

/////////////////////////////////////////////////////////////////////////////////////////////

/* Object.freeze

Impossibilita de mexer no objeto

Object.freeze(produto);

*/

//////////////////////////////////////////////////////////////////////////////////////////////

/* Object.getOwnPropertyDescriptor

Ver as propriedades do objeto

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

*/

/////////////////////////////////////////////////////////////////////////////////////////////

/* Object.values / Object.entries

Mostra os valores das chaves / Mostra um array com a chave e seus valores

console.log(Object.values(produto));

console.log(Object.entries(produto));

*/