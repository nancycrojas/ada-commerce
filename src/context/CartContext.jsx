import { createContext, useEffect, useState } from 'react'

import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const initialCart = getLocalStorage('cart') || []
  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    setLocalStorage('cart', cart)
  }, [cart])

  const addProduct = (product) => {
    setCart([...cart, product])
  }

  const clearCart = () => {
    setCart([])
  }

  const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId))
  }

  console.log(cart)

  return (
    <CartContext.Provider
      value={{ cart, addProduct, clearCart, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}
