import { Typography } from '@mui/material'

type TitleGradientProps = {
  children?: string
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
}

const TitleGradient = (
  { children, component, variant }: TitleGradientProps = {
    children: '',
    component: 'h2',
    variant: 'h2',
  }
) => {
  return (
    <Typography
      component={component as any}
      variant={variant}
      color="grey.700"
      sx={{
        textAlign: 'center',
        fontWeight: 'bolder',
        backgroundImage: `linear-gradient(45deg, #29b6f6, #0288d1)`,
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {children}
    </Typography>
  )
}

export default TitleGradient
