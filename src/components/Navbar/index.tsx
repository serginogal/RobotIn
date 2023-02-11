import Logo from '@components/Logo'
import { useTheme } from '@emotion/react'
import DarkModeToggle from '@components/DarkModeToggle'
import { AppBar, Container, Toolbar } from '@mui/material'

type NavbarProps = {
  toggleDarkMode: () => void
}

const Navbar = ({ toggleDarkMode }: NavbarProps) => {
  const theme = useTheme()
  // @ts-ignore: Property 'palette' does not exist on type 'Theme'
  const isDark = theme.palette.mode === 'dark'

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDark={isDark} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
