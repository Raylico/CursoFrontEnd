//estrutura de dados 

//cndicionais (if else/ switch case)
//if

var precoProduto = 150;
if (precoProduto >= 100){
    console.log("Valor a pagar: "+(precoProduto*0.9));
} else{
    console.log("Valor a pagar: "+precoProduto)
}

//Switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro")
        break;

    case 2:
        console.log("Fevereiro")
        break;

    case 3:
        console.log("Março")
        break;

        default:
            console.log("Outro mês");
        break;
}

//Estrutura de repetição

//For (Contáveis)
for(let i = 0; i<=100; i++){
    console.log(i);
}

//while (Incontáveis)

var continuar = true;  //condição de parada
var numeroEscolhido = 3;
var contador = 0;
while(continuar){ //a parada acontece quando coninuar or falso
    contador++;
    let numeroSorteado = Math.round(Math.random()*20);
    if(numeroEscolhido==numeroSorteado){
        continuar = false;
        console.log("Acertou!")
        console.log("Tentativas: "+contador);
    }
}

//Funções (Ação específica) podendo ser chamada a qualquer momento dentro o código
function ola (nome){ //function return
    return "Olá, "+nome;
}

function hello (nome){//function void
    console.log("Hello, "+nome);
}
console.log(ola("Rayssa"));
hello ("Rayssa");

