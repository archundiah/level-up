import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { temporalGames } from '../helpers/games'

import ItemList from './ItemList'

const ItemListContainer = () => {
  const { category } = useParams()
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGames = new Promise((resolve) => {
      setLoading(true)
      setTimeout(() => {
        const filteredGames = temporalGames.filter(
          (game) => game.platform.toLowerCase() === category
        )
        setLoading(false)
        resolve(filteredGames)
      }, 2000)
    })

    getGames
      .then((result) => {
        setGames(result)
      })
      .catch((error) => {
        console.log('Ha ocurrido un error: ', error)
      })
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
