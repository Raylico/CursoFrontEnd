//Script para a lista de tarefas usando o DOM

document.body.style.backgroundColor = "gray";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa");//input
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.color = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "aliceblue";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";
mudarCor.style.padding = "6px 10px";
mudarCor.style.margin = "5px";
mudarCor.style.color = "white";
mudarCor.style.background = "green";
//lógica de funcionamento

//criar o ouvinte para a tarefa
btnEnviar.addEventListener( 
    "click", criarTarefa       
    );
    
    function criarTarefa(){
        let texto = tarefa.value.trim();
        if(texto === ""){
            alert("Digite uma tarefa");
            return;
        }
        //se não tiver vazio
        let li = document.createElement("li");
        li.innerHTML = texto+'<button onclik="removeTarefa(this)" class="btnRemove">Remover</button>';
        //adicionar li -> ul
        let ul = document.getElementById("listaTarefas");
        ul.appendChild(li);
        //apagar o valor do input
        tarefa.value = "";
    }

    //function remover
    function removeTarefa(botao){
        botao.parentElement.remove();
    }

document.getElementById("mudarCor").addEventListener("click", function(){
    let cores = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});


