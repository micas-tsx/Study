// defyneProperty -> Getter e Setters

// na função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },

        set: function(valor) {
            estoquePrivado = valor;
        }
    })
}
//const p1 = new Produto('camiseta', 20, 3);
//p1.estoque = 'valor desejado';


// na factory function
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor
        }
    }
}

const p2 = criaProduto ('camiseta');

