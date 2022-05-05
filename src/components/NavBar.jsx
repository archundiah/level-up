import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <ResponsiveNavBar />
              <Typography variant='h6' sx={{ marginLeft: 'auto' }}>
                Level Up!
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                textColor='secondary'
                value={value}
                onChange={(e, value) => setValue(value)}
                TabIndicatorProps={{
                  style: { background: '#fff' },
                }}
              >
                {options.map((option, index) => {
                  const { platform, path } = option
                  return (
                    <StyledTab
                      key={index}
                      classes={{
                        label: { color: 'red' },
                      }}
                      label={platform}
                      component={Link}
                      to={path}
                      sx={{
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    />
                  )
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
