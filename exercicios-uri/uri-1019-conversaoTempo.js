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

let hora = 0;
let minuto = 0;

 if(valor >= 3600){
    hora = parseInt(valor/3600);
};

let restoHora = valor % 3600;
  if(restoHora>=60){
    minuto = parseInt(restoHora / 60);
  }

let segundo = restoHora % 60;

console.log(`${hora}:${minuto}:${segundo}`);
