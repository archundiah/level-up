import { createContext, useContext, useState } from 'react'

const CartContext = createContext({
  cart: [{}],
  addToCart: () => {},
  removeFromCart: () => {},
  isInCart: () => {},
  clearCart: () => {},
})

export function useCart() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (game, quantity) => {
    if (isInCart(game)) {
      const newCart = cart.map((item) =>
        item.title === game.title
          ? { title: game.title, quantity: ++item.quantity }
          : { title: item.title, quantity: item.quantity }
      )
      setCart(newCart)
      return
    }
    setCart([...cart, { title: game.title, quantity: quantity }])
  }

  const removeFromCart = (game) => {
    setCart(cart.filter((item) => item.id !== game.title))
  }

  const isInCart = (game) => {
    return cart.some((item) => item.title === game.title)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
