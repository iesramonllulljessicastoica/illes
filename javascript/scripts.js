// les dues variables son diferents
let nom= "Ana";
let Nom="Dani";
/*
Esto es un comentario
*/
//Las constants son variables que no canvian
const G = 9.81;
const PI = 3.14;

function saluda(){
    let valor = document.getElementById("campNom").value;
    document.getElementById("resultat").innerHTML = "Hola, " + valor;

}

function comprovaLogin() {
    let usuari = document.getElementById("usuari").value;
    let password = document.getElementById("password").value;
    
    if (usuari == "admin" && password == "1234") {
        alert ("Sessió iniciada")

    }
    
    if (usuari != "admin"  && password == "1234" ) {  
        alert ("Usuari incorrecta ")
    }
    if (usuari == "admin"  && password != "1234" ) {  
        alert ("Contrasenya incorrecta ")
    }
    if (usuari != "admin"  && password != "1234" ) {  
        alert ("Contrasenya i usuari incorrecte ")
    }
}

function CalcularPrecio() {
    const precio = document.getElementById("precio").value;
    const radioSi = document.getElementById("residenteSi").checked;
    const radioNo = document.getElementById("residenteNo").checked;
    
    const FamiliaNumerosa = document.getElementById("familiaNumerosa").checked;
    const familiaNumerosaEspecial = document.getElementById("familiaNumerosaEspecial").checked;
    const familiaNormal = document.getElementById("familiaNormal").checked;
   
    if (radioSi && familiaNormal == true) {
       let precioFinal = precio * 0.25;
       alert(precioFinal);

    } 
    else if (radioSi && FamiliaNumerosa == true) {
       let precioFinal = precio * 0.2;
       alert(precioFinal);
    }
    else if (radioSi && familiaNumerosaEspecial == true) {
       let precioFinal = precio * 0.15;
       alert(precioFinal);

    }
     else if (radioNo && FamiliaNumerosa == true) {
       let precioFinal = precio * 0.95;
       alert(precioFinal);
    }
    else if (radioNo && familiaNumerosaEspecial == true) {
       let precioFinal = precio * 0.9;
       alert(precioFinal);

    }
     else if (radioNo && familiaNormal == true) {
       let precioFinal = precio 
       alert(precioFinal);

    }
    else {
        alert("Tienes que marcar una casilla")
    }

   
    

    
    
}





