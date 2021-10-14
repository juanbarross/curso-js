function gerador() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número ;)')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''  //antes de começar, limpa a tabuada anterior
        while (c <= 10) { 
            //tab.appendChild == adicionar um elemento filho
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            intem.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}