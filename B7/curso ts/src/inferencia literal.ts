function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    // ...
}

type RequestDatails = {
    url: string,
    method: 'GET' | 'POST' //tipa ele usando o litera, pra receber apenas get ou post
    // assim nao pode passar um valor diferente de get ou post, pois como é um let, 
    // eu posso mudar o valor dele dps, dadno erro no código geral
}

let req: RequestDatails = {
    url: "http://google.com", 
    method: "GET"
}

fazerRequisicao(req.url, req.method)