import { useContext } from "react"

import { NavLink } from "react-router-dom"

import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory('')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shoes'
            onClick={() => context.setSearchByCategory('shoes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/miscellaneous'
            onClick={() => context.setSearchByCategory('miscellaneous')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className='text-black/60'>
          juan@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Sign in
          </NavLink>
        </li>
        <li
          className="flex item-center cursor-pointer"
          onClick={() => {
            if (context.isProductDetailOpen) context.closeProductDetail()
            context.openCheckoutMenu()
          }}
        >
          <ShoppingBagIcon className="text-black w-6 h-6" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar