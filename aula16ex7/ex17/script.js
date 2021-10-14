var num = document.getElementById('txtn')
var lista = document.getElementById('list')
var res = document.getElementById('res')
var valorees = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf (Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionarr () {
    if(isNumero(num.value) && !inLista(num.value, valorees)) {
        valorees.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else {
        window.alert('Número Inválido. Digite novamente ;)')
    }
    //Os valores se apagam quando vc clica para colocar outro n°
    num.value = ''
    num.focus() 
}

function finalizarr() {
    if(valorees.length == 0) {
        valorees.push(Number(num.value))
        var item = document.createElement('option')
        item.innerHTML = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        var total = valorees.length
        //o maior e o menor número é o primeiro
        var maior = valorees[0]
        var menor = valorees[0]
        var soma = 0
        var media = 0
        for(var pos in valorees) {
            soma += valorees[pos]
            if (valorees[pos] > maior)
            maior = valorees[pos]
            if (valorees[pos] < menor)
            menor = valorees[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadrastados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<pA média dos valores digitados é ${media}.</p>`
        //mesma coisa:
        /*res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.`*/
        
    }
}


/*function adicionarr() {
    if(num.value <= 0 || num.value > 100) {
        window.alert('Número Inválido. Digite novamente ;)')
    }else {
        var n = Number(num.value)
        var item = document.createElement('option')
        item.innerHTML = `Valor ${n} adicionado.`
        lista.appendChild(item)
    }
    //Os valores se apagam quando vc clica para colocar outro n°
    num.value = ''
    num.focus() 
}*/

