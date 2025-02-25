//Manipulação de String (cadeia de caracteres)

let texto = "Aula de JavaScript";

//contar quantos caracteres tem essa variável
console.log(texto.length); //18

//transformar em maiúsculo eminúsculo
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

//partes da string
console.log(texto.substring(0,4)); //imprime a palavra Aula (ele vai até o primeiro caractere que eu não quero, no caso o "espaço")
console.log(texto.slice(-10));

//Substituindo Parte da String
let texto2 = (texto.replace("Java","Type"));
console.log(texto2);
//ou
console.log(texto.replace("JavaScript", "ECMAScript")); // "ECMAScript"

//tesoura(trim) - Removendo Espaços no Início e Fim, nunca do meio
let texto3 = "   JavaScript   ";
console.log(texto3);
console.log(texto3.trim());

//Dividindo uma String (split) ele cria um vetor com as palavras separadas
let linguagens = "JavaScript, Python, PHP, C++, Java";
let arrayLinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(arrayLinguagens);

//desafio

let desafio = "Bom dia com muita alegria";
let solucaoDesafio = desafio.replaceAll(" ","");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);




