// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let namesArray = [];

function textElement(element, text) {
    let codeHTML = document.querySelector(element);
    codeHTML.innerHTML = text;
    return;
}

function cleanInput() {
    document.getElementById("amigo").value = "";
}

function addName() {
    let name = document.getElementById("amigo").value;
    if (name === "" || name === " ") {
        textElement("h2", "Ingrese por favor un nombre");
    } else {
        namesArray.push(name);
        nameList(namesArray);
    }
    cleanInput();
}

function nameList(array) {
    let listElement = document.getElementById("listaAmigos");
    listElement.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let newElement = document.createElement("li");
        newElement.textContent = array[i];
        listElement.appendChild(newElement);
   }
}

function lottery(params) {
    cleanInput();
    if (namesArray.length<=2){
        textElement("h2", "Ingresa al menos 3 nombres para realizar el sorteo")
    } else {
        let random = Math.floor(Math.random()*namesArray.length);
        textElement("ul", `El amigo/a secreto es: ${namesArray[random]}`);
    } 
}
