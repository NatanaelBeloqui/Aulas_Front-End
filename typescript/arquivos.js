"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs"); // Precisa instalar o node
fs.writeFile('cof.txt', 'GRRRRRRRRR', { 'flag': 'w' }, function (err) {
    if (err)
        throw err;
    console.log('Success');
});
fs.readFile('cof.txt', { 'flag': 'r' }, function (err, data) {
    if (err)
        throw err;
    console.log(data.toString());
});
fs.writeFileSync('cof.txt', 'miau miau', { 'flag': 'w' });
var arquivo = fs.readFileSync('cof.txt');
console.log(arquivo.toString());
