import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'

import NavBar from './components/NavBar'

let theme = createTheme({
  palette: {
    primary: {
      main: '#312f33',
    },
    secondary: {
      main: '#f6f8f7',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Box sx={{ marginTop: '5rem', }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/item/:gameId" element={<ItemDetailContainer />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
