import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useCart } from '../context/CartContext'

const CartItem = ({ game }) => {
  const { addToCart, removeOneFromCart, removeFromCart } = useCart()

  return (
    <Card
      sx={{
        maxWidth: 225,
        display: 'inline-block',
        mx: 5,
      }}
    >
      <CardMedia
        component='img'
        alt='Game Screen'
        height='300'
        width='200'
        image={`/assets/${game.image}`}
      />
      <CardContent
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h7' sx={{ marginX: 0.5 }}>
          {game.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {game.quantity} x ${game.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <Box>
          <Button
            sx={{ marginX: 1 }}
            size='small'
            variant='outlined'
            color='error'
            onClick={() => removeOneFromCart(game, 1)}
          >
            -1
          </Button>
          <Button
            sx={{ marginX: 1 }}
            size='small'
            variant='outlined'
            color='success'
            onClick={() => addToCart(game, 1)}
          >
            +1
          </Button>
        </Box>

        <Button
          sx={{
            marginTop: 2,
            backgroundColor: '#312f33',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#d32f2f',
              color: '#fff',
            },
          }}
          size='small'
          variant='outlined'
          onClick={() => removeFromCart(game)}
        >
          Eliminar del Carrito
        </Button>
      </CardActions>
    </Card>
  )
}
export default CartItem
