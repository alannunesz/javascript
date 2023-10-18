let num = document.getElementById('inum')
let Adicionar = document.getElementById('Adicionar')
let Finalizar = document.getElementById('Finalizar')
let teste = document.getElementById('teste')
let val = []
let mai = 1
let men = 999
Adicionar.addEventListener('click', add)
Finalizar.addEventListener('click', fin)

function add(){
    if (num.value > mai){
        mai = num.value
    } else if (num.value < men){
        men = num.value
    }

    if (num.value == 0 || num.value > 100) {
        window.alert('Insira um valor válido')
    } else {
        val.push(num.value)
        let res = document.getElementById('res')
        let option = document.createElement('option')
        option.innerText = (`Valor ${num.value} foi adicionado.`)
        res.appendChild(option)
    }
}

function soma(s) {
    let sm = 0
    for (let pos in val) {
        if (s != val[pos]) {
            sm = sm + Number(val[pos])
        }
    }
    return sm
}


function fin() {
    let tot = val.length
    let somando = soma(val)
    let media = soma(val) / val.length 
    teste.innerHTML = (`Total: ${tot} maior: ${mai} menor: ${men} soma:${somando} media: ${media}`)
    
}
