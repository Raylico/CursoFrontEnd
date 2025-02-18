//calculadora Simples em JavaScrip
var prompt = require("prompt-sync")();

//funções de soma

function soma(a,b){
    return (a+b);
} 

function sub(a,b){
    return (a-b);
}

function multi(a,b){
    return (a*b);
}

function div(a, b){
    return (a/b);
}

//menu
function menu(){
    let operação;
    let numero1;
    let numero2;
    let resultado;
    console.log("=====Calculadora Simples=====");
    console.log("Escolha a operação desejada: ");
    console.log("| 1 .Soma                   |")
    console.log("| 2 .Subtração              |")
    console.log("| 3 .Multiplicação          |")
    console.log("| 4 .Divisão                |")
    console.log("=============================")
    operação = prompt();
    numero1 = Number(prompt("Informe o nº 1: "));
    numero2 = Number(prompt("Informe o nº 2: "));

    switch (operação) {
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2);
            break;
        case "3":
            resultado = multi(numero1,numero2);
            break;
        case "4":
            if (numero2==0) {
                console.log("Não dividirás por zero");
                resultado = null;
            }else{
            resultado = div(numero1,numero2);
            break;
        }
        default:
            console.log("Operação inválida")
            resultado = null;
            break;
    }//fim do switch
    console.log ("O resultado é: "+resultado)
}

//aplicar a função menu

var continuar = true;
while (continuar) {
    menu();
    let Escolha = prompt("1. Continuar // 2. Sair")
    if (Escolha == 2) {
        continuar = false;
        console.log("Quando já me usou sai né, aprenda a fazer conta!");
    }
}










