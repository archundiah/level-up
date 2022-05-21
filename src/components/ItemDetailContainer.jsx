import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'

import ItemDetail from './ItemDetail'
import { getGameDetail } from '../helpers/gamesFB'

const ItemDetailContainer = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState({})

  useEffect(() => {
    const getData = async () => {
      const game = await getGameDetail(gameId)
      setGame(game)
    }
    getData()
  }, [gameId])

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
