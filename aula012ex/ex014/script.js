function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia :)
        img.src = 'img-dia.png.jpg'
        document.body.style.background = '#FFD550'            
    }else if (hora >= 12 && hora <= 18) {
        //Boa Tarde :)
        img.src = 'img-tade.png.jpg'
        document.body.style.background = '#F3D191'
    }else {
        //Boa Noite :)
        img.src = 'img-noite.png.jpg'
        document.body.style.background = '#515154'
    }
}