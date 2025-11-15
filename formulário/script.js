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
        res.innerHTML = '<p>Tudo ok!</p>'
        let dataFormatada = new Date(data.value).toLocaleDateString('pt-BR');
        res.innerHTML += `<p>Seu nome é: ${nome.value},<br> Seu email para contato é: ${email.value},<br> Você mora em: ${pais.value},<br> Seu número para contato é: ${num.value},<br> Sua data de nascimento é: ${dataFormatada}.</p>`
    }
    

}