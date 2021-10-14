function contar() {
    var inicial = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    //length == comprimento (quantas letras tem dentro)
    if (inicial.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar :/'
        //window.alert('Inválido. Faltam dados :/')
        
    } else {
        res.innerHTML = 'Contando: </br>'
        /*pegar o valor que tá dentro de inicial (ou fim/passo), e converter para um número*/
        var i = Number(inicial.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido :(. Considere o passo 1')
            p = 1
        }
        if(i < f) {
            //contagem sempre
            for( var c = i; c <= f; c += p) {
                res.innerHTML +=  `  ${c} \u{1F449}`
            }
       }else {
           //contage regressiva
           for(var c = i; c >= f; c-= p) {
               res.innerHTML += ` ${c} \u{1F449}`
           }
       }
       res.innerHTML += ` \u{1F3C1}`

    }    
}