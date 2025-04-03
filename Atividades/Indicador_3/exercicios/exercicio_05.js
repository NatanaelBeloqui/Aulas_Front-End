let infoPessoas = [
    {'idade': 20, 'peso': 63, 'sexo': 'M'},
    {'idade': 25, 'peso': 72, 'sexo': 'F'},
    {'idade': 30, 'peso': 80, 'sexo': 'M'},
    {'idade': 22, 'peso': 55, 'sexo': 'F'},
    {'idade': 28, 'peso': 68, 'sexo': 'M'},
    {'idade': 35, 'peso': 90, 'sexo': 'M'},
    {'idade': 40, 'peso': 77, 'sexo': 'F'},
    {'idade': 18, 'peso': 50, 'sexo': 'F'},
    {'idade': 27, 'peso': 73, 'sexo': 'M'},
    {'idade': 32, 'peso': 85, 'sexo': 'F'}
]

let totalHomens = 0;
let totalMulheres = 0;
let idadeHomens = 0;
let pesoMulheres = 0;
let mediaIdadeHomens = 0;
let mediaPesoMulheres = 0;

for (let i = 0; i < infoPessoas.length; i++) {
    if(infoPessoas[i].sexo == 'M') {
        totalHomens++;
        idadeHomens = idadeHomens + infoPessoas[i].idade;
    }
    else {
        pesoMulheres = pesoMulheres + infoPessoas[i].peso;
    }
}

totalMulheres = infoPessoas.length - totalHomens
mediaIdadeHomens = totalHomens > 0 ? idadeHomens/totalHomens : 0;
mediaPesoMulheres = totalMulheres > 0 ? pesoMulheres/totalMulheres : 0;

console.log(`O total de homens é: ${totalHomens}.`);
console.log(`O total de mulheres é: ${totalMulheres}.`);
console.log(`A médias das idades dos homens é: ${mediaIdadeHomens} anos.`);
console.log(`A médias dos pesos das mulheres é: ${mediaPesoMulheres}kg.`);