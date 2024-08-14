function encriptar(){
let texto = document.getElementById("texto").value;
let mensaje = document.getElementById("encontrado");
let submensaje = document.getElementById("encriptado");
let munieco = document.getElementById("muneco");
let regex = /^[a-z\s]+$/;

if (!regex.test(texto)) {
    alert("Por favor, ingrese solo letras minúsculas sin caracteres especiales.");
    return; 
}

let change_text = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");

if(texto.length !=0){
    document.getElementById("texto").value="";
    document.getElementById("texto1").value = change_text;
    mensaje.textContent = "Texto encriptado exitosamente";
    submensaje.textContent="";
    munieco.src="./assets/candado.png";

}else {
    munieco.src="./assets/Munieco.png";
    mensaje.textContent = "Ningun mensaje fue encontrado";
    submensaje.textContent="Ingresa el texto que desees encriptar o desencriptar";
    alert("Debe ingresar minimamente un caracter");
}

}


function desencriptar(){

    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("encontrado");
    let submensaje = document.getElementById("encriptado");
    let munieco = document.getElementById("muneco");
    let regex = /^[a-z\s]+$/;
    
    if (!regex.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas sin caracteres especiales.");
        return; 
    }
    
    let change_text = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    
    if(texto.length !=0){
        document.getElementById("texto").value="";
        document.getElementById("texto1").value = change_text;
        mensaje.textContent = "Texto encriptado exitosamente";
        submensaje.textContent="";
        munieco.src="./assets/candado.png";
    }else {
        munieco.src="./assets/Munieco.png";
        mensaje.textContent = "Ningun mensaje fue encontrado";
        submensaje.textContent="Ingresa el texto que desees encriptar o desencriptar";
        alert("Debe ingresar minimamente un caracter");
    }
    
}

