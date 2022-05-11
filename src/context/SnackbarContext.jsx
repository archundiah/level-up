import { Alert, Slide, Snackbar } from '@mui/material'
import { createContext, useContext, useMemo, useState } from 'react'

const SnackbarContext = createContext()

export function useSnackbar() {
  return useContext(SnackbarContext)
}

function TransitionUp(props) {
  return <Slide {...props} direction='up' />
}

export function SnackbarContextProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState('success')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showSnackbar = (message, severity) => {
    setMessage(message)
    setSeverity(severity)
    setOpen(true)
  }

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const value = useMemo(
    () => ({
      showSnackbar,
    }),
    [showSnackbar]
  )

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        TransitionComponent={TransitionUp}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} elevation={2}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
