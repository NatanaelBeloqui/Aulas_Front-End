let pessoas = [
    { nome: "Carlos", salario: 1500 },
    { nome: "Ana", salario: 700 },
    { nome: "Bruno", salario: 1800 },
    { nome: "Mariana", salario: 1200 },
    { nome: "Fernanda", salario: 2000 },
    { nome: "Roberto", salario: 900 },
    { nome: "Juliana", salario: 1700 },
    { nome: "Gustavo", salario: 1100 },
    { nome: "Patrícia", salario: 300 },
    { nome: "Ricardo", salario: 1950 }
];
    

for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].salario <= 280) {
        pessoas[i].salario = pessoas[i].salario * 1.20;
    } else if (pessoas[i].salario < 700) {
        pessoas[i].salario = pessoas[i].salario * 1.15;
    } else if (pessoas[i].salario < 1500) {
        pessoas[i].salario = pessoas[i].salario * 1.10;
    } else {
        pessoas[i].salario = pessoas[i].salario * 1.05;
    }
}

console.log(pessoas);