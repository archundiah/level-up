import { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useMediaQuery, useTheme, styled } from '@mui/material'
import Typography from '@mui/material/Typography'

import CartWidget from './CartWidget'
import ResponsiveNavBar from './ResponsiveNavBar'
import { options } from '../helpers/product-options'

const StyledTab = styled(Tab)(() => ({
  textTransform: 'none',
  padding: '0.5rem',
  fontSize: '1rem',
  marginRight: '1rem',
}))

const NavBar = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(4)

  return (
    <>
      <AppBar
        sx={{
          position: 'fixed',
          background: '#312f33',
          color: 'white',
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <ResponsiveNavBar />
              <Typography
                variant='h6'
                sx={{ textColor: 'inherit', marginLeft: 'auto' }}
              >
                Level Up!
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                textColor='inherit'
                indicatorColor='secondary'
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {options.map((option, i) => {
                  const { platform } = option
                  return <StyledTab key={i} label={platform} />
                })}
              </Tabs>
            </>
          )}

          <CartWidget />
        </Toolbar>
      </AppBar>
    </>
  )
}
export default NavBar
