import * as fs from 'fs'; // Precisa instalar o node

fs.writeFile('cof.txt', 'GRRRRRRRRR', { 'flag' : 'w'}, function(err) {
    if (err) throw err;
        console.log('Success');
});

fs.readFile('cof.txt', { 'flag' : 'r'}, function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})