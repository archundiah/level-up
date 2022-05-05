import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'

import { temporalGames } from '../helpers/games'

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
      }, 1000)
    })
  }

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
        {game.title}
      </Typography>
    </>
  )
}
export default ItemDetailContainer
