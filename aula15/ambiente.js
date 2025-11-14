let num = [5, 8, 2, 9, 3]

num.sort() //organiza em ordem crescente dos elementos
num.push(1)
console.log(num)
console.log(`O comprimento do vetor é ${num.length}`) //mostra o comprimento
console.log(`O primeiro elemento do vetor é ${num[0]}`) //exibe o elemento selecionado

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O elemento 9 está na posição ${pos}`)
}