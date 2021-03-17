
var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

var raio = lines.shift();
var pi = 3.14159;
var volEsfera = parseFloat((4/3) * pi * Math.pow(raio, 3)).toFixed(3);

console.log("VOLUME = " + volEsfera);