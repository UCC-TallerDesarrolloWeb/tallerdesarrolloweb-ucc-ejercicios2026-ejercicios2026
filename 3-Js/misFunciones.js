/**
 * Convierte unidades entre metros, pulgadas, pies y yardas
 * @method convertirUnidades
 * @param {string} id - El id del input que cambió
 * @param {number|string} valor - El valor ingresado en el input
 */


convertirUnidades = (id, valor) => {

    let metros, pulgadas, pie, yardas;

    // Reemplaza comas por puntos en caso de ingresar decimales con coma
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }


    // Validación si el valor no es un número
    if (isNaN(valor)) {
        alert("Se ingresó un valor incorrecto en: " + id);
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
        
    } 
    else if (id === "metro") {
        metro = valor;
        metros = (valor * 39.3701).toFixed(2);
        pie = (valor * 3.28084).toFixed(2);
        yardas = (valor * 1.09361).toFixed(2);
    } 
    else if (id === "pulgada") {
        pulgadas = valor;
        metro = (valor * 0.0254).toFixed(2);
        pie = (valor * 0.0833333).toFixed(2);
        yarda = (valor * 0.0277778).toFixed(2);
    } 
    else if (id === "pie") {
        pie = valor;
        metro = (valor * 0.3048).toFixed(2);
        pulgada = (valor * 12).toFixed(2);
        yarda = (valor * 0.333333).toFixed(2);
    } 
    else if (id === "yarda") {
        yarda = valor;
        metro = (valor * 0.9144).toFixed(2);
        pulgada = (valor * 36).toFixed(2);
        pie = (valor * 3).toFixed(2);
    }
    
    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = Math.round(pie*100)/100;
    document.getElementById("yarda").value = yardas.toFixed(3);
}

/**
 * conversion de grados a radianes
 * @method convertirGR
 * @param {string} id - id del elemento imput del html
 */

function convertirGR(id){
    let grad, rad;

    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;

    } else {
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


/**
 * mostrar u ocultar div segun seleccion del ususario
 * @method mostrarOcultar
 * @param {string} valor - valor del id del radio button seleccionado
 */
mostrarOcultar = (valor) => {
    const displayDiv = valor==="val_mostrar" ? 'block' : 'none';
    document.getElementById("unDiv").style.display = displayDiv;

    //if(valor === "val_mostrar"){
    //    document.getElementById("unDiv").style.display = 'block';
    //}else {
    //    document.getElementById("unDiv").style.display = 'none';
    //}
}

/**
 * Calcula la suma de dos valores
 * @param {number}
 */
function calcularSuma(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("nums1").value);
    sum1 = Number(document.getElementById("nums2").value);
    document.getElementById("totals").innerText.value = sum1 + sum2;
}