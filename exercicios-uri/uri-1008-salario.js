var input = require("fs").readFileSync("/dev/stdin", "utf8");

var values = input.split("\n");

var number = parseInt(values.shift());
var horasTrabalhadas = parseInt(values.shift());
var valorHora = parseFloat(values.shift());

var salario = horasTrabalhadas * valorHora;

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + parseFloat(salario).toFixed(2));
