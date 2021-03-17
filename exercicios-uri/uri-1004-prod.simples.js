var input = require("fs").readFileSync("/dev/stdin", "utf8");

var values = input.split("\n");

var A = parseInt(values.shift());
var B = parseInt(values.shift());

var PROD = A * B;

console.log("PROD = " + PROD);
