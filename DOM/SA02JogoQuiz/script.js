// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximoElement = document.getElementById("proximo");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do arquivo json 
fetch("perguntas.json")
  .then(response => response.json())
  .then(data => {
    perguntas = data;
    mostrarPergunta();
  }).catch(error => console.error("Error ao carregar perguntas: ", error));

//criar a função para carregar as perguntas no html
function carregarPerguntas(){
    
}










