const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");
const requiredFiles = [
    "index.html",
    "prototipo.html",
    "prototipo.js",
    "Proyecto-restaurante.md",
    "Evaluacion-interfaz.md",
    "../U2_interfazUsuario.html",
    "diagrama-organizacion.svg",
    "Sketch/sketch-desktop.svg",
    "Sketch/sketch-mobile.svg",
    "Wireframes/wireframe-desktop.svg",
    "Wireframes/wireframe-mobile.svg",
    "Wireframes/wireflow.svg"
];

for (const relativePath of requiredFiles) {
    if (!fs.existsSync(path.join(root, relativePath))) {
        throw new Error(`Falta el entregable: ${relativePath}`);
    }
}

const html = read("index.html");
const prototype = read("prototipo.html");
const requiredSections = ["arquitectura", "sketch", "wireflow", "wireframe", "evaluacion"];

for (const id of requiredSections) {
    if (!html.includes(`id="${id}"`)) {
        throw new Error(`Falta la seccion #${id}`);
    }
}

if (!/restaurante/i.test(html) || !/CONOCENOS/i.test(html)) {
    throw new Error("La pagina no representa el proyecto del restaurante");
}

if (/tiro oblicuo/i.test(html)) {
    throw new Error("Quedo contenido del proyecto anterior de tiro oblicuo");
}

for (const section of ["inicio", "conocenos", "menu", "pedido"]) {
    if (!prototype.includes(`id="${section}"`)) {
        throw new Error(`Falta la pantalla #${section} en el prototipo`);
    }
}

for (const marker of ["data-product", "pedido-lista", "pedido-form", "prototipo.js"]) {
    if (!prototype.includes(marker)) {
        throw new Error(`Falta el componente ${marker} en el prototipo`);
    }
}

const { addProduct, getTotal, validateCustomer } = require("./prototipo.js");
const sampleOrder = addProduct([], { name: "Pizza", price: 10000 });
const repeatedOrder = addProduct(sampleOrder, { name: "Pizza", price: 10000 });

if (repeatedOrder[0].quantity !== 2 || getTotal(repeatedOrder) !== 20000) {
    throw new Error("El carrito no acumula productos o total correctamente");
}

if (validateCustomer({ name: "", phone: "", address: "", payment: "" }).length !== 4) {
    throw new Error("La validacion no detecta todos los campos obligatorios");
}

const nav = html.match(/<nav[\s\S]*?<\/nav>/i)?.[0] ?? "";
if (/ubicaci[oó]n/i.test(nav)) {
    throw new Error("Ubicacion no debe figurar en la navegacion principal");
}

if (!/google\.com\/maps|maps\.app\.goo\.gl/i.test(prototype)) {
    throw new Error("Falta el enlace externo a Google Maps");
}

for (const relativePath of requiredFiles.filter(file => file.endsWith(".svg"))) {
    const svg = read(relativePath);
    if (!svg.includes("<svg") || !svg.includes("</svg>")) {
        throw new Error(`${relativePath} no contiene un SVG valido`);
    }
}

console.log(`OK: ${requiredFiles.length} entregables y ${requiredSections.length} secciones verificadas.`);
