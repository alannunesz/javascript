function contar() {
var ini = document.getElementById('inicioid').value
var ate = document.getElementById('fimid').value
var passo = document.getElementById('passoid').value
var res = document.getElementById('res')

    if (ini == 0 || ate == 0 || passo == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: </br>'
        var ini = Number(ini)
        var ate= Number(ate)
        var passo = Number(passo)
        if (ini < ate) {
        for(ini;ini <= ate;ini += passo) {
            if (ini == ate) {
                res.innerHTML += ini
            } else {
                res.innerHTML += ` ${ini} &#128073 `
            }
         }
            } else {
                for(ini;ini >= ate;ini = ini - passo) {
                    if (ini == ate) {
                        res.innerHTML += ini
                    } else {
                        res.innerHTML += ` ${ini} &#128073 `
                    }
            } 
            }
    }
     
}