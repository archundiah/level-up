import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ItemListContainer from './components/ItemListContainer'

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
            <NavBar />
            <Box sx={{ marginTop: '5rem', }}>
                <ItemListContainer message='Hola Mundo desde las props, este es el 2ndo desafío de CoderHouse' />
            </Box>
        </ThemeProvider>
    )
}

export default App
