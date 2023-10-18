let val = [4,5,6,7]

function soma(s) {
    let soma = 0
    for (let pos in val) {
        if (s != val[pos]) {
            soma += val[pos]
        }
    }
    return soma
}

let som = soma(val)

console.log(`Soma: ${som}`)