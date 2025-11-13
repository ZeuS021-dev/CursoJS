function contar() {
    var inicio = document.querySelector('input#n1');
    var fim = document.querySelector('input#n2');
    var passo = document.querySelector('input#n3');
    var res = document.querySelector('div#res');
    
    var inicioValor = Number(inicio.value);
    var fimValor = Number(fim.value);
    var passoValor = Number(passo.value);
    
    if (isNaN(inicioValor) || isNaN(fimValor) || isNaN(passoValor) || passoValor <= 0) {
        alert('[ERRO] Valor inválido');
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = 'Contando:<br>';
        if (inicioValor < fimValor) {
            // Contagem crescente
            while (inicioValor <= fimValor) {
                res.innerHTML += inicioValor + ' 👉 ';
                inicioValor += passoValor;
            }
        } else {
            while (inicioValor >= fimValor) {
            // Contagem decrescente
                res.innerHTML += inicioValor + ' 👉 ';
                inicioValor -= passoValor;
            }
        }
        res.innerHTML += '🏁';
    }
}

