//Crie um código que peça a idade do usuário e diga se ele é menor de idade
//-------------------------desafio 1----------------------------------
 
console.log('====Teste de Maioridade====')
var input = require('prompt-sync')()
var agora = new Date()
var anoAtual = agora.getFullYear()
var anoNascimento = Number(input("Digite seu ano de nascimento: "))
var idade = anoAtual - anoNascimento
var resultadoFinal = ``
resultadoFinal = `Sua idade é ${idade} anos `
if(idade >= 18){
    resultadoFinal += `Você atingiu a maioridade!`
}else(idade <= 18);{
    resultadoFinal += `Você é menor de idade!`
}

console.log(resultadoFinal);

//-------------------------desafio 2----------------------------------

var tabuada = Number(input("Digite a tabuada que quer: "))
for(let i = 0; i<=10 ; i++){
    console.log(`${tabuada} x ` + i +" = "+(i*tabuada))
}

//-------------------------desafio 3----------------------------------







