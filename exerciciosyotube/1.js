let numeros = [3, 7, 1, 9, 5]

console.log("Números no array:")
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
let soma = 0; 
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; 
}
console.log("Soma dos números:", soma);
let maiorNumero = numeros[0]; 
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
console.log("Maior número no array:", maiorNumero);


