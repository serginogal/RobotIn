import { Box, TableCell, TableRow, Typography } from '@mui/material'

type ErrorTableProps = {
  error: Error
}

const ErrorTable = ({ error }: ErrorTableProps) => (
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
          Ooops! Something went wrong. 😖
        </Typography>
        <Typography variant={'caption'} component={'p'}>
          "{error.message}"
        </Typography>
        <Typography variant={'subtitle2'} component={'p'}>
          While loading the data.
        </Typography>
      </Box>
    </TableCell>
  </TableRow>
)

export default ErrorTable
