/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "@heroicons/react/24/solid"

export const OrdersCard = props => {

  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-96 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">Date of purchase: 01.02.23</span>
          <span className="font-light">Products purchased: {totalProducts}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  )
}