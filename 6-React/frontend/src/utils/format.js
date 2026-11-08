/**
 * Formatea el precio $ 35.000,55
 * @param {number} price 
 * @returns {number} con formato
 */
export const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(price);
}