let num = [20, 1, 30, 50, 40]

num.sort()
num.push(55)
console.log(`Os vetores são: ${num}`)
console.log(`O array tem ${num.length} elementos.`)

for (let pos in num){
    console.log(`O elemento ${num[pos]} está na posição ${pos}`)
}

let pos2 = num.indexOf(30)
if (pos2 == -1) {
    console.log(`O elemento não foi encontrado.`)
} else {
    console.log(`O elemento ${num[pos2]} está na poscição ${pos2}.`)
}

