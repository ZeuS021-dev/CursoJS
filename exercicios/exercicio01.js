/*
function mensagem() {
   return document.write('Bom dia, Mundo!')
}

mensagem()
*/

/*
function cubo() {
    let num = window.prompt('Digite um número a ser calculado:')
    return document.write(`Resultado: ${Number(num) ** 3}`)
}

cubo()
*/

/*
function temperatura() {
    let temp = window.prompt('Digite a temperatura (°F):')
    document.write(`${(temp - 32) / 1.8}°C`)
}

temperatura()
*/

/*
function area() {
    const base = prompt('Digite o valor da base:')
    const altura = prompt('Digite o valor da altura:')
    return document.write(`A área do triângulo é igual a ${(base * altura) / 2}m<sup>2</sup>.`)
}

area()
*/

function inverterNum(num) {
    let inverso = 0;
    while (num != 0) {
        inverso = inverso * 10;
        inverso = inverso + num % 10;
        num = Math.trunc(num/10);}
        return inverso
}

document.write(inverterNum(287));