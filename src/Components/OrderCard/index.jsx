/* eslint-disable react/prop-types */
import { useContext } from "react"

import { XMarkIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from "../../Context"

const OrderCard = props => {

  const { id, title, image, price, handleDelete } = props

  const context = useContext(ShoppingCartContext)

  let renderXMarkIcon

  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon
      className="h-6 w-6 text-black cursor-pointer"
      onClick={() => {
        handleDelete(id)
        context.setCount(context.count - 1)
      }}
    />
  }

  return (
    <div className="flex justify-between items-center mb-3 gap-2">
      <div className="flex items-center gap-2">
        <figure className="w-16 h-16">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
        </figure>
        <p className="text-sm font-light flex-1">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard;