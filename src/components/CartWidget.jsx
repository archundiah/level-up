import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const CartWidget = () => {
  return (
    <Link to={'/cart'} style={{ marginLeft: 'auto' }}>
      <ShoppingCartIcon sx={{ color: '#fff' }} />
    </Link>
  )
}
export default CartWidget
