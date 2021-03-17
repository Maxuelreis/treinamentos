var input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

var peca1 = lines.shift( ).split(" ");
var peca2 = lines.shift( ).split(" ");

var qdtpecas1 = peca1.slice(1, 2);
    qdtpecas1 = qdtpecas1.shift( );
var valpeca1 = peca1.pop();

var qdtpecas2 = peca2.slice(1,2);
    qdtpecas2 = qdtpecas2.shift( );
var valpeca2 = peca2.pop();

var valortotal = parseFloat((valpeca1 * qdtpecas1) + (valpeca2 * qdtpecas2)).toFixed(2);

console.log("VALOR A PAGAR: R$ " + valortotal);

