import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Box'

import { useSnackbar } from '../context/SnackbarContext'
import { useCart } from '../context/CartContext'

const ItemDetail = ({ game }) => {
  const navigate = useNavigate()
  const { showSnackbar } = useSnackbar()
  const { addToCart, cart } = useCart()
  return (
    <Box sx={{ marginTop: '6rem' }}>
      <Typography variant='body2' paddingBottom={15}>
        {game.title} - {game.price}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`/assets/${game.img}`}
          alt={game.title}
          width='auto'
          height='250px'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {game.description}
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ width: '30%', margin: '1rem' }}
            onClick={() => {
              addToCart(game)
              showSnackbar('Added to cart', 'success')
            }}
          >
            Comprar
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='secondary'
            sx={{ width: '30%', margin: '1rem' }}
            onClick={() => {
              navigate(`/${game.platform}`.toLowerCase())
            }}
          >
            Regresar
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
export default ItemDetail
