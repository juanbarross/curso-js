var valores = [1, 2, 3, 4, 5, 6]
console.log(valores)

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}


//Os dois são a mesma coisa
/*
for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}*/
