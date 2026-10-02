/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

 /**
    * Convierte unidades de medida entre metros, pulgadas, pies y yardas.
  */
const convertirunidades = (valor, unidad) => {
    if (unidad === 'metro') {
        document.getElementById('pulgada').value = valor * 39.3701;
        document.getElementById('pie').value = valor * 3.28084;
        document.getElementById('yarda').value = valor * 1.09361;
    } else if (unidad === 'pulgada') {
        document.getElementById('metro').value = valor * 0.0254;
        document.getElementById('pie').value = valor * 0.0833333;
        document.getElementById('yarda').value = valor * 0.0277778;
    } else if (unidad === 'pie') {
        document.getElementById('metro').value = valor * 0.3048;
        document.getElementById('pulgada').value = valor * 12;
        document.getElementById('yarda').value = valor * 0.333333;
    } else if (unidad === 'yarda') {
        document.getElementById('metro').value = valor * 0.9144;
        document.getElementById('pulgada').value = valor * 36;
        document.getElementById('pie').value = valor * 3;
    } 
}

const convertirvalores = (valor, unidad) => {
    if (unidad === 'grados') {
        document.getElementById('radianes').value = valor * (Math.PI / 180);
    } else if (unidad === 'radianes') {
        document.getElementById('grados').value = valor * (180 / Math.PI);
    }
}