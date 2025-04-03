let espectadores = [
    {'idade': 25, 'opiniao': 3},
    {'idade': 34, 'opiniao': 2},
    {'idade': 40, 'opiniao': 1},
    {'idade': 22, 'opiniao': 3},
    {'idade': 28, 'opiniao': 2},
    {'idade': 19, 'opiniao': 3},
    {'idade': 30, 'opiniao': 1},
    {'idade': 45, 'opiniao': 2},
    {'idade': 38, 'opiniao': 3},
    {'idade': 27, 'opiniao': 1},
    {'idade': 33, 'opiniao': 2},
    {'idade': 50, 'opiniao': 1},
    {'idade': 21, 'opiniao': 3},
    {'idade': 29, 'opiniao': 2},
    {'idade': 23, 'opiniao': 1}
];

let idadesOtimas = 0;
let otimos = 0;
let regular = 0;

for (i = 0; i < espectadores.length; i++) {
    if(espectadores[i].opiniao == 3) {
        idadesOtimas = idadesOtimas + espectadores[i].idade
        otimos ++;
    }

    if(espectadores[i].opiniao == 1) {
        regular ++;
    }
}

let mediaIdades = otimos > 0 ? idadesOtimas / otimos : 0;
let bom = espectadores.length - (otimos + regular);
let bomPorCento = Math.round((bom/espectadores.length) * 100);

console.log(`A média das idades que opnaram ótimo é ${Math.round(mediaIdades)} anos`);
console.log(`${regular} pessoas acharam o filme regular.`);
console.log(`${bomPorCento}% das pessoas acharam o filme bom.`);