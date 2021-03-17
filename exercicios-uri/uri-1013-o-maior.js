var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = parseInt(lines.shift( ));
var B = parseInt(lines.shift( ));
var C = parseInt(lines.shift( ));

var maiorAB = (A + B + Math.abs(A - B))/2;
var maiorD3 = (maiorAB + C + Math.abs(maiorAB - C))/2;
    
console.log(maiorD3+" eh o maior");