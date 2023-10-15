function carregar() {
    var hrs = document.getElementById('hrs')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    hrs.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
} 