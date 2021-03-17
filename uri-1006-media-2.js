var input = require("fs").readFileSync("/dev/stdin", "utf8");

var values = input.split("\n");

var A = parseInt(values.shift());
var B = parseInt(values.shift());
var C = parseInt(values.shift());
var D = parseInt(values.shift());

var DIFERENCA = A * B - C * D;

console.log("DIFERENCA = " + DIFERENCA);
