function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gen = ''
        if (sexo[0].checked) {
            gen = 'Homem'
        } else {
            gen = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sexo: ${gen} </br> Idade: ${idade}`
        
    }
}