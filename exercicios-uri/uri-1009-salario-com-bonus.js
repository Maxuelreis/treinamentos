var input = require("fs").readFileSync("/dev/stdin", "utf8");

var values = input.split("\n");

var nome = parseInt(values.shift());
var salario = parseInt(values.shift());
var vendas = parseFloat(values.shift());

var comissao = vendas * 0.15;

var total = salario + comissao;

console.log("TOTAL = R$ " + parseFloat(total).toFixed(2));
