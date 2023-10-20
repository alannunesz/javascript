let num = document.getElementById('inum')
let Adicionar = document.getElementById('Adicionar')
let Finalizar = document.getElementById('Finalizar')
let resultado = document.getElementById('result')
let val = []
Adicionar.addEventListener('click', add)
Finalizar.addEventListener('click', fin)

function isNumb(n) { // Verificar se o numero inserido está entre  1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
         return true
    }  else {
         return false
    }

}

function inList(n, l) { // Verificar se o numero inserido já foi adicionado ao vetor
    for (let i in l) {
        if (l[i] == Number(n)) {
            return true;
        }
    }
    return false;
}

function add() { // Adicionar o numero inserido ao vetor e exibi-lo na lista
    if (isNumb(num.value) && !inList(num.value, val)) {
            val.push(num.value)
            let res = document.getElementById('res')
            let option = document.createElement('option')
            option.innerText = (`Valor ${num.value} foi adicionado.`)
            res.appendChild(option)
            resultado.innerHTML = ('')
            num.value = ''
    } else {
        window.alert('Número inválido ou já adicionado na lista')
    }
    num.value = ''
    num.focus()
    
}

function soma(s) { // Soma dos numero inseridos
    let sm = 0
    for (let pos in val) {
        if (s != val[pos]) {
            sm += Number(val[pos])
        }
    }
    return sm
}

function fin() { // Verifica se há um valor inserido e caso tenha, retorna o total de numeros, soma dos numeros, maior e menor valor e média.
    if (val.length == 0) {
        window.alert('Insira um valor')
    } else {
        val.sort(function(a, b){return a-b})
        let tot = val.length
        let somando = soma(val)
        let media = soma(val) / val.length 
        resultado.innerHTML = (`<p>Ao todo, temos ${tot} números cadastrados.</p>`)
        resultado.innerHTML += (`<p>O maior valor informado foi ${val[val.length-1]}.</p>`)
        resultado.innerHTML += (`<p>O menor valor informado foi ${val[0]}.</p>`)
        resultado.innerHTML += (`<p>Somando todos os valores, temos ${somando}.</p>`)
        resultado.innerHTML += (`<p>A média dos valores digitados é ${media}.</p>`)
    }
      
}
