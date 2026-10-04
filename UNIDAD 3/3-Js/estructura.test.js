const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const read = file => fs.readFileSync(path.join(__dirname, file), "utf8");

test("Hola Mundo se ejecuta al cargar el body", () => {
    assert.match(read("index.html"), /<body[^>]+onload=["']saludar\(\)["']/i);
});

test("el conversor invoca la conversion mediante onchange", () => {
    const html = read("ConversorUnidades.html");
    assert.equal((html.match(/onchange=/gi) || []).length, 4);
    assert.match(html, /convertirUnidades\(['"]metro['"]/);
});

test("grados y radianes emplean onchange y Math.PI desde JavaScript", () => {
    const html = read("grados_radianes.html");
    assert.equal((html.match(/onchange=/gi) || []).length, 2);
    assert.match(read("misFunciones.js"), /Math\.PI/);
});

test("mostrar y ocultar usa radio buttons con onchange", () => {
    const html = read("mostrar_ocultar.html");
    assert.equal((html.match(/onchange=/gi) || []).length, 2);
    assert.match(html, /id=["']contenidoAlternable["']/);
});

test("operaciones muestra los resultados en elementos de texto", () => {
    const html = read("operacionesMatematicas.html");
    assert.doesNotMatch(html, /<input[^>]+id=["']total[SRMD]["']/i);
    assert.match(html, /id=["']totalS["']/);
    assert.match(read("misFunciones.js"), /innerHTML/);
});
