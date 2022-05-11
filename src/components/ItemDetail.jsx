import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Box'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import ItemCounter from './ItemCounter'
import { useSnackbar } from '../context/SnackbarContext'
import { useCart } from '../context/CartContext'

const ItemDetail = ({ game }) => {
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { showSnackbar } = useSnackbar()
  const { addToCart, cart } = useCart()

  const handleAddQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  const handleSubstractQuantity = () => {
    setQuantity((quantity) => (quantity - 1 > 0 ? quantity - 1 : 0))
  }

  setTimeout(() => {
    setLoading(false)
  }, 2000)
  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <Box sx={{ marginTop: '4rem' }}>
          <Typography variant='body2' paddingBottom={5}>
            {game.title} - {game.price}
          </Typography>

          <Box>
            <img
              src={`/assets/${game.img}`}
              alt={game.title}
              width='auto'
              height='250px'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            {game.description}
          </Box>
          <Button
            onClick={handleSubstractQuantity}
            sx={{ display: 'inline-block', marginRight: '0.5rem' }}
            variant='contained'
          >
            &lt;
          </Button>
          <ItemCounter value={quantity} />
          <Button
            onClick={handleAddQuantity}
            sx={{ display: 'inline-block', marginLeft: '0.5rem' }}
            variant='contained'
          >
            &gt;
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ width: '20%', margin: '1rem' }}
            onClick={() => {
              addToCart(game, quantity)
              showSnackbar('Added to cart', 'success')
            }}
          >
            Agregar al Carrito
          </Button>
          <Button
            variant='contained'
            color='secondary'
            sx={{ width: '20%', margin: '1rem' }}
            onClick={() => {
              navigate(`/${game.platform}`.toLowerCase())
            }}
          >
            Regresar
          </Button>

          {cart.length > 0 && (
            <Button
              variant='outlined'
              color='primary'
              sx={{ display: 'block', width: '20%', margin: '1rem auto' }}
              onClick={() => {
                navigate(`/cart`)
              }}
            >
              Terminar mi compra
            </Button>
          )}
        </Box>
      )}
    </>
  )
}
export default ItemDetail
