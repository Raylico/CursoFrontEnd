//declaração de uma array
let array = [];

let arrayNumeros = [1,2,3,4,5,6,7,8,9];
let arrayTexto = ["sapato", "caixa", "meia"]

//tamanho do array
console.log(arrayNumeros.length);

//acessar um elemento do array
console.log(arrayTexto[1]);

//adicionar um elemento no array
//no começo (unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto);

//no final (push)
arrayTexto.push("Chinelo");
console.log(arrayTexto);

//trocar um valor 
arrayTexto[2] = "Sandália";
console.log(arrayTexto);

//remover elementos
//do começo (shift)
arrayTexto.shift();
console.log(arrayTexto);

//no final (pop)
arrayTexto.pop();
console.log(arrayTexto);

//perocorrer um array
//percorrer o array de números
for (let i = 0;i<arrayNumeros.length;i++){
    console.log("indice["+i+"]="+[arrayNumeros[i]]);
}

//forEach (para cada)
arrayTexto.forEach(Elemento => {
    console.log(Elemento);
});

//métodos úteis em arrays
//indexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 elemento inexistente

let arrayMisto = [1, "José",true]

//splice - remover elementos da posição (no meio do array)
arrayMisto.splice(1,2);
console.log(arrayMisto);

//ooperações avançadas
//map - novo array com base em um array existente
let valores = [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter - novo array com base em um array existente
let valoresFilter = valores.filter(x => x<35);
console.log(valoresFilter);

//reduce - reduzir um array a um único valor
let soma = valores.reduce((x,y) => x+y);
console.log(soma);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

//sort - ordenar um array
let aleatorio = [7, 3, 5, 1, 4, 2, 8, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);




