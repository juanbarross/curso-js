var idade = 12
if (idade < 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) { //|| == ou
        console.log('Voto opcional.')
} else if (idade >= 18) {
    console.log('Voto obrigatório.')
}