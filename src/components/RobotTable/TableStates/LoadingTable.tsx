import { Box, CircularProgress, TableCell, TableRow } from '@mui/material'

const LoadingTable = () => (
  <TableRow>
    <TableCell colSpan={6}>
      <Box
        minHeight={250}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <CircularProgress />
      </Box>
    </TableCell>
  </TableRow>
)

export default LoadingTable
