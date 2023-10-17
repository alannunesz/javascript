function gerar() {
    let num = document.getElementById('inum').value
    let lis = document.getElementById('ilista')
    let cont = 1
    lis.innerHTML = ''

    while (cont <= 10) {
        let s = num * cont
        let item = document.createElement('option')
        item.text = (`${num} x ${cont} = ${s}`)
        item.value = `lis${cont}`
        lis.appendChild(item)
        cont++
        
    }

}

