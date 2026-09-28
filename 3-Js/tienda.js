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
    imagen: "protectores-pie.webp",
  },
];

/**
 * Formatea un número al estándar monetario $3.123,45 utilizando Intl.NumberFormat
 * @method formatearPrecio
 * @param {number} valor - Importe a formatear
 * @return {string} Cadena formateada
 */
let formatearPrecio = (valor) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(valor);
};

/**
 * Actualiza el contador de productos en el botón de carrito
 * @method actualizarContadorCarrito
 * @return {void}
 */
let actualizarContadorCarrito = () => {
  let contador = document.getElementById("contador-carrito");
  if (!contador) return;

  let carritolist = localStorage.getItem("carrito");
  if (carritolist == null) {
    contador.innerText = "";
  } else {
    let items = JSON.parse(carritolist);
    // Suma la cantidad total de unidades en el carrito
    let totalCantidad = items.reduce((acc, item) => acc + (item.cantidad || 1), 0);
    contador.innerText = totalCantidad > 0 ? ` (${totalCantidad})` : "";
  }
};

/**
 * Renderiza dinámicamente las tarjetas de los productos en el catálogo
 * @method cargarproducto
 * @param {Array<Object>} [lista=productos] - Lista de productos a renderizar
 * @return {void}
 */
let cargarproducto = (lista = productos) => {
  let contenido = "";

  if (lista.length === 0) {
    document.getElementById("mostrar-catalogo").innerHTML = "<div>No se encontraron productos</div>";
    actualizarContadorCarrito();
    return;
  }

  lista.forEach((elemento) => {
    let id = productos.indexOf(elemento);
    contenido += `
      <div>
        <img src="images/${elemento.imagen}" alt="${elemento.nombre}">
        <h3>${elemento.nombre}</h3>
        <p>${formatearPrecio(elemento.precio)}</p>
        <button type="button" onclick="mostrarmodal(${id})">
          Ver detalles del producto
        </button>
        <button type="button" onclick="agregaralcarrito(${id})">
          Agregar al carrito
        </button>
      </div>
    `;
  });

  document.getElementById("mostrar-catalogo").innerHTML = contenido;
  actualizarContadorCarrito();
};

/**
 * Agrega el producto al carrito en localStorage agrupando por cantidad si ya existe
 * @method agregaralcarrito
 * @param {number} id - Posición del producto en el array productos
 * @return {void}
 */
let agregaralcarrito = (id) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist == null) {
    carritolist = [];
  } else {
    carritolist = JSON.parse(carritolist);
  }

  // Si carritolist almacena IDs numéricos antiguos, los normalizamos a objetos { id, cantidad }
  carritolist = carritolist.map((item) => (typeof item === "number" ? { id: item, cantidad: 1 } : item));

  let productoExistente = carritolist.find((item) => item.id === id);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carritolist.push({ id: id, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carritolist));
  actualizarContadorCarrito();
};

/**
 * Muestra el modal con la información del producto
 * @method mostrarmodal
 * @param {number} id - Posición del producto
 * @return {void}
 */
let mostrarmodal = (id) => {
  document.getElementById("titulo-producto").innerText = productos[id].nombre;
  document.getElementById("descripcion-producto").innerText = productos[id].description;
  document.getElementById("modal").style.display = "block";
};

/**
 * Cierra la ventana modal de producto
 * @method cerrarmodal
 * @return {void}
 */
let cerrarmodal = () => {
  document.getElementById("modal").style.display = "none";
};

/**
 * Renderiza los productos guardados en el carrito, mostrando cantidad y calculando el total
 * @method cargarcarrito
 * @return {void}
 */
let cargarcarrito = () => {
  let carritolist = localStorage.getItem("carrito");
  let contenido = "";
  let total = 0;

  if (carritolist == null || JSON.parse(carritolist).length === 0) {
    contenido = "<div>Su carrito está vacío</div>";
    let totalElement = document.getElementById("total-carrito");
    if (totalElement) totalElement.innerText = "Total: $0";
  } else {
    carritolist = JSON.parse(carritolist);
    // Normalizar a formato { id, cantidad } si vinieran IDs simples
    carritolist = carritolist.map((item) => (typeof item === "number" ? { id: item, cantidad: 1 } : item));

    carritolist.forEach((item, index) => {
      let prod = productos[item.id];
      if (prod) {
        let subtotal = prod.precio * item.cantidad;
        total += subtotal;
        contenido += `
          <div>
            <img src="images/${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>Precio unitario: ${formatearPrecio(prod.precio)}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <p>Subtotal: ${formatearPrecio(subtotal)}</p>
            <button type="button" onclick="eliminardelcarrito(${index})">Eliminar el producto</button>
          </div>
        `;
      }
    });

    let totalElement = document.getElementById("total-carrito");
    if (totalElement) {
      totalElement.innerText = `Total: ${formatearPrecio(total)}`;
    }
  }

  document.getElementById("mostrar-carrito").innerHTML = contenido;
  actualizarContadorCarrito();
};

/**
 * Vacía por completo el carrito de compras usando localStorage.removeItem
 * @method vaciarcarrito
 * @return {void}
 */
let vaciarcarrito = () => {
  localStorage.removeItem("carrito");
  cargarcarrito();
};

/**
 * Elimina un producto del array del carrito usando splice (o reduce cantidad en 1 si hay varios)
 * @method eliminardelcarrito
 * @param {number} pos - Posición en el array a eliminar
 * @return {void}
 */
let eliminardelcarrito = (pos) => {
  let carritolist = localStorage.getItem("carrito");
  if (carritolist != null) {
    carritolist = JSON.parse(carritolist);
    carritolist = carritolist.map((item) => (typeof item === "number" ? { id: item, cantidad: 1 } : item));

    if (carritolist[pos].cantidad > 1) {
      carritolist[pos].cantidad -= 1;
    } else {
      carritolist.splice(pos, 1);
    }

    localStorage.setItem("carrito", JSON.stringify(carritolist));
    cargarcarrito();
  }
};

/**
 * Filtra los productos del catálogo según los campos de búsqueda, rango de precios, marca y categorías
 * @method filtrarproductos
 * @return {void}
 */
let filtrarproductos = () => {
  let searchWord = document.getElementById("search") ? document.getElementById("search").value.toLowerCase() : "";
  let min = document.getElementById("precio-min") ? document.getElementById("precio-min").value : "";
  let max = document.getElementById("precio-max") ? document.getElementById("precio-max").value : "";
  let marca = document.getElementById("marca") ? document.getElementById("marca").value : "";

  // Checkboxes de categorías seleccionadas
  let checkProtectores = document.getElementById("protectores") ? document.getElementById("protectores").checked : false;
  let checkEntrenamiento = document.getElementById("entrenamiento") ? document.getElementById("entrenamiento").checked : false;
  let checkDobok = document.getElementById("dobok") ? document.getElementById("dobok").checked : false;

  let hayCategorias = checkProtectores || checkEntrenamiento || checkDobok;

  let productosFiltrados = productos.filter((producto) => {
    // Filtro por palabra en nombre o descripción
    if (searchWord && !producto.nombre.toLowerCase().includes(searchWord) && !producto.description.toLowerCase().includes(searchWord)) {
      return false;
    }

    // Filtro por precio mínimo
    if (min !== "" && producto.precio < Number(min)) {
      return false;
    }

    // Filtro por precio máximo
    if (max !== "" && producto.precio > Number(max)) {
      return false;
    }

    // Filtro por marca
    if (marca !== "" && marca !== "todas" && producto.marca !== marca) {
      return false;
    }

    // Filtro por categoría
    if (hayCategorias) {
      let cat = producto.categoria.toLowerCase();
      if (cat === "protectores" && !checkProtectores) return false;
      if (cat === "entrenamiento" && !checkEntrenamiento) return false;
      if (cat === "dobok" && !checkDobok) return false;
    }

    return true;
  });

  // Si hay un criterio de orden seleccionado, lo aplicamos a los productos filtrados
  let orden = document.getElementById("orden") ? document.getElementById("orden").value : "";
  if (orden) {
    aplicarOrden(productosFiltrados, orden);
  }

  cargarproducto(productosFiltrados);
};

/**
 * Ordena un arreglo de productos in-place según el criterio seleccionado
 * @method aplicarOrden
 * @param {Array<Object>} lista - Arreglo a ordenar
 * @param {string} criterio - Criterio ('precio-asc', 'precio-desc', 'nombre-asc', 'nombre-desc')
 * @return {void}
 */
let aplicarOrden = (lista, criterio) => {
  if (criterio === "precio-asc") {
    lista.sort((a, b) => a.precio - b.precio);
  } else if (criterio === "precio-desc") {
    lista.sort((a, b) => b.precio - a.precio);
  } else if (criterio === "nombre-asc") {
    lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (criterio === "nombre-desc") {
    lista.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }
};

/**
 * Ordena el catálogo según la opción seleccionada en el select #orden
 * @method ordenarcatalogo
 * @return {void}
 */
let ordenarcatalogo = () => {
  filtrarproductos();
};
