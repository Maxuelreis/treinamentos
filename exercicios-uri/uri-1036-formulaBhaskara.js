/** 
 * Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara.
 * Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel 
 * calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

 ## Entrada:
  * Leia três valores de ponto flutuante (double) A, B e C.

 ## Saída:
  * Se não houver possibilidade de calcular as raízes, 
  * apresente a mensagem "Impossivel calcular". Caso contrário, 
  * imprima o resultado das raízes com 5 dígitos após o ponto, 
  * com uma mensagem correspondente conforme exemplo abaixo. 
  * Imprima sempre o final de linha após cada mensagem.
  * 
 ## Fórmula:
   *  x = (-b +- V b**2 - 4ac)/2a
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A = lines.shift( );
let B = lines.shift( );
let C = lines.shift( );

let D = Math.pow(B, 2) - (4 * A * C);

if (D >= 0 && A > 0) {
  let R1 = (- B + Math.sqrt(D)) / (2 * A);

  let R2 = (- B - Math.sqrt(D)) / (2 * A);

  console.log(`R1 = ${parseFloat(R1).toFixed(5)}`);
  console.log(`R2 = ${parseFloat(R2).toFixed(5)}`);   
    
    
} else {

  console.log("Impossivel calcular");

}