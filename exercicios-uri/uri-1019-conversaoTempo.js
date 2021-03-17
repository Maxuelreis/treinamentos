/**
 * Leia um valor inteiro, que é o tempo de duração em segundos 
 * de um determinado evento em uma fábrica, e informe-o expresso 
 * no formato horas:minutos:segundos.

Entrada:
 * O arquivo de entrada contém um valor inteiro N.

Saída:
 * Imprima o tempo lido no arquivo de entrada (segundos), 
 * convertido para horas:minutos:segundos, conforme exemplo fornecido.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = lines.shift();
console.log(valor);

let horas = 0;

 while (valor > 60){
     valor = valor-60;
     horas++;
     horas= horas/60;  
};

console.log(horas);

// let minutos =  / 60;
// console.log(minutos);

// let segundos = resto dos minutos / 60;
// console.log(segundos);
