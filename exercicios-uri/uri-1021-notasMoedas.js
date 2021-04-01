/**
 * Leia um valor de ponto flutuante com duas casas decimais. 
 * Este valor representa um valor monetário. A seguir, calcule 
 * o menor número de notas e moedas possíveis no qual o valor 
 * pode ser decomposto. 
 * As notas consideradas são de 100, 50, 20, 10, 5, 2. 
 * As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
 * A seguir mostre a relação de notas necessárias.

 * Entrada
    => O arquivo de entrada contém um valor de ponto flutuante 
       N (0 ≤ N ≤ 1000000.00).

 * Saída
    => Imprima a quantidade mínima de notas e moedas necessárias 
    para trocar o valor inicial, conforme exemplo fornecido.

 ## Obs: Utilize ponto (.) para separar a parte decimal.
 */


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = lines.shift();

let notas100 = 0;
while (valor >= 100){
    valor = valor - 100;
    notas100++;
 }


let nota50 = 0;
while (valor >= 50 && valor < 100){
    valor = valor -50;
    nota50++;
}


let nota20 = 0;
while(valor >= 20 && valor < 50){
   valor = valor - 20;
   nota20++;
}

let nota10 = 0;
while (valor >= 10 && valor < 20){
   valor = valor - 10;
   nota10++;
}

let nota5 = 0;
while(valor >= 5 && valor < 10){
    valor = valor - 5;
    nota5++;
}


let nota2 = 0;
while (valor >= 2 && valor < 5){
    valor = valor - 2;
    nota2++;
}

let moeda1r = 0;
while (valor >= 1 && valor < 2){
    valor = valor - 1;
    moeda1r++;
}


let moeda50c = 0;
while(valor >= 0.5 && valor < 1){
    valor = valor - 0.5;
    moeda50c++;
}


let moeda25c = 0;
while(valor >= 0.25 && valor < 0.5){
    valor = valor - 0.25;
    moeda25c++;
}


let moeda10c = 0;
while(valor >= 0.1 && valor < 0.25){
    valor = valor - 0.1;
    moeda10c++;
}


let moeda5c = 0;
while(valor >= 0.05 && valor < 0.1){
    valor = valor - 0.05;
    moeda5c++;
}


let moeda1c = 0;
valor = valor + 0.001;
while(valor >= 0.01 && valor < 0.05){
    valor = valor - 0.01;
    moeda1c++;
}

console.log("NOTAS:");
console.log(`${notas100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de RLeia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Entrada
Quatro números inteiros A, B, C e D.

Saída
Mostre a respectiva mensagem após a validação dos valores.$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${moeda1r} moeda(s) de R$ 1.00`);
console.log(`${moeda50c} moeda(s) de R$ 0.50`);
console.log(`${moeda25c} moeda(s) de R$ 0.25`);
console.log(`${moeda10c} moeda(s) de R$ 0.10`);
console.log(`${moeda5c} moeda(s) de R$ 0.05`);
console.log(`${moeda1c} moeda(s) de R$ 0.01`);