var amigo = {nome: 'Letícia', 
sexo: 'F', 
peso: 80, 
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(6)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)