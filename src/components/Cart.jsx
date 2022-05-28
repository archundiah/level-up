import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { useCart } from './../context/CartContext'
import CartItem from './CartItem'
import { setNewOrder } from './../helpers/orders'
import { useSnackbar } from './../context/SnackbarContext'

const Cart = () => {
  const { showSnackbar } = useSnackbar()
  const { cart, clearCart } = useCart()
  const [formValid, setFormValid] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    emailVerification: '',
    phone: '',
    cart: cart,
  })

  useEffect(() => {
    const { email, emailVerification } = formValues
    const valid = email === emailVerification && email.length > 0

    setFormValid(!valid)
  }, [formValues])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handlePurchase = () => {
    const newOrder = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      cart: cart,
      total: cart.reduce((acc, item) => acc + item.price, 0),
      date: new Date(),
    }
    setNewOrder(newOrder)
    clearCart()
    showSnackbar('Orden de compra generada con éxito', 'success')
  }
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

      {cart.length > 0 && (
        <>
          <Typography sx={{ marginX: 5, display: 'inline' }}>
            Total compra: $
            {cart.reduce((acc, game) => acc + game.price * game.quantity, 0)}
          </Typography>
          <Button
            sx={{
              margin: 5,
              width: '25%',
              display: 'inline',
            }}
            variant='contained'
            color='secondary'
            onClick={clearCart}
          >
            Vaciar Carrito
          </Button>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
          >
            <Typography sx={{ marginBottom: 2 }} variant='h6' color='primary'>
              Confirmación de la compra!
            </Typography>
            <TextField
              name='name'
              onChange={handleChange}
              value={formValues.name}
              variant='outlined'
              label='Nombre y Apellido'
            />
            <TextField
              name='phone'
              onChange={handleChange}
              value={formValues.phone}
              variant='outlined'
              label='Teléfono'
            />
            <TextField
              name='email'
              onChange={handleChange}
              value={formValues.email}
              variant='outlined'
              label='Correo'
            />
            <TextField
              name='emailVerification'
              onChange={handleChange}
              value={formValues.emailVerification}
              variant='outlined'
              label='Confirmación Correo'
            />
            <Button
              onClick={handlePurchase}
              disabled={formValid}
              variant='contained'
              color='primary'
            >
              Terminar mi compra
            </Button>
          </Box>
        </>
      )}
    </>
  )
}
export default Cart
