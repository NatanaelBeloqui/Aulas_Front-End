let pessoas = [
    {'nome': 'Ana', 'altura': 1.62, 'sexo': 'F'},
    {'nome': 'João', 'altura': 1.75, 'sexo': 'M'},
    {'nome': 'Maria', 'altura': 1.68, 'sexo': 'F'},
    {'nome': 'Carlos', 'altura': 1.80, 'sexo': 'M'},
    {'nome': 'Lucia', 'altura': 1.60, 'sexo': 'F'},
    {'nome': 'Paulo', 'altura': 1.82, 'sexo': 'M'},
    {'nome': 'Carla', 'altura': 1.70, 'sexo': 'F'},
    {'nome': 'Roberto', 'altura': 1.85, 'sexo': 'M'},
    {'nome': 'Fernanda', 'altura': 1.58, 'sexo': 'F'},
    {'nome': 'Ricardo', 'altura': 1.78, 'sexo': 'M'},
    {'nome': 'Juliana', 'altura': 1.67, 'sexo': 'F'},
    {'nome': 'Diego', 'altura': 1.76, 'sexo': 'M'},
    {'nome': 'Mariana', 'altura': 1.64, 'sexo': 'F'},
    {'nome': 'Gabriel', 'altura': 1.79, 'sexo': 'M'},
    {'nome': 'Sofia', 'altura': 1.63, 'sexo': 'F'}
];

let maiorAltura = 0;
let menorAltura = 1000;

for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].altura > maiorAltura) {
        maiorAltura = pessoas[i].altura;
    }
    if(pessoas[i].altura < maiorAltura) {
        menorAltura = pessoas[i].altura;
    }
}

console.log(`A maior altura é ${maiorAltura}m.`);
console.log(`A menor altura é ${menorAltura}m.`);