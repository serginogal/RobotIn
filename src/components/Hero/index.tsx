import TitleGradient from '@components/TitleGradient'
import { Button, Container, Stack, Typography } from '@mui/material'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'

const APP_URL = 'zoommtg://'

const Hero = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 8 }}>
      <TitleGradient component="h1" variant="h2">
        Get the full experience
      </TitleGradient>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        For optimal control and complete utilization of the robot, it is
        recommended to open the Desktop Application.
      </Typography>
      <Stack sx={{ pt: 2 }} alignItems="center">
        <Button
          onClick={() => window.open(APP_URL, '_blank', 'noopener,noreferrer')}
          variant="contained"
          startIcon={<OpenInNewOutlinedIcon />}
        >
          Open the Desktop App
        </Button>
      </Stack>
    </Container>
  )
}

export default Hero
