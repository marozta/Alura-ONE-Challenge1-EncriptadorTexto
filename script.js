const textarea = document.querySelector(".text__input");
const mensaje = document.querySelector(".text__output");

function btnEncriptar() {
    const texto = textarea.value.toLowerCase()
    const textoEncriptado = encriptar(texto)
    mensaje.value = textoEncriptado
    textarea.value = "";
    document.querySelector(".text__output").style.visibility = "visible"
    document.querySelector(".image").style.visibility = "hidden"
    document.querySelector(".upper__msg").style.visibility = "hidden"
    document.querySelector(".lower__msg").style.visibility = "hidden"
    document.querySelector(".btn__copiar").style.visibility = "visible"
    
}

function btnDesencriptar() {
    const texto = textarea.value.toLowerCase()
    const textoEncriptado = desencriptar(texto)
    mensaje.value = textoEncriptado
    textarea.value = ""
    document.querySelector(".text__output").style.visibility = "visible"
    document.querySelector(".image").style.visibility = "hidden"
    document.querySelector(".upper__msg").style.visibility = "hidden"
    document.querySelector(".lower__msg").style.visibility = "hidden"
    document.querySelector(".btn__copiar").style.visibility = "visible"
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
    document.querySelector(".image").style.visibility = "visible"
    document.querySelector(".upper__msg").style.visibility = "visible"
    document.querySelector(".lower__msg").style.visibility = "visible"
    document.querySelector(".btn__copiar").style.visibility = "hidden"
}

