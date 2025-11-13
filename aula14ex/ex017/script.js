function gerar(){
    let numero = document.getElementById('numero')
    let res = document.getElementById('tabuada')

    if (numero.value.length == 0) {
        alert('[ERRO] Valor indefinido! insira um número.')
    } else {
        let numeroValor = Number(numero.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c ++){
            let item = document.createElement('option')
            item.text = `${numeroValor} x ${c} = ${numeroValor*c}`
            res.appendChild(item)
        }

    }

}