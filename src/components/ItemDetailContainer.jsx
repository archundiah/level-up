import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'

import { temporalGames } from '../helpers/games'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState({})

  useEffect(() => {
    ;(async () => {
      const gameData = await getGameDetail()
      if (gameData) {
        setGame(gameData)
      }
    })()
  }, [gameId])

  const getGameDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(temporalGames.find((game) => game.id === gameId))
      }, 2000)
    })
  }

  return (
    <>
      <Typography
        component={'h6'}
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <ItemDetail game={game} />
      </Typography>
    </>
  )
}
export default ItemDetailContainer
