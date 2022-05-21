import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { temporalGames } from '../helpers/games'

import ItemList from './ItemList'
import { getGamesFromFB } from './../helpers/gamesFB'

const ItemListContainer = () => {
  const { category } = useParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGames = async () => {
      const gamesFB = await getGamesFromFB(category)
      setGames(gamesFB)
      setLoading(false)
    }
    getGames()
  }, [category])
  return (
    <>
      <Typography
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        {category.toUpperCase()}
      </Typography>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      ) : (
        <ItemList games={games} />
      )}
    </>
  )
}
export default ItemListContainer
