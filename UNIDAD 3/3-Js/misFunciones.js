/**
 * Convierte una entrada de texto a numero y acepta coma decimal.
 * @method parseNumericInput
 * @param {string|number} value - Valor ingresado por el usuario.
 * @returns {number} Numero convertido o NaN si la entrada no es valida.
 */
const parseNumericInput = value => Number(String(value).trim().replace(",", "."));

const roundTwo = value => Math.round((value + Number.EPSILON) * 100) / 100;

/**
 * Convierte una longitud a metros, pulgadas, pies y yardas.
 * @method convertUnits
 * @param {string} unit - Id de la unidad modificada.
 * @param {string|number} value - Valor ingresado por el usuario.
 * @returns {object|null} Conversiones con dos decimales o null si el valor es invalido.
 */
const convertUnits = (unit, value) => {
    const numericValue = parseNumericInput(value);
    if (!Number.isFinite(numericValue)) return null;

    const metersByUnit = {
        metro: 1,
        pulgada: 0.0254,
        pie: 0.3048,
        yarda: 0.9144
    };

    if (!metersByUnit[unit]) return null;

    const meters = numericValue * metersByUnit[unit];
    return {
        metro: roundTwo(meters),
        pulgada: roundTwo(meters / metersByUnit.pulgada),
        pie: roundTwo(meters / metersByUnit.pie),
        yarda: roundTwo(meters / metersByUnit.yarda)
    };
};

/**
 * Actualiza los campos del conversor a partir del valor modificado.
 * @method convertirUnidades
 * @param {string} id - Id del campo que origino el cambio.
 * @param {string|number} value - Valor ingresado por el usuario.
 * @returns {void}
 */
const convertirUnidades = (id, value) => {
    const conversion = convertUnits(id, value);
    const fields = ["metro", "pulgada", "pie", "yarda"];

    if (!conversion) {
        fields.forEach(field => {
            document.getElementById(field).value = "";
        });
        alert(`Se ingreso un valor invalido en ${id}`);
        return;
    }

    fields.forEach(field => {
        document.getElementById(field).value = conversion[field];
    });
};

/**
 * Convierte grados a radianes.
 * @method degreesToRadians
 * @param {number} degrees - Angulo expresado en grados.
 * @returns {number} Angulo en radianes con cuatro decimales.
 */
const degreesToRadians = degrees => Math.round((Number(degrees) * Math.PI / 180) * 10000) / 10000;

/**
 * Convierte radianes a grados.
 * @method radiansToDegrees
 * @param {number} radians - Angulo expresado en radianes.
 * @returns {number} Angulo en grados con cuatro decimales.
 */
const radiansToDegrees = radians => Math.round((Number(radians) * 180 / Math.PI) * 10000) / 10000;

const convertirAngulos = (id, value) => {
    const numericValue = parseNumericInput(value);
    const degreesField = document.getElementById("grados");
    const radiansField = document.getElementById("radianes");

    if (!Number.isFinite(numericValue)) {
        degreesField.value = "";
        radiansField.value = "";
        alert("Ingrese un valor numerico valido.");
        return;
    }

    if (id === "grados") {
        radiansField.value = degreesToRadians(numericValue);
    } else {
        degreesField.value = radiansToDegrees(numericValue);
    }
};

const mostrarOcultar = show => {
    document.getElementById("contenidoAlternable").style.display = show ? "block" : "none";
};

/**
 * Resuelve suma, resta, multiplicacion y division para dos valores.
 * @method calculateOperations
 * @param {string|number} firstValue - Primer operando.
 * @param {string|number} secondValue - Segundo operando.
 * @returns {object|null} Resultados o null si un operando no es numerico.
 */
const calculateOperations = (firstValue, secondValue) => {
    const first = parseNumericInput(firstValue);
    const second = parseNumericInput(secondValue);
    if (!Number.isFinite(first) || !Number.isFinite(second)) return null;

    return {
        suma: first + second,
        resta: first - second,
        multiplicacion: first * second,
        division: second === 0 ? null : first / second
    };
};

const calcularOperacion = operation => {
    const config = {
        suma: ["nums1", "nums2", "totalS"],
        resta: ["numr1", "numr2", "totalR"],
        multiplicacion: ["numm1", "numm2", "totalM"],
        division: ["numd1", "numd2", "totalD"]
    };
    const [firstId, secondId, resultId] = config[operation];
    const result = calculateOperations(
        document.getElementById(firstId).value,
        document.getElementById(secondId).value
    );
    const output = document.getElementById(resultId);

    if (!result) {
        output.innerHTML = "Ingrese dos numeros";
        return;
    }

    const value = result[operation];
    output.innerHTML = value === null ? "No se puede dividir por cero" : roundTwo(value);
};

const saludar = () => alert("Hola Mundo!");

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        parseNumericInput,
        convertUnits,
        degreesToRadians,
        radiansToDegrees,
        calculateOperations
    };
}
