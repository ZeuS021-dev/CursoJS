let num = document.getElementById('inputNumero')
let res = document.getElementById('areaResultados')
let lista = document.getElementById('lista')
let valores = []

function ehNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 50){
        return true
    } else {
        return false
    }
}

function jaNaLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarValor() {
    if (ehNumero(num.value) && !jaNaLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        num.value = ''
        num.focus()
        res.innerHTML = ''
    } else {
        alert("[Erro] Valor inválido ou já inserido.")
    }
}

function mostrarResultados() {
    let total = valores.length
    let menor = valores[0]
    let maior = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores){
        soma += valores[pos]
        media = soma / total

        if (valores[pos] > maior) {
            maior = valores[pos]
        }

        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
    

    res.innerHTML = `<p>No total, ${total} números foram inseridos.<p/>`
    res.innerHTML += `<p>O maior valor é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor é ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores é igual a ${soma}.<p/>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    res.innerHTML += `<p>Números ordenados em ordem crescente: ${valores.sort((a, b) => a - b)}</p>`
}
