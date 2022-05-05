import GamepadIcon from '@mui/icons-material/Gamepad'
import InfoIcon from '@mui/icons-material/Info'
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'

export const options = [
  {
    platform: 'PS5',
    icon: <GamepadIcon />,
    path: '/ps5'
  },
  {
    platform: 'Xbox One',
    icon: <SportsEsportsIcon />,
    path: '/xbox'

  },
  {
    platform: 'Switch',
    icon: <VideogameAssetIcon />,
    path: '/switch'

  },
  {
    platform: 'PC',
    icon: <DesktopWindowsIcon />,
    path: '/pc'

  },
  {
    platform: 'About Us',
    icon: <InfoIcon />,
    path: '/about'
  }]
