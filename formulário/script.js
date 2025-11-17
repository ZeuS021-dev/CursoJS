const { Children } = require("react")

function validar() {
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let pais = document.getElementById('pais')
    let num = document.getElementById('num')
    let data = document.getElementById('data')
    let padrao = document.getElementById('padrao')
    let res = document.getElementById('res')

    if (nome.value.length == 0){
        alert('[ERRO] Campo "Nome completo" é obrigatório.')
    } else if (email.value.length == 0) {
        alert('[ERRO] Campo "E-mail" é obrigatório.')
    } else if (pais.value == 'Selecione um país...') {
        alert('[ERRO] Campo "País" é obrigatório.')
    } else if (num.value.length == 0) {
        alert('[ERRO] Campo "Número de celular" é obrigatório.')
    } else if (data.value.length == 0) {
        alert('[ERRO] Campo "Data de nascimento" é obrigatório.')
    } else {
        res.style.marginTop = '20px'
        res.style.padding = '20px'
        res.style.borderRadius = '10px'
        res.style.background = 'black'
        res.style.color = 'white'
        res.style.wordWrap = 'break-word'
        res.innerHTML = '<p>Tudo ok!</p>'
        let dataFormatada = new Date(data.value).toLocaleDateString('pt-BR');
        res.innerHTML += `<p>Seu nome é: ${nome.value} <p>Seu email para contato é: ${email.value}</p> <p>Você mora em: ${pais.value}</p> <p>Seu número para contato é: ${num.value}</p> <p>Sua data de nascimento é: ${dataFormatada}.</p></p>`
        let botaoconfirm = document.createElement('input')
        botaoconfirm.type = 'button'
        botaoconfirm.value = 'Confirmar'
        res.appendChild(botaoconfirm)
        let botaocancel = document.createElement('input')
        botaocancel.type = 'button'
        botaocancel.value = 'Cancelar'
        res.appendChild(botaocancel)
        botaoconfirm.style.background = 'white'
        botaocancel.style.background = 'white'
        botaoconfirm.style.width = '145px'
        botaocancel.style.width = '145px'
        botaoconfirm.style.alignItems = 'center'
        botaocancel.style.alignItems = 'center'
        botaoconfirm.style.background = 'rgb(53, 184, 53)'
        botaocancel.style.background = 'red'
        botaoconfirm.style.color = 'white'
        botaocancel.style.color = 'white'
        botaoconfirm.style.borderRadius = '7px'
        botaocancel.style.borderRadius = '7px'
        botaoconfirm.style.padding = '10px'
        botaocancel.style.padding = '10px'
        botaoconfirm.style.marginRight = '17px'
        botaocancel.style.marginRight = '17px'
        botaoconfirm.style.marginBottom = '15px'
        botaocancel.style.marginBottom = '15px'
    }
    

}