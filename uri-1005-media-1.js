var input = require("fs").readFileSync("/dev/stdin", "utf8");

var values = input.split("\n");

var A = parseFloat(values.shift()).toFixed(1);
var B = parseFloat(values.shift()).toFixed(1);

var MEDIA = (A * 3.5 + B * 7.5) / 11;

console.log("MEDIA = " + parseFloat(MEDIA).toFixed(5));
