
window.onload = function () {

    const texto_encontrado = document.getElementById('texto_encontrado')
    texto_encontrado.style.display = 'none'

    const texto_no_encontrado = document.getElementById('texto_no_encontrado')

    function input_vacio(cadena) {
        var bandera = false
        if (cadena != "") {
            var contador = 0
            for (let i = 0; i < cadena.length; i++) {
                if (cadena.substring(i, i + 1) == " ") {
                    contador += 1
                }
            }
            if (contador == cadena.length) {
                bandera = true
            }
        } else {
            bandera = true
        }
        return bandera
    }

    function cumple_condiciones(cadena) {
        var bandera = true
        const acentos = ["á", "é", "í", "ó", "ú"]
        if (input_vacio(cadena) == false) {
            for (let i = 0; i < cadena.length; i++) {
                var letra = cadena.substring(i, i + 1)
                if (letra != " ") {
                    if (letra == letra.toUpperCase() || acentos.includes(letra)) {
                        bandera = false
                        break
                    }
                }
            }
        } else {
            bandera = false
        }
        return bandera
    }

    function encriptar(cadena) {
        var texto_encriptado = ""
        for (let i = 0; i < cadena.length; i++) {
            var letra = cadena.substring(i, i + 1)
            if (letra == "a") {
                texto_encriptado += "ai"
            } else if (letra == "e") {
                texto_encriptado += "enter"
            } else if (letra == "i") {
                texto_encriptado += "imes"
            } else if (letra == "o") {
                texto_encriptado += "ober"
            } else if (letra == "u") {
                texto_encriptado += "ufat"
            } else {
                texto_encriptado += letra
            }
        }
        return texto_encriptado
    }

    function desencriptar(cadena) {
        return cadena.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u")
    }

    function copiar_resultado() {
        let texto_copiado = document.querySelector("#texto_encriptado");
        texto_copiado.select();
        document.execCommand("copy");
    }

    function mostrar_ocultar_encriptacion() {
        var ingreso = document.getElementById("entrada").value
        if (cumple_condiciones(ingreso)) {
            texto_encontrado.style.display = 'flex'
            texto_no_encontrado.style.display = 'none'
            var encriptacion = encriptar(ingreso)
            document.getElementById("texto_encriptado").value = encriptacion
        } else {
            if (texto_no_encontrado.style.display == 'none') {
                texto_no_encontrado.style.display = 'block'
                texto_encontrado.style.display = 'none'
            }
        }
    }

    function mostrar_ocultar_desencriptacion() {
        var ingreso = document.getElementById("entrada").value
        if (cumple_condiciones(ingreso)) {
            texto_encontrado.style.display = 'flex'
            texto_no_encontrado.style.display = 'none'
            var desencriptacion = desencriptar(ingreso)
            document.getElementById("texto_encriptado").value = desencriptacion
        } else {
            if (texto_no_encontrado.style.display == 'none') {
                texto_no_encontrado.style.display = 'block'
                texto_encontrado.style.display = 'none'
            }
        }
    }

    document.getElementById("encriptar").onclick = mostrar_ocultar_encriptacion;
    document.getElementById("desencriptar").onclick = mostrar_ocultar_desencriptacion;
    document.getElementById("copiar").addEventListener("click", copiar_resultado)
   
}
