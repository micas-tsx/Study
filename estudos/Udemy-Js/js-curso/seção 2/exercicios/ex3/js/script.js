const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; // chamou a const e mudou o html com o .innerHTML sem mexer no proprio hmtl

texto.innerHTML = '' //tirou o texto q esta ja la no hmtl
texto.innerHTML += `<p>raiz quadrada do seu número é ${numero ** 0,5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredonando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredonando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;
