const test = require("node:test");
const assert = require("node:assert/strict");

const {
    parseNumericInput,
    convertUnits,
    degreesToRadians,
    radiansToDegrees,
    calculateOperations
} = require("./misFunciones.js");

test("parseNumericInput acepta coma decimal", () => {
    assert.equal(parseNumericInput("1,5"), 1.5);
});

test("convertUnits convierte metros y redondea a dos decimales", () => {
    assert.deepEqual(convertUnits("metro", "1"), {
        metro: 1,
        pulgada: 39.37,
        pie: 3.28,
        yarda: 1.09
    });
});

test("convertUnits convierte pulgadas a las demas unidades", () => {
    assert.deepEqual(convertUnits("pulgada", "39,37"), {
        metro: 1,
        pulgada: 39.37,
        pie: 3.28,
        yarda: 1.09
    });
});

test("convertUnits rechaza valores no numericos", () => {
    assert.equal(convertUnits("metro", "abc"), null);
});

test("convierte grados y radianes en ambas direcciones", () => {
    assert.equal(degreesToRadians(180), 3.1416);
    assert.equal(radiansToDegrees(Math.PI), 180);
});

test("calcula las cuatro operaciones matematicas", () => {
    assert.deepEqual(calculateOperations("8", "2"), {
        suma: 10,
        resta: 6,
        multiplicacion: 16,
        division: 4
    });
});

test("la division por cero se informa sin Infinity", () => {
    assert.equal(calculateOperations("8", "0").division, null);
});
