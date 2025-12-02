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

/*
function inverterNum(num) {
  let inverso = 0;
  while (num != 0) {
    inverso = inverso * 10;
    inverso = inverso + (num % 10);
    num = Math.trunc(num / 10);
  }
  return document.writeln(inverso);
}

inverterNum(prompt("Digite um número:"));
*/

/*
function estaEndividado(receita, gastos) {
  if (receita > gastos) {
    return "Está no AZUL!";
  } else {
    return "Está no VERMELHO!";
  }
}

let maria = estaEndividado(2000, 3500);
let joao = estaEndividado(5000, 4500);

console.log(maria);
console.log(joao);
*/

/*
function contaVogais(texto) {
    var cont = 0;
    texto=texto.toLowerCase();
    for(var i=0; i<texto.length; i++){
        if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)=="u"){
            cont++; //Incrementa a contagem de vogais
        }
    }
    return document.writeln(`A palavra '${texto}' tem ${cont} vogais.`);
}

contaVogais(prompt('Digite uma palavra:'))
*/

/*
function montante(capital, tempo, taxa) {
    const retorno = capital * (1 + Number(taxa)) ** tempo
    return document.write(`R$${retorno.toFixed(2)}`)
}

montante(prompt ('Digite o capital inicial:'), prompt('Digite o tempo de investimento (em meses):'), prompt('Digite a taxa de juros mensal:'))
*/

const estoque = {
  arroz: 2,
  feijao: 2,
  leite: 0,
  macarrao: 5,
  cafe: 0,
  farinha: 0,
};

function emFalta() {
  const faltando = [];

  for (const produto in estoque){
    if (estoque[produto] == 0) {
      faltando.push(produto)
    }
  }

  if (faltando.length === 0) {
    console.log("Nenhum produto em falta.");
  } else {
    console.log(`Produtos em falta: ${faltando}.`)
  }
  return console.log(faltando)
}

emFalta()