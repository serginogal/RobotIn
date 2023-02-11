import { Box, Typography } from '@mui/material'

type NameAndIdProps = {
  name: string
  id?: string
}
const NameAndId = ({ name, id }: NameAndIdProps) => (
  <Box display={'flex'} flexDirection={'column'} fontWeight={'bold'}>
    {name}
    {id && (
      <Typography
        fontWeight={'bold'}
        component={'span'}
        variant={'caption'}
        color={'grey.500'}
      >
        {id}
      </Typography>
    )}
  </Box>
)

export default NameAndId
