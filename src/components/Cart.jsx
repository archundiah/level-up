import { useCart } from './../context/CartContext'

const Cart = () => {
  const { cart, clearCart } = useCart()

  return (
    <>
      <button onClick={clearCart}>Limpiar Carrito!</button>
      <pre>
        {cart.length === 0
          ? 'Tu carrito está vacio! Agrega juegos a tu carrito!'
          : JSON.stringify(cart)}
      </pre>
    </>
  )
}
export default Cart
