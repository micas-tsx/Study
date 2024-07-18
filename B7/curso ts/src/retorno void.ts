// retorno void é quando uma função n retorna nada efetivamente, uma string ou number, boolean sla
// geramente são funçoes q mudam coisa na tela essas coisas

function removerElemento(el: HTMLElement) {
    if(el.classList) {
        return
    }

    el.remove()
}
// essa por exemplo é uma funçãoq retorna void, n tem nada para retornar
// tbm posso tipar ela como void tbm

// agr tem duas formas de retorno void
// 1: uma praticamente força e n recebe nada q n seja void
// 2: a outra pensa algo mais como, "po isso aqui é void, mas se vier algo ta bom tbm"

type QualquerFuncao = () => void
// quando vc tipa por fora assim e usa essa base é o segundo caso

const algo: QualquerFuncao = () => {
    return 'bobs'
}

// agr se eu fizer assim

const algo2 = (): void => {return} // 'bobs' caso eu coloque essa string vai dar problema pq ele ta retornando algo difernte de void