/**
 * This function calculates the total price of all products in cart for a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {number} sum: Total price of all products in cart
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}