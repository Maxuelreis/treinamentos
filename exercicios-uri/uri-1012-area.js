var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split(" ");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var areaDoTriangulo = parseFloat((A * C) / 2).toFixed(3);

var areaDoCirculo = parseFloat(3.14159 * Math.pow(C, 2)).toFixed(3);

var areaDoTrapezio = parseFloat(((A + B) * C) / 2).toFixed(3);

var areaDoQuadrado = parseFloat(Math.pow(B, 2)).toFixed(3);

var areaDoRetangulo = parseFloat(A * B).toFixed(3);

console.log("TRIANGULO: "+areaDoTriangulo);
console.log("CIRCULO: "+areaDoCirculo);
console.log("TRAPEZIO: "+areaDoTrapezio);
console.log("QUADRADO: "+areaDoQuadrado);
console.log("RETANGULO: "+areaDoRetangulo);