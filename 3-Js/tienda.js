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

let productoSeleccionado = null;

/**
 * Mostrar un modal con información del producto
 * @method mostrarModal
 * @param {number} num - El índice del producto a mostrar
 */

mostrarModal = (num) => {
  productoSeleccionado = num;
  document.getElementById("nombre-producto").innerText = productos[num].nombre;
  document.getElementById("descripcion-producto").innerText = productos[num].description;
  document.getElementById("modal").style.display = "block";
};

/**
 * Cerrar el modal
 * @method cerrarModal
 */

cerrarModal = () => {
  document.getElementById("modal").style.display = "none";
};

/**
 * Mostrar el catálogo de productos
 * @method mostrarCatalogo
 * @param {Array} newList - La lista de productos a mostrar
 */

mostrarCatalogo = (newList = productos) => {
  let contenido = "";

  newList.forEach((producto) => {
    let id = productos.indexOf(producto);
    contenido += `<div>
      <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${formatPrice(producto.precio)}</p>
            <button type="button" onclick="mostrarModal(${id})">Ver detalle de producto</button>
            <button type="button" onclick="agregarAlCarrito(${id})">Agregar al carrito</button>
    </div>`;
  });

  if (newList.length === 0) {
    contenido = "<p>No se encontraron productos con los filtros seleccionados.</p>";
  }

  document.getElementById("catalogo").innerHTML = contenido;
};

/**
 * Agregar un producto al carrito
 * @method agregarAlCarrito
 * @param {number} num - El índice del producto a agregar al carrito
 */

agregarAlCarrito = (num) => {
  if (num === undefined) {
    num = productoSeleccionado;
  }
  if (num === null || num === undefined) {
    return;
  }

  let carrito = localStorage.getItem("carrito");
  console.log(carrito);

  let carritoList;
  if (carrito == null) {
    carritoList = [];
  } else {
    carritoList = JSON.parse(carrito);
  }
  carritoList.push(num);
  console.log(carritoList);
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  contarProductos();
};

/**
 * Mostrar los productos del carrito
 * @method mostrarCarrito
 */

mostrarCarrito = () => {
  let carrito = localStorage.getItem("carrito");
  console.log(carrito);
  let contenido = "";

  let carritoList = carrito != null ? JSON.parse(carrito) : [];

  if (carritoList.length === 0) {
    document.getElementById("carrito").innerHTML = "<p>El carrito está vacío</p>";
    return;
  } else {
    let total = 0;
    const listProductos = [];
    const listCant = [];

    carritoList.forEach((num) => {
      if (!listProductos.includes(num)) {
        listProductos.push(num);
        listCant.push(1);
      } else {
        const index = listProductos.indexOf(num);
        listCant[index]++;
      }
    });

    listProductos.forEach((num, index) => {
      if (productos[num]) {
        let cant = listCant[index];
        total += productos[num].precio * cant;

        contenido += `<div>
        <h3>${productos[num].nombre}</h3>
        <p>${formatPrice(productos[num].precio)}</p>
        <p>Cantidad: ${cant}</p>
        <button type="button" onclick="eliminarProducto(${num})">Eliminar del carrito</button>
      </div>`;
      }
    });
    
    contenido += `<p>Total: ${formatPrice(total)}</p>`;
    contenido += `<button type="button" onclick="vaciarCarrito()">Vaciar carrito</button>`;
  }

  document.getElementById("carrito").innerHTML = contenido;
};

/** 
 * Vaciar el carrito
 * @method vaciarCarrito
 **/

let vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  mostrarCarrito();
  contarProductos();
};

/**
 * Eliminar un producto del carrito
 * @method eliminarProducto
 * @param {number} num - El ID del producto en el carrito a eliminar
 */

let eliminarProducto = (num) => {
  let carrito = localStorage.getItem("carrito");
  let carritoList = carrito != null ? JSON.parse(carrito) : [];

  let index = carritoList.indexOf(num);
  if (index !== -1) {
    carritoList.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carritoList));
  mostrarCarrito();
  contarProductos();
};

/**
 * Filtrar los productos según los criterios de búsqueda
 * @method filtrarProductos
 */

let filtrarProductos = () => {
  let searchInput = document.getElementById("buscador");
  let searchWord = searchInput ? searchInput.value.toLowerCase().trim() : "";
  let min = document.getElementById("precioMin").value;
  let max = document.getElementById("precioMax").value;
  let marca = document.getElementById("marca").value;
  let prot = document.getElementById("protectores").checked;
  let entren = document.getElementById("entrenamiento").checked;
  let dobok = document.getElementById("dobok").checked;
  let newLista = productos;

  if (searchWord) {
    newLista = newLista.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchWord)
    );
  }

  if (min) {
    newLista = newLista.filter((producto) => producto.precio >= Number(min));
  }

  if (max) {
    newLista = newLista.filter((producto) => producto.precio <= Number(max));
  }

  if (marca !== "Todas") {
    newLista = newLista.filter((producto) => producto.marca === marca);
  }

  let categoriasSeleccionadas = [];
  if (prot) categoriasSeleccionadas.push("protectores");
  if (entren) categoriasSeleccionadas.push("entrenamiento");
  if (dobok) categoriasSeleccionadas.push("dobok");

  if (categoriasSeleccionadas.length > 0) {
    newLista = newLista.filter((producto) =>
      categoriasSeleccionadas.includes(producto.categoria.toLowerCase())
    );
  }

  mostrarCatalogo(newLista);
};

/**
 * Formatear el precio a moneda local
 * @method formatPrice
 * @param {number} price - El precio a formatear
 * @returns {string} - El precio formateado como moneda local
 */

let formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(price);
};

/**
 * Contar la cantidad de productos en el carrito y actualizar el contador en la interfaz
 * @method contarProductos
 */

let contarProductos = () => {
  let carrtioList = localStorage.getItem("carrito");
  let carritoList = carrtioList != null ? JSON.parse(carrtioList) : [];

  let badge = document.getElementById("cant-prod");
  if (badge) {
    badge.innerText = carritoList.length;
  }
};



let ordenarCatalogo = () => {
  const opt = document.getElementById("ordenar").value;
  let newProductos;

  switch (opt) {
    case "menor":
      newProductos = productos.sort((a, b) => a.precio - b.precio);
      break;
    case "mayor":
      newProductos = productos.sort((a, b) => b.precio - a.precio);
      break;
    case "alfabetico":
      newProductos = productos.sort((a, b) => {
        if (a.nombre.toLocaleLowerCase() < b.nombre.toLocaleLowerCase())
          return -1;
      });
      break;
    case "alfabetico-inverso":
      newProductos = productos.sort((a, b) => {
        if (a.nombre.toLocaleLowerCase() > b.nombre.toLocaleLowerCase())
          return -1;
      });
      break;
    default:
      newProductos = productos;
  }

  mostrarCatalogo(newProductos);
}