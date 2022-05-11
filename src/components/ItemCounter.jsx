import TextField from '@mui/material/TextField'

const ItemCounter = ({ value }) => {
  return (
    <TextField
      type='number'
      label='Cantidad'
      disabled
      variant='filled'
      value={value}
      margin='normal'
      sx={{
        display: 'inline-block',
        margin: '0 auto',
        width: '100px',
        textAlign: 'center',
      }}
    ></TextField>
  )
}
export default ItemCounter
