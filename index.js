const valueTextArea = document.getElementById('text');

function upperCase (){
    valueTextArea.value = valueTextArea.value.toUpperCase();
}
function lowerCase(){
    valueTextArea.value = valueTextArea.value.toLowerCase()
}
function properCase(){
    /*convierto lo ingresado en el textarea a minuscula y a un array separado donde hay espacios*/
    let cadena = valueTextArea.value.toLowerCase().split(" ")
    /*cda elemento array contiene un string que tambien es un array, recorro el array cadena con el bucle*/
    for (let i = 0; i<cadena.length; i++){
        cadena[i] = cadena[i][0].toUpperCase() + cadena[i].slice(1)
        /*a cada elemento de cadena, en su primer elemento le agrego la mayuscula*/
        //lugo con slice copia el primer elemento del array y lo suma al elemento
    }
    //tomo el array y los uno donde hay un espacio
    valueTextArea.value = cadena.join(" ")
}

function sentenceCase(){
    let cadena = valueTextArea.value.toLowerCase().split('. ')
    for (let i = 0; i<cadena.length; i++) {
         cadena[i] = cadena[i][0].toUpperCase() + cadena[i].slice(1)
    }
    valueTextArea.value = cadena.join(". ")
}

function download(nombreArchivo, string) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(string));
    element.setAttribute('download', nombreArchivo);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function descargarTxt(){
    let string = valueTextArea.value
    let nombreArchivo = 'text.txt'

    download(nombreArchivo,string)

}