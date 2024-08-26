const textarea = document.querySelector(".text__input");
const mensaje = document.querySelector(".text__output");
const pattern = /[A-Záéíú]/;

function btnEncriptar() {

    if (pattern.test(textarea.value) == true){
        alert("El texto contiene caracteres invalidos");
        textarea.value = "";
        return;

    } if (textarea.value == '') {
        alert("No ingresó ningún texto");

    } else {
        const texto = textarea.value.toLowerCase()
        const textoEncriptado = encriptar(texto)
        mensaje.value = textoEncriptado
        textarea.value = "";
        document.querySelector(".text__output").style.height = "400px"
        document.querySelector(".text__output").style.display = "inline-flex"
        document.querySelector(".image").style.display = "none"
        document.querySelector(".upper__msg").style.display = "none"
        document.querySelector(".lower__msg").style.display = "none"
        document.querySelector(".btn__copiar").style.visibility = "visible"
    }   
}

function btnDesencriptar() {

    if (pattern.test(textarea.value) == true){
        alert("El texto contiene caracteres invalidos");
        textarea.value = "";
        return;

    } if (textarea.value == '') {
        alert("No ingresó ningún texto");

    } else {
        const texto = textarea.value.toLowerCase()
        const textoEncriptado = desencriptar(texto)
        mensaje.value = textoEncriptado
        textarea.value = ""
        document.querySelector(".text__output").style.height = "400px"
        document.querySelector(".text__output").style.display = "inline-block"
        document.querySelector(".image").style.display = "none"
        document.querySelector(".upper__msg").style.display = "none"
        document.querySelector(".lower__msg").style.display = "none"
        document.querySelector(".btn__copiar").style.visibility = "visible"
        }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i<matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i<matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    var contenido = document.querySelector(".text__output");
    contenido.select();
    document.execCommand("cut");
    document.querySelector(".text__output").style.display = "none"
    document.querySelector(".image").style.display = "initial"
    document.querySelector(".upper__msg").style.display = "initial"
    document.querySelector(".lower__msg").style.display = "initial"
    document.querySelector(".btn__copiar").style.visibility = "hidden"
}

