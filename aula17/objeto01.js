let amigo = {nome: 'Flávia',
sexo: 'F',
peso: '70',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2) /*essa funcionalidade não funcionou. Que bom, assim não engordo kkkkkk*/
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)