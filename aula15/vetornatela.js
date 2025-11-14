let valores = [2, 5, 1, 7]
valores.sort()

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
