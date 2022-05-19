import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { useCart } from './../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, clearCart } = useCart()
  return (
    <>
      <div>
        {cart.length === 0 ? (
          <Typography variant='h6' color='text.secondary'>
            Tu carrito está vacío, prueba a agregar
            <Link
              style={{
                textDecoration: 'none',
              }}
              to='/ps5'
            >
              {' '}
              algún juego{' '}
            </Link>
            para proceder con la compra!
          </Typography>
        ) : (
          cart.map((game) => <CartItem key={game.title} game={game} />)
        )}
      </div>
      <div>
        {cart.length > 0 && (
          <Typography sx={{ margin: 5 }}>
            Total de la compra: $
            {cart.reduce((acc, game) => acc + game.price * game.quantity, 0)}
          </Typography>
        )}

        {cart.length > 0 && (
          <Button
            sx={{
              marginX: 5,
              width: '25%',
            }}
            variant='contained'
            color='primary'
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
        )}
      </div>
    </>
  )
}
export default Cart
