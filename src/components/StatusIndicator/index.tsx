import { Box, Typography } from '@mui/material'

type StatusIndicatorProps = {
  status: 'AVAILABLE' | 'IN-USE' | 'OFFLINE'
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  return (
    <Box
      textAlign={'center'}
      borderRadius={'20px'}
      maxWidth={'6rem'}
      bgcolor={
        status === 'AVAILABLE'
          ? 'status.green'
          : status === 'OFFLINE'
          ? 'status.red'
          : 'status.orange'
      }
      color={'grey.50'}
      px={1}
    >
      <Typography fontWeight={'bold'} component={'span'} variant={'caption'}>
        {status}
      </Typography>
    </Box>
  )
}

export default StatusIndicator
