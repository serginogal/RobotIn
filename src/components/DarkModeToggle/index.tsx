import { IconButton } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined'

type DarkModeToggleProps = {
  isDark: boolean
  toggleDarkMode?: () => any
}

const DarkModeToggle = ({ toggleDarkMode, isDark }: DarkModeToggleProps) => {
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode} color="inherit">
      {isDark ? <LightModeOutlinedIcon /> : <Brightness2OutlinedIcon />}
    </IconButton>
  )
}

export default DarkModeToggle
