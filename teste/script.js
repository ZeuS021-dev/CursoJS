function tabuada() {
    let n1 = document.querySelector('input#n1')
    let select = document.getElementById('tabuada')

    if (n1.value.length == 0) {
        alert('[ERRO] Impossível gerar, insira um número.')
    } else {
        let n1Valor = Number(n1.value)
        select.innerHTML = '<option>Digite um número acima...</option>'
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n1Valor} x ${c} = ${n1Valor*c}`
            select.appendChild(item)
        }
    }
}
