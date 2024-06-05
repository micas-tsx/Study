let d = new Date(2020, 5,10)

d.setDate( d.getDate() + 30 )

// .setFullYear(2026), .setMounth(), .setDay(), .setHour(), ..... -> servem para alterar o ano, mes, dia ...
// .setDate( d.getDate() + 5 ) -> serve pra ver qual vai ser o dia somando ou diminuindo um pouco o prorio dia
// por exemplo, qual vai ser o dia daqui 6 dias "d.geDate + 6"
// tbm posso fazer para horas

let novoValor = d

console.log(novoValor)