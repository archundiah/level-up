import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from './../context/CartContext'

const CartWidget = () => {
  const { cart } = useCart()
  return (
    <Link to={'/cart'} style={{ marginLeft: 'auto' }}>
      <Badge
        badgeContent={cart.length}
        color='primary'
        sx={{
          display: cart.length > 0 ? 'flex' : 'none',
        }}
      >
        <ShoppingCartIcon sx={{ color: '#fff' }} />
      </Badge>
    </Link>
  )
}
export default CartWidget
