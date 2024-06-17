async function enviar() {
    // aqui seleciona a quantidade de arquivos sendo mandados 
    let arquivo  = document.getElementById('arquivo').files[0]

    // tem q usar o FormData para passar as informações do arquivo 
    let body = new FormData()
    // passa um titulo pra ele tbm
    body.append('title', 'sla')
    // aqui passa ele pra dentro do body, usando o titulo de arquivo para ficar mais facil
    body.append('arquivo', arquivo)

    let req = await fetch('https://www.meusite.com.br/upload', { 
        // req de envio é do metodo post
        method: 'POST',
        // o body q esta sendo passado é aquela variavel com o form data
        body: body,
        // aqui muda o tipo do conteudo q vai ser enviado
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}