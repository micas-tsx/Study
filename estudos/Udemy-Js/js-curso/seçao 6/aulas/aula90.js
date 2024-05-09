//Object.defineProperty() para uma unica chave | congela uma chave da função
//Object.defineProperties() para mais de uma chave

function Produto(nome, preco, estoque) {	

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor 
        writable: false, // pode alterar o valor?
        configurable: false // pode apagar reconfigurar a chave?
    });

    Object.defineProperties(this, {
        nome:{
            enumerable: true, // mostra a chave
            value: nome, // valor 
            writable: true, // pode alterar o valor?
            configurable: true // pode apagar reconfigurar a chave?
        },
        preco:{
            enumerable: true, // mostra a chave
            value: preco, // valor 
            writable: true, // pode alterar o valor?
            configurable: true  // pode apagar reconfigurar a chave?
        }
    })
}

const p1 = new Produto('camiseta', 20, 3)

console.log(Object.keys(p1)) //mostra as chaves do objeto em um array