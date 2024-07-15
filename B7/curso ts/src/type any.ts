// o any serve para quando, em casos especificos, precisa mandar um tipo diferente do array
// dai tipamos o array como any

// let nomess: string[] = ['micas', 'bob', 'aquele la']
// esse é um array de string

let nomess: any = ['micas', 'bob', 'aquele la']
// aqui ele vai receber qualquer tipo dentro dele, assim podendo misturar string, number, boolean, etc...

nomess.push(556)

// usar o any só em ultimos casos