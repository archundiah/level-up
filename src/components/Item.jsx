import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const Item = ({ id, title, platform, price, image }) => {
  return (
    <Card
      sx={{
        maxWidth: '300px',
        height: '100%',
        margin: '0 auto',
        marginBottom: '1rem',
        display: 'flex',
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={`/item/${id}`}>
            <img
              src={`/assets/${image}`}
              alt='Game caratule'
              width='auto'
              height='200px'
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem',
          }}
        >
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='h7'>
            {platform} - {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
export default Item
