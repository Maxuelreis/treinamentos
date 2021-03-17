

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let x1 = parseFloat(lines.shift());
let y1 = parseFloat(lines.shift());
let x2 = parseFloat(lines.shift());
let y2 = parseFloat(lines.shift());

let distancia = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));

console.log(parseFloat(distancia).toFixed(4));
