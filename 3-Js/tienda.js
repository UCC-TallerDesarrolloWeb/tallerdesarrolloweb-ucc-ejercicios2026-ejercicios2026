const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

function mostrarModal(num) {
  const producto = productos[num];
  const modal = document.getElementById("modal");

  if (!producto || !modal) return;

  document.getElementById("nombre-producto").textContent = producto.nombre;
  document.getElementById("descripcion-producto").textContent = producto.description;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.style.display = "block";
  }
}

function cerrarModal() {
  const modal = document.getElementById("modal");

  if (!modal) return;

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.style.display = "none";
  }
}

function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(precio);
}

function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  const contador = document.getElementById("contador-carrito");

  if (contador) {
    contador.textContent = carrito.length;
  }
}

function renderCatalogo(productosFiltrados) {
  const catalogo = document.getElementById("catalogo");

  if (!catalogo) return;

  if (!productosFiltrados.length) {
    catalogo.innerHTML = "<p>No se encontraron productos con esos filtros.</p>";
    return;
  }

  const contenido = productosFiltrados
    .map(
      (producto, id) => `
        <div>
          <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>${formatearPrecio(producto.precio)}</p>
          <button type="button" onclick="mostrarModal(${id})">Ver detalles del producto</button>
          <button type="button" onclick="agragrAlCarrito(${id})">Agregar al Carrito</button>
        </div>
      `
    )
    .join("");

  catalogo.innerHTML = contenido;
}

function mostrarCatalogo() {
  renderCatalogo(productos);
}

function obtenerCategoriasSeleccionadas() {
  return Array.from(document.querySelectorAll('input[name="categoria"]:checked')).map(
    (checkbox) => checkbox.value
  );
}

function aplicarFiltros() {
  const texto = document.getElementById("search")?.value.toLowerCase().trim() || "";
  const precioMin = Number(document.getElementById("precio-min")?.value) || 0;
  const precioMax = Number(document.getElementById("precio-max")?.value) || Number.MAX_SAFE_INTEGER;
  const marca = document.getElementById("marca-filtro")?.value || "Todas";
  const categorias = obtenerCategoriasSeleccionadas();

  const resultado = productos.filter((producto) => {
    const coincideTexto =
      !texto ||
      producto.nombre.toLowerCase().includes(texto) ||
      producto.description.toLowerCase().includes(texto) ||
      producto.marca.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto);

    const coincidePrecio = producto.precio >= precioMin && producto.precio <= precioMax;
    const coincideMarca = marca === "Todas" || producto.marca === marca;
    const coincideCategoria =
      categorias.length === 0 || categorias.includes(producto.categoria);

    return coincideTexto && coincidePrecio && coincideMarca && coincideCategoria;
  });

  renderCatalogo(resultado);
}

function initFiltros() {
  const busqueda = document.getElementById("search");
  const minimo = document.getElementById("precio-min");
  const maximo = document.getElementById("precio-max");
  const marca = document.getElementById("marca-filtro");
  const categorias = document.querySelectorAll('input[name="categoria"]');
  const order = document.getElementById("order");

  if (busqueda) busqueda.addEventListener("input", aplicarFiltros);
  if (minimo) minimo.addEventListener("input", aplicarFiltros);
  if (maximo) maximo.addEventListener("input", aplicarFiltros);
  if (marca) marca.addEventListener("change", aplicarFiltros);
  if (order) order.addEventListener("change", ordenarCatalogo);
  categorias.forEach((checkbox) => checkbox.addEventListener("change", aplicarFiltros));
}

function agragrAlCarrito(num) {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
  carritoGuardado.push(num);
  localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
  actualizarContadorCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarContadorCarrito();
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  const carritoList = JSON.parse(localStorage.getItem("carrito") || "[]");

  if (!Array.isArray(carritoList)) return;

  carritoList.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  actualizarContadorCarrito();
  mostrarCarrito();
}

function mostrarCarrito() {
  const carrito = document.getElementById("carrito");

  if (!carrito) return;

  let carritoList = JSON.parse(localStorage.getItem("carrito") || "[]");

  if (!Array.isArray(carritoList)) {
    carritoList = [];
  }

  let total = 0;

  const contenido = carritoList.length
    ? `
        <button type="button" onclick="vaciarCarrito()">Vaciar el Carrito</button>
        ${carritoList
          .map((num, index) => {
            const producto = productos[num];
            if (producto) total += producto.precio;

            return `
              <div>
                <h3>${producto ? producto.nombre : "Producto no disponible"}</h3>
                <p>${producto ? formatearPrecio(producto.precio) : formatearPrecio(0)}</p>
                <button type="button" onclick="eliminarDelCarrito(${index})">Eliminar el producto</button>
              </div>
            `;
          })
          .join("")}
        <p>Total: ${formatearPrecio(total)}</p>
      `
    : `
        <p>No hay productos en el carrito.</p>
        <button type="button" onclick="vaciarCarrito()">Vaciar el Carrito</button>
      `;

  carrito.innerHTML = contenido;
}

document.addEventListener("DOMContentLoaded", () => {
  initFiltros();
  actualizarContadorCarrito();
  if (document.getElementById("catalogo")) {
    mostrarCatalogo();
  }
  if (document.getElementById("carrito")) {
    mostrarCarrito();
  }
});

let ordenarCatalogo = () => {
  const opt = document.getElementById("order").value;
  let newProductos;

  switch(opt){
    case "menor":
      newProductos = productos.sort((a,b) => a.precio - b.precio);
      break;
    
    case "mayor":
      newProductos = productos.sort((a,b) => b.precio - a.precio);
      break;
    
    case "a-z":
      newProductos = productos.sort((a,b) => {
        if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
          return -1;
        } else {return 1}
      })
      break;
    default:
      newProductos = productos;
  }
  mostrarCatalogo(newProductos);
}