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

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('signOut')
    let parsedAccount
    let parsedSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify(parsedAccount))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('signOut', JSON.stringify(parsedSignOut))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}