import Logo from '@components/Logo'
import { Box, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#303030', p: 4 }} component="footer">
      <Box textAlign={'center'} color={'grey.50'}>
        <Logo />
      </Box>
      <Typography
        variant="subtitle1"
        align="center"
        color="grey.400"
        component="p"
      >
        This website was built by{' '}
        <Link
          color={'#4fc3f7'}
          href={'https://github.com/serginogal'}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          Sergi Nogal
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
