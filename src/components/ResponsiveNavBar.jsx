import { useState } from 'react'

import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'

import logo from '../assets/logo.png'
import { options } from '../helpers/product-options'

const ResponsiveNavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <Drawer
        variant='temporary'
        sx={{
          '& .MuiDrawer-paper': {
            background: '#312f33',
            width: '45%',
            color: 'white',
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src={logo} alt='Level Up Logo' width='85%' height='auto' />
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', margin: 2 }} />
        <List>
          {options.map((option, i) => {
            const { platform, icon } = option
            return (
              <ListItemButton key={i} onClick={() => setOpen(!open)}>
                <ListItem>
                  <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>
                  <ListItemText sx={{ color: 'white' }}>
                    {platform}
                  </ListItemText>
                </ListItem>
              </ListItemButton>
            )
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'white', marginRight: 'auto' }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </Box>
  )
}

export default ResponsiveNavBar
