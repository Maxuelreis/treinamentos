/**Leia um valor inteiro. 
 * A seguir, calcule o menor número de notas possíveis (cédulas) 
 * no qual o valor pode ser decomposto. As notas consideradas são de 
 * 100, 50, 20, 10, 5, 2 e 1. 
 * A seguir mostre o valor lido e a relação de notas necessárias.
 * 
 * Entrada
 * 
 * O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
 * 
 * Saída
 * 
 * Imprima o valor lido e, em seguida, a quantidade mínima de notas de 
 * cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de 
 * imprimir o fim de linha após cada linha, caso contrário seu programa 
 * apresentará a mensagem: “Presentation Error”. 
 * */

 var input = require('fs').readFileSync('stdin', 'utf8');
 var lines = input.split('\n');

 let valorTotal = parseInt(lines.shift());

 console.log(valorTotal);

 let nota100 = 0;

 while(valorTotal >= 100){
    valorTotal = valorTotal - 100;
    nota100++;
}; 

 let nota50 = 0;

 while(valorTotal >= 50 && valorTotal < 100){
    valorTotal = valorTotal - 50;
    nota50++;
};

 let nota20 = 0;

 while(valorTotal >= 20 && valorTotal < 50){
    valorTotal = valorTotal - 20;
    nota20++;
};

 let nota10 = 0;

 while(valorTotal >= 10 && valorTotal < 20 ){
    valorTotal = valorTotal - 10;
    nota10++;
};

 let nota5 = 0;

 while(valorTotal >= 5 && valorTotal < 10){
    valorTotal = valorTotal - 5;
    nota5++;
};

 let nota2 = 0;
 
 while(valorTotal >= 2 && valorTotal < 5){
    valorTotal = valorTotal - 2;
    nota2++;
};


 let nota1 = 0;

 while(valorTotal >= 1 && valorTotal < 2){
    valorTotal = valorTotal - 1;
    nota1++;
};

 console.log(nota100+" nota(s) de R$ 100,00");
 console.log(nota50+" nota(s) de R$ 50,00");
 console.log(nota20+" nota(s) de R$ 20,00");
 console.log(nota10+" nota(s) de R$ 10,00");
 console.log(nota5+" nota(s) de R$ 5,00");
 console.log(nota2+" nota(s) de R$ 2,00");
 console.log(nota1+" nota(s) de R$ 1,00");


 /*
Resposta: 576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00


Resposta: 11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

Resposta: 503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

 */
 