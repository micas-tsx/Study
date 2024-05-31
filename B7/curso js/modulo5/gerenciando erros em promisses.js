function clicou() {
    // url alterada de proposito
    fetch('https://jsonplaceholder.typicode.com/po2sts')
        .then((response) => 
            {return response.json()}
        )
        .then((json) => 
            alert(`Titulo do primerio post: ${json[0].title}`)
        )
        // .catch é um call back que é rodado quando algo da erro no código
        .catch((error) => {
            // o parametro error(vc pode por como quiser mas normalmente é assim q é chamado), mostra qual erro deu
            // console.log(error) -> para mostrar o erro
            alert('Deu algum problema com nossos servidores')
        })
        // execução que roda indepente se deu erro ou n
        .finally(() => {
            alert('opa acabou por aqui')
        })
        // qual a pratica do finally?
        // alguns site bloqueiam os campos enquanto esta tendo requisição
        // o finally desbloqueia os campos, independente se deu erro ou n
        // geralmente n é utilizado, mas existe caso necessario
}

document.querySelector('#botao').addEventListener('click', clicou)