/**
 * Conversion de unidades de metros, piers, yardas y pulgadas
 * @method convertirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor que se desea convertir
 * @return Valor que retorna
 */

convertirUnidades = (id, valor) => {
    let metros, pulgadas, pies, yardas;

    valor = valor.replace(",", ".");

    if (isNaN(valor)) {
        alert("Por favor, ingrese un número válido: " + id);
        metros = "";
        pulgadas = "";
        pies = "";
        yardas = "";
        return;
    } else if (id === "metro") {
        metros = valor;
        pulgadas = (valor * 39.3701);
        pies = (valor * 3.28084);
        yardas = (valor * 1.09361);
    } else if (id === "pulgada") {
        pulgadas = valor;
        metros = (valor * 0.0254);
        pies = (valor * 0.0833333);
        yardas = (valor * 0.0277778);
    } else if (id === "pie") {
        pies = valor;
        metros = (valor * 0.3048);
        pulgadas = (valor * 12);
        yardas = (valor * 0.333333);
    } else if (id === "yarda") {
        yardas = valor;
        metros = (valor * 0.9144);
        pulgadas = (valor * 36);
        pies = (valor * 3);
    }

    document.getElementById("metro").value = Math.round(metros * 100) / 100;
    document.getElementById("pulgada").value = Math.round(pulgadas * 100) / 100;
    document.getElementById("pie").value = Math.round(pies * 100) / 100;
    document.getElementById("yarda").value = Math.round(yardas * 100) / 100;
}

/**
 * Conversión de grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del elemento input en el html
 */

function convertirGR(id) {
    let grad, rad;
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = grad * (Math.PI / 180);
        document.getElementById("radianes").value = rad;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        grad = rad * (180 / Math.PI);
        document.getElementById("grados").value = grad;
    }
}

/**
 * Mostrar/Ocultar un div
 * @method mostrarOcultar
 * @param {string} valor - Valor que se desea mostrar u ocultar
 */

mostrarOcultar = (valor) => {
    const displayDiv = valor === "val_mostrar" ? "block" : "none";

  //  if(valor === "val_mostrar") {
  //      document.getElementById("unDiv").style.display = "block";
  //  } else if(valor === "val_ocultar") {
  //      document.getElementById("unDiv").style.display = "none";
  //  }
}

function calcularSuma() {
    let sum1, sum2;
    sum1 = parseFloat(document.getElementById("nums1").value);
    sum2 = parseFloat(document.getElementById("nums2").value);
    document.getElementById("totalS").innerText = sum1 + sum2;
}