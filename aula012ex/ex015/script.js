function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    // se tiver vazio ou colocou um data  maior que a atual
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[DEU ERRO] Verifique os dados colocados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        //mesma coisa de <img id="foto">
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'bebe-homem.jpg')
            }
            else if (idade >= 12 && idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-meiaidade.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'velho.jpg')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            }
            else if (idade >= 12 && idade < 30) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher-meiaidade.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}