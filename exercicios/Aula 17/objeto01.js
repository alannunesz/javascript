let pessoa = {
nome: 'José',
sexo: 'M',
peso: 85.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}} 

pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)