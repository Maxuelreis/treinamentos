
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift( ));
var y = parseFloat(lines.shift( )).toFixed(1);

console.log(x, y);

var consumo = parseFloat(x / y).toFixed(3); 

console.log(consumo+" km/l")

// x = distancia percorrida em km
// y = combustível c/ um, digito após ponto
// calcular consumo com 3 casas apos ponto