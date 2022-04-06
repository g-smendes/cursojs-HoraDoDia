function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`fotos`)
    var data = new Date()
    var hora = data.getHours()
    var hora = 15
     //troque aqui o número 
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora <12) {
        img.src = `imagens/manha.jpg`
        document.body.style.background = `#e2cd9f`
    }else if (hora >= 12 && hora <= 18) {
        img.src = `imagens/tarde.jpg`
        document.body.style.background = `#b9846f`
    }else {
        img.src = `imagens/noite.jpg`
        document.body.style.background = `#515154`
    }
}

