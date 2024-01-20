import { useContext } from "react"

import { XMarkIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard" 
import "./styles.css"

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside 
      className={`${context.isCheckoutMenuOpen ? 'flex' : 'hidden'}  checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Cart</h2>
        <div onClick={() => context.closeCheckoutMenu()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer"/>
        </div>
      </div>
      <div className="px-6 overflow-y-auto">
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
    </aside>
  )
}

export default CheckoutSideMenu