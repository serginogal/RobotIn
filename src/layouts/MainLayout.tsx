import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

interface PaletteExtension {
  status: { green: string; orange: string; red: string }
}

declare module '@mui/material/styles' {
  interface Palette extends PaletteExtension {}
  interface PaletteOptions extends PaletteExtension {}
}

type MainLayoutProps = {
  children: string | JSX.Element | JSX.Element[]
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      status: isDarkMode
        ? {
            green: '#17CB49',
            orange: '#FF9F2D',
            red: '#F74141',
          }
        : {
            green: '#00BA34',
            orange: '#F98600',
            red: '#E92020',
          },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout
