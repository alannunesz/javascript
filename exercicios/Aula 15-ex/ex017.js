function gerar() {
    let num = document.getElementById('inum').value
    let res = document.getElementById('tabuada')
    let cont = 1
    
    while (cont <= 10) {
        let s = num * cont
        res.innerHTML += (`${num} X ${cont} = ${s}</br>`)
        cont++
        
    }

}

