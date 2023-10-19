let val = [8, 51, 48, 67, 24, 5,6,7]


function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

val.sort(function(a, b){return a-b})

console.log(val)
console.log(`maior valor informado foi ${val[val.length-1]}.`)
console.log(`O menor valor informado foi ${val[0]}.`)