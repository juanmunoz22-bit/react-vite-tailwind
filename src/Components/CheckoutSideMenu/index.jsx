import { useContext } from "react"
import { Link } from "react-router-dom"

import { XMarkIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"
import "./styles.css"

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }

  return (
    <aside
      className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'}  checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Cart</h2>
        <div onClick={() => context.closeCheckoutMenu()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6 overflow-y-auto flex-1">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="p-6 mt-auto">
        <p className="flex justify-between">
          <span className="text-gray-500 font-light">Total:</span>
          <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="/my-orders/last">
          <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu