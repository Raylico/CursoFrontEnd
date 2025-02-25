//--------------------Atv. 1------------------------
let arrayFrutas = ["maçã", "banana", "laranja", "uva"];
console.log(arrayFrutas);

console.log(arrayFrutas[1]);

arrayFrutas.push("Melancia");
console.log(arrayFrutas);

arrayFrutas.shift();
console.log(arrayFrutas);

console.log(arrayFrutas.length);

//--------------------Atv. 2------------------------
let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayNumeros);

for (let i = 0;i<arrayNumeros.length;i++){
    console.log([arrayNumeros[i]]);
}

arrayNumeros.forEach(Elemento => {
    console.log(Elemento);
});







