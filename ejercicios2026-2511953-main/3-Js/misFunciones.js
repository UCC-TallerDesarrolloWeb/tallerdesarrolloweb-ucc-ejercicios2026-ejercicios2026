/**
 * Conversión de unidades de metros, pies, yardas y pulgadas 
 * @method convertirUnidad
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor ingresado por el usuario
 */

convertirUnidad = (id, valor) => {
    let metros, pulgadas, pies, yardas;

    valor = valor.replace(",",".");

    if (isNaN(valor) || valor === "") {
        alert("Se ingreso un valor incorrecto: " + id);
        metros = "";
        pulgadas = "";
        pies= "";
        yardas = "";

    } else if (id === "metro") {
        metros = valor;
        pulgadas = valor * 39.3701;
        pies = valor * 3.28084;
        yardas = valor * 1.09361;

    } else if (id === "pulgada") {
        pulgadas = valor;
        metros = valor * 0.0254;
        pies = valor / 12;
        yardas = valor / 36;

    } else if (id === "pie") {
        pies = valor;
        pulgadas= valor * 12;
        metros = valor * 0.3048;
        yardas = valor / 3;

    } else if (id === "yarda") {
        yardas =  valor; 
        pulgadas = valor * 36;
        pies = valor * 3;
        metros = valor * 0.9144;
    }

    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = pies.toFixed(2);
    document.getElementById("yarda").value = yardas.toFixed(2);
}



function convertirGR(id){
    let grad, rad;

    if(id=== "grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}



/**
 * Mostrar u ocultar div segun seleccion del usuario 
 * @method mostrarOcultar
 * @param {string} valor - Valor del id del radio button seleccionado 
 */
mostrarOcultar = (valor) => {
    const displayDiv = valor === "val_mostrar" ? 'block' : 'none'; 
    document.getElementById("unDiv").style.display = displayDiv;


    // if(valor==="val_mostrar"){
    //    document.getElementById("unDiv").style.display = 'block';
    // }else{
    //    document.getElementById("unDiv").style.display = 'none';
    //}
}


/**
 * Realizar una suma 
 * @method calcularSuma
 */
function calcularSuma(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("nums1").value);
    sum2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerText = Number(sum1) + Number(sum2);
}

/**
 * Realizar una resta 
 * @method calcularResta
 */
function calcularResta(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("numr1").value);
    sum2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerText = Number(sum1) - Number(sum2);
}

/**
 * Realizar una multiplicacion 
 * @method calcularMultiplicacion
 */
function calcularMultiplicacion(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("numm1").value);
    sum2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerText = Number(sum1) * Number(sum2);
}

/**
 * Realizar una division
 * @method calcularDivision
 */
function calcularDivision(){
    let sum1, sum2;
    sum1 = Number(document.getElementById("numd1").value);
    sum2 = Number(document.getElementById("numd2").value);

    if (sum2 === 0) {
        alert("No se puede dividir por cero");
        return;
    }

    document.getElementById("totalD").innerText = Number(sum1) / Number(sum2);
}