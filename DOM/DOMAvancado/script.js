//adicionar elementos avançados com DOM
//contruir um cabeçalho com DOM(header)

let header = document.createElement("Header");
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);
document.body.style.margin = "0";

//adicionar elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Arial";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];
//adicionar iens na nav 
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});

