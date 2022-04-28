import Grid from '@mui/material/Grid'

import Item from './Item'

const ItemList = ({ games }) => {
  return (
    <Grid container spacing={4}>
      {games.map((game) => (
        <Item key={game.id} {...game} />
      ))}
    </Grid>
  )
}
export default ItemList
