import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { temporalGames } from '../helpers/games'

import ItemList from './ItemList'

const ItemListContainer = ({ message }) => {
  const [games, setGames] = useState([])
  useEffect(() => {
    const getGames = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(temporalGames)
      }, 2000)
    })

    getGames
      .then((result) => {
        setGames(result)
      })
      .catch((error) => {
        console.log('Ha ocurrido un error: ', error)
      })
  }, [])
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
        {message}
      </Typography>
      <ItemList games={games} />
    </>
  )
}
export default ItemListContainer
