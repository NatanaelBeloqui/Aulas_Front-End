/*
    Formas de arredondamento:
    
    - Math.round() -> arredondamento tradicional
    - Math.floor() -> arredondamento para baixo
    - Math.ceil() -> arredondamento para cima
    - Math.trunc() -> remoção da parte decimal
*/


let numeros = [];
let numeroAleatorio = 0;

// Receber 10 números

for (let i=0; i<=10; i++) {
    numeroAleatorio = (Math.floor(Math.random() * 101));
    numeros.push(numeroAleatorio);
}

console.log(numeros)

// Calcular e imprimir a soma dos números pares
// Calcular e imprimir a soma dos números primos

function ePrimo(n) {
    if (n < 2) return false; // Números menores que 2 não são primos
    if (n === 2) return true; // 2 é primo
    if (n % 2 === 0) return false; // Números pares maiores que 2 não são primos

    // Verifica divisibilidade de 3 até a raiz quadrada de n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false; // Se for divisível por algum número, não é primo
        }
    }
    return true; // Se passou por todas as verificações, é primo
}

/*
Explicação: 
    
Caso base: Se n < 2, retorna false (ex.: 0 e 1 não são primos).
Se for 2, retorna true (o único número par primo).
Se for par e maior que 2, retorna false (pois pares maiores que 2 não são primos).
Loop de 3 até a raiz quadrada de n:
Testamos apenas números ímpares, pois os pares já foram eliminados.
Se encontrarmos um divisor, retornamos false.
Se não encontrar divisores, o número é primo e retorna true.

*/

let somaPar = 0;
let somaPrimo = 0;

for (let i=0; i<numeros.length; i++) {
    if(numeros[i] % 2 == 0) {
        somaPar = somaPar + numeros[i]
    }
    if(ePrimo(numeros[i]) == true) {
        somaPrimo = somaPrimo + numeros[i];
    }
}

console.log(`A soma dos números pares é: ${somaPar}`);
console.log(`A soma dos números primos é: ${somaPrimo}`);