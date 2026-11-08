import { getCart, updateQty } from "../api/cartApi";
import { useEffect, useState } from "react";
import { formatPrice } from "@utils/format";

const Cart = () => {
    const [cart, setCart] = useState([]);
        const fetchCart = async () => {
            try{
                const data = await getCart();
                setCart(data);
            }catch(Error){
                console.log("Error al obtener el listado de carrito"+Error)
            }
        }
        useEffect(() => {
            fetchCart();
        }, []);
        const handleIncrese = async (prod) => {
            const newQty = prod.qty+1;
            setCart((prev) => prev.map((p) => p.id===prod.id ? {...p, qty: newQty} : p));
            try{
                await updateQty(prod.id, newQty);
            }catch(error){
                console.Error("Error al actualizar la cantidad"+error)
            }
        }
        const handleDecrese = async (prod) => {
            if(prod.qty === 1) return;
            const newQty = prod.qty-1;
            setCart((prev) => prev.map((p) => p.id===prod.id ? {...p, qty: newQty} : p));
            try{
                await updateQty(prod.id, newQty);
            }catch(error){
                console.Error("Error al actualizar la cantidad"+error)
            }
        }
        const handleDelete = async (id) => {
            try{
                await removeItem(id);
                setCart((prev) => prev.filter((item) => item.id!==id))
            }catch(error){
                console.Error("error al eliminar el producto"+error)
            }
        }
        return(
            <>
            {
                cart.map((prod, index) => (
                    <div key={index}>
                        <h3>{prod.nombre}</h3>
                        <p>Cantidad: 
                            <span class="material-symbols-outlined" onClick={() => handleIncrese(prod)}>add</span>
                            {prod.qty}
                            <span class="material-symbols-outlined" onClick={() => handleDecrese(prod)}>remove</span>
                            <span class="material-symbols-outlined" onClick={() => handleDelete(prod.id)}>delete</span></p>
                    </div>
                ))
            }
            </>
        )
}

export default Cart;