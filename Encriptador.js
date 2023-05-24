function capturar1(){
    var frase=document.getElementById("Texto_input").value;
    var boton=document.getElementById("Encriptar") 
    var Texto_encriptado = encriptador(frase);
    
}
function capturar2(){
    var frase=document.getElementById("Texto_input").value; 
    var Texto_encriptado = desencriptador(frase);
}
function desencriptador(texto){
let letras=texto.toLowerCase().split("");
var outputArea=document.getElementById("Texto_output");
    for (let i = 0; i<letras.length; i++) {
        if(letras[i]=="*"){
            letras[i]="a"
        }else if (letras[i]=="3"){
            letras[i]="e"
        }else if (letras[i]=="|") {
            letras[i]="i"
        }else if (letras[i]=="°") {
            letras[i]="o"
        }else if (letras[i]=="▬") {
            letras[i]="u"
        }else if (letras[i]=="/"){
            letras[i]="n"
        }else if (letras[i]=="%"){
            letras[i]="s"
        }else if (letras[i]=="?"){
            letras[i]="r"
        }else if (letras[i]=="+"){
            letras[i]="l"
        }else if (letras[i]=="="){
            letras[i]="d"
        }else if (letras[i]=="."){
            letras[i]="t"
        }else if (letras[i]=="#"){
            letras[i]="c"
        }else if (letras[i]=="<"){
            letras[i]="m"
        }else if (letras[i]==">"){
            letras[i]="p"
        }else if (letras[i]=="2"){
            letras[i]="b"
        }else if (letras[i]=="•"){
            letras[i]=" "
        }
        
    }
    outputArea.value+=letras.join("");    
}

function encriptador(texto){
let letras=texto.toLowerCase().split("");
var outputArea=document.getElementById("Texto_output");
    for (let i = 0; i<letras.length; i++) {
        if(letras[i]=="a"){
            letras[i]="*"
        }else if (letras[i]=="e"){
            letras[i]="3"
        }else if (letras[i]=="i") {
            letras[i]="|"
        }else if (letras[i]=="o") {
            letras[i]="°"
        }else if (letras[i]=="u") {
            letras[i]="▬"
        }else if (letras[i]=="n"){
            letras[i]="/"
        }else if (letras[i]=="s"){
            letras[i]="%"
        }else if (letras[i]=="r"){
            letras[i]="?"
        }else if (letras[i]=="l"){
            letras[i]="+"
        }else if (letras[i]=="d"){
            letras[i]="="
        }else if (letras[i]=="t"){
            letras[i]="."
        }else if (letras[i]=="c"){
            letras[i]="#"
        }else if (letras[i]=="m"){
            letras[i]="<"
        }else if (letras[i]=="p"){
            letras[i]=">"
        }else if (letras[i]=="b"){
            letras[i]="2"
        }else if (letras[i]==" "){
            letras[i]="•"
        }
        
    }
    outputArea.value+=letras.join("");
}
function clearTextarea() {
    const textarea = document.getElementById("Texto_output");
    const botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.addEventListener("click", function(){
    textarea.value = "";
    });
} 
