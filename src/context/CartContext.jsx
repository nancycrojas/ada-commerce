import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

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
