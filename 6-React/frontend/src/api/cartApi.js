const BASE_URL = import.meta.env.VITE_BASE_URL;

//Obtener listado de PRODUCTOS
export async function getProducts() {
    const res = await fetch(`${BASE_URL}products`);
    if (!res.ok) throw new Error("Error al obtener listado de productos");
    return res.json();
}

//Obtener el listado de productos en el CARRITO
export async function getCart() {
    const res = await fetch(`${BASE_URL}cart`);
    if (!res.ok) throw new Error("Error al obtener listado del carrito");
    return res.json();
}

//Agregar un producto al carrito
export async function addToCart(product) {
    const cart = await getCart();
    const existingItem = cart.find(item => String(item.productId) === String(product.id));
    if (existingItem) {
        //ACTUALIZAR CANTIDAD DE PRODUCTO
        return updateQty(existingItem.id, existingItem.qty + 1);
    } else {
        //Agregar un producto nuevo
        const { id: productId, ...productData } = product;
        const newItem = {
            ...productData,
            productId,
            qty: 1
        }
        const res = await fetch(`${BASE_URL}cart`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newItem)
        });
        if (!res.ok) throw new Error("Error al obtener listado del carrito");
        return res.json();
    }
}

//ACTUALIZAR CANTIDAD DE PRODUCTO
export async function updateQty(itemId, qty) {
    if (qty < 1) {
        throw new Error("La cantidad de producto no puede ser inferior a 1")
    }
    const res = await fetch(`${BASE_URL}cart/${itemId}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ qty })
    });
    if (!res.ok) throw new Error("No se pudo actualizar la cantidad");
    return res.json();
}

//ELIMINAR PRODUCTO DE CARRITO
export async function removeItem(itemId) {
    const res = await fetch(`${BASE_URL}cart/${itemId}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error("error al eliminar un producto")
    return true;
}