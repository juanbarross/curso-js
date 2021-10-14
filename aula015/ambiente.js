var num = [5, 8, 9, 3]
num.push(1) //.push() tem que vir primeiro do que o .shot(), se não o número acrescentado na última posição
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
var pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor está na posição ${pos}`)
}