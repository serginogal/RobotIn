import { Box, TableCell, TableRow, Typography } from '@mui/material'

const EmptyTable = () => (
  <TableRow>
    <TableCell colSpan={6}>
      <Box
        minHeight={250}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography variant={'h5'} component={'h5'}>
          Ooops! Looks like there are no Robots to load. 🤖
        </Typography>
        <Typography variant={'subtitle2'} component={'p'}>
          Contact the administrator to register some robots.
        </Typography>
      </Box>
    </TableCell>
  </TableRow>
)

export default EmptyTable
