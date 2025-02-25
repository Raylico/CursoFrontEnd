//Funções Matemáticas

const { match } = require("assert");

//SQRT e POW (Quadrado e Potência)

//calcular a raiz quadrada de 25
console.log(Math.sqrt(25)); 

//calcular potência de um n° pelo outro
console.log(Math.pow(7,2)); //7² = 49
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); // ³√27 = 3

//funções de arredondamento 
console.log(Math.round(4.7));//7
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4

//Números aleatórios 
console.log(Math.random());//gerar um número entre zero e um 
console.log(Math.random()*1000);//gerar um número entre 0 a 999

//valor absoluto
console.log(Math.abs(-10)); //10

//Mínimos e Máximos
console.log(Math.min(1,2,3,4,5,6,7,8,9)); //1
console.log(Math.max(1,2,3,4,5,6,7,8,9)); //9