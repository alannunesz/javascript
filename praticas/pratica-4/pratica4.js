let vet = []
let valor = (20000)
vet[0] = valor

for (let pos = 1; pos <6; pos++) {
    valor /= 2
    vet.push(valor)
}
console.log(vet)
