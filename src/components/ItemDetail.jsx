import Box from '@mui/material/Box'
import Typography from '@mui/material/Box'

const ItemDetail = ({ game }) => {
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
          }}
        >
          {game.description}
        </Box>
      </Box>
    </Box>
  )
}
export default ItemDetail
